// ====================================
// متغيرات عامة
// ====================================
let allContracts = contractsData;
let filteredContracts = [...allContracts];
let currentTab = 'overview';

// ====================================
// تحميل الصفحة
// ====================================
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupTabs();
    loadOverviewData();
    loadContracts();
    loadUniversities();
    loadSpecializations();
    loadDepartments();
    setupFilters();
    setupModal();
}

// ====================================
// إدارة التبويبات
// ====================================
function setupTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');
            switchTab(tabName);
        });
    });
}

function switchTab(tabName) {
    // إخفاء جميع التبويبات
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // إلغاء تفعيل جميع الأزرار
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // تفعيل التبويب المختار
    document.getElementById(tabName).classList.add('active');
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
    
    currentTab = tabName;
}

// ====================================
// تحميل بيانات النظرة العامة
// ====================================
function loadOverviewData() {
    // تحديث الإحصائيات
    const universities = getUniversities();
    const specializations = getSpecializations();
    
    document.getElementById('totalUniversities').textContent = universities.length;
    document.getElementById('totalSpecializations').textContent = specializations.length;
    
    // رسم المخططات
    drawProgressChart();
    drawDegreeChart();
    drawExpiryChart();
    drawDepartmentChart();
}

function drawProgressChart() {
    const container = document.getElementById('progressChart');
    const progressDist = getProgressDistribution();
    
    let html = '';
    Object.entries(progressDist).sort((a, b) => b[1] - a[1]).forEach(([prog, count]) => {
        const percentage = (count / allContracts.length * 100).toFixed(1);
        html += `
            <div class="chart-bar">
                <div class="chart-bar-label">
                    <span>${prog}</span>
                    <span>${count} عقد (${percentage}%)</span>
                </div>
                <div class="chart-bar-fill" style="width: ${percentage}%">
                    ${count}
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

function drawDegreeChart() {
    const container = document.getElementById('degreeChart');
    const degrees = getDegrees();
    
    let html = '<div class="chart-pie">';
    Object.entries(degrees).forEach(([degree, count]) => {
        const percentage = (count / allContracts.length * 100).toFixed(1);
        html += `
            <div class="pie-item">
                <div class="pie-label">${degree}</div>
                <div class="pie-value">${count}</div>
                <div class="pie-percentage">${percentage}%</div>
            </div>
        `;
    });
    html += '</div>';
    
    container.innerHTML = html;
}

function drawExpiryChart() {
    const container = document.getElementById('expiryChart');
    const expiryData = getContractsByExpiryPeriod();
    
    const data = [
        { label: 'منتهية أو قريبة من الانتهاء (2024)', count: expiryData.expired2024.length, color: '#ef4444' },
        { label: 'النصف الأول 2025', count: expiryData.expiringH1_2025.length, color: '#f59e0b' },
        { label: 'النصف الثاني 2025', count: expiryData.expiringH2_2025.length, color: '#06b6d4' },
        { label: '2026 وما بعد', count: expiryData.expiring2026.length, color: '#10b981' }
    ];
    
    let html = '';
    data.forEach(item => {
        const percentage = (item.count / allContracts.length * 100).toFixed(1);
        html += `
            <div class="chart-bar">
                <div class="chart-bar-label">
                    <span>${item.label}</span>
                    <span>${item.count} عقد (${percentage}%)</span>
                </div>
                <div class="chart-bar-fill" style="width: ${percentage}%; background: ${item.color}">
                    ${item.count}
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

function drawDepartmentChart() {
    const container = document.getElementById('departmentChart');
    const departments = getDepartments();
    
    let html = '';
    departments.sort((a, b) => b.contracts.length - a.contracts.length).forEach(dept => {
        const percentage = (dept.contracts.length / allContracts.length * 100).toFixed(1);
        html += `
            <div class="chart-bar">
                <div class="chart-bar-label">
                    <span>${dept.name}</span>
                    <span>${dept.contracts.length} عقد (${percentage}%)</span>
                </div>
                <div class="chart-bar-fill" style="width: ${percentage}%">
                    ${dept.contracts.length}
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

// ====================================
// تحميل العقود
// ====================================
function loadContracts() {
    const expiryData = getContractsByExpiryPeriod();
    
    renderContractsSection('contracts2024', expiryData.expired2024);
    renderContractsSection('contractsH1_2025', expiryData.expiringH1_2025);
    renderContractsSection('contractsH2_2025', expiryData.expiringH2_2025);
    renderContractsSection('contracts2026', expiryData.expiring2026);
}

function renderContractsSection(containerId, contracts) {
    const container = document.getElementById(containerId);
    
    if (contracts.length === 0) {
        container.innerHTML = '<p class="text-center">لا توجد عقود في هذه الفترة</p>';
        return;
    }
    
    let html = '';
    contracts.forEach(contract => {
        html += createContractCard(contract);
    });
    
    container.innerHTML = html;
}

function createContractCard(contract) {
    const progressValue = parseInt(contract.progress) || 0;
    const degreeClass = getDegreeClass(contract.degree);
    
    return `
        <div class="contract-card" onclick="showContractDetails(${contract.id})">
            <div class="contract-header">
                <h4 class="contract-title">${contract.program}</h4>
                <span class="contract-badge ${degreeClass}">${contract.degree}</span>
            </div>
            
            <div class="contract-info">
                <div class="info-row">
                    <i class="fas fa-university"></i>
                    <span>${contract.university}</span>
                </div>
                <div class="info-row">
                    <i class="fas fa-building"></i>
                    <span>${contract.department}</span>
                </div>
                <div class="info-row">
                    <i class="fas fa-info-circle"></i>
                    <span>${contract.progressText || 'بدون حالة'}</span>
                </div>
            </div>
            
            <div class="contract-progress">
                <div class="progress-label">نسبة الإنجاز: ${contract.progress}</div>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${progressValue}%"></div>
                </div>
            </div>
            
            <div class="contract-dates">
                <div class="date-item">
                    <div class="date-label">تاريخ البداية</div>
                    <div class="date-value">${formatDate(contract.startDate)}</div>
                </div>
                <div class="date-item">
                    <div class="date-label">تاريخ الانتهاء</div>
                    <div class="date-value">${formatDate(contract.endDate)}</div>
                </div>
            </div>
        </div>
    `;
}

function getDegreeClass(degree) {
    const classes = {
        'بكالوريوس': 'bachelor',
        'ماجستير': 'master',
        'ماجستير تنفيذي': 'master',
        'دكتوراه': 'phd',
        'دبلوم': 'diploma'
    };
    return classes[degree] || 'bachelor';
}

// ====================================
// تحميل الجامعات
// ====================================
function loadUniversities() {
    const universities = getUniversities();
    const container = document.getElementById('universitiesGrid');
    
    let html = '';
    universities.sort((a, b) => b.contracts.length - a.contracts.length).forEach(uni => {
        html += createUniversityCard(uni);
    });
    
    container.innerHTML = html;
}

function createUniversityCard(university) {
    const degrees = {};
    university.contracts.forEach(c => {
        degrees[c.degree] = (degrees[c.degree] || 0) + 1;
    });
    
    let programsHtml = '';
    university.contracts.slice(0, 5).forEach(contract => {
        programsHtml += `
            <div class="program-item" onclick="showContractDetails(${contract.id})">
                <span class="program-name">${contract.program}</span>
                <span class="program-degree">${contract.degree}</span>
            </div>
        `;
    });
    
    return `
        <div class="university-card">
            <div class="university-header">
                <h3 class="university-name">${university.name}</h3>
                <div class="contracts-count">${university.contracts.length}</div>
            </div>
            
            <div class="university-stats">
                ${Object.entries(degrees).map(([degree, count]) => `
                    <div class="stat-box">
                        <div class="stat-box-value">${count}</div>
                        <div class="stat-box-label">${degree}</div>
                    </div>
                `).join('')}
            </div>
            
            <div class="university-programs">
                <div class="programs-title">البرامج (عرض ${Math.min(5, university.contracts.length)} من ${university.contracts.length})</div>
                <div class="programs-list">
                    ${programsHtml}
                </div>
            </div>
        </div>
    `;
}

// ====================================
// تحميل التخصصات
// ====================================
function loadSpecializations() {
    const specializations = getSpecializations();
    const container = document.getElementById('specializationsGrid');
    
    renderSpecializations(specializations, container);
    
    // إعداد أزرار الفئات
    document.querySelectorAll('.cat-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const category = this.getAttribute('data-category');
            filterSpecializationsByCategory(category, specializations, container);
        });
    });
}

function renderSpecializations(specializations, container) {
    let html = '';
    specializations.sort((a, b) => b.contracts.length - a.contracts.length).forEach(spec => {
        html += createSpecializationCard(spec);
    });
    
    container.innerHTML = html;
}

function createSpecializationCard(specialization) {
    const category = determineCategory(specialization.contracts[0].department);
    const icon = getCategoryIcon(category);
    
    const degrees = {};
    specialization.contracts.forEach(c => {
        degrees[c.degree] = (degrees[c.degree] || 0) + 1;
    });
    
    return `
        <div class="spec-card" data-category="${category}">
            <div class="spec-header">
                <div class="spec-icon">${icon}</div>
                <div class="spec-name">${specialization.name}</div>
            </div>
            <div class="spec-count">${specialization.contracts.length} عقد</div>
            
            <div class="spec-details">
                ${Object.entries(degrees).map(([degree, count]) => `
                    <div class="spec-detail-item">
                        <span>${degree}</span>
                        <span>${count}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function determineCategory(department) {
    if (department.includes('الهندسية')) return 'engineering';
    if (department.includes('الصحية')) return 'health';
    if (department.includes('الإنسانية')) return 'humanities';
    if (department.includes('الإسلامية')) return 'islamic';
    if (department.includes('العلمية')) return 'science';
    return 'all';
}

function getCategoryIcon(category) {
    const icons = {
        'engineering': '<i class="fas fa-cogs"></i>',
        'health': '<i class="fas fa-heartbeat"></i>',
        'humanities': '<i class="fas fa-users"></i>',
        'islamic': '<i class="fas fa-mosque"></i>',
        'science': '<i class="fas fa-flask"></i>',
        'all': '<i class="fas fa-th"></i>'
    };
    return icons[category] || icons['all'];
}

function filterSpecializationsByCategory(category, specializations, container) {
    if (category === 'all') {
        renderSpecializations(specializations, container);
        return;
    }
    
    const filtered = specializations.filter(spec => {
        const specCategory = determineCategory(spec.contracts[0].department);
        return specCategory === category;
    });
    
    renderSpecializations(filtered, container);
}

// ====================================
// تحميل الإدارات
// ====================================
function loadDepartments() {
    const departments = getDepartments();
    const container = document.getElementById('departmentsGrid');
    
    let html = '';
    departments.sort((a, b) => b.contracts.length - a.contracts.length).forEach(dept => {
        html += createDepartmentCard(dept);
    });
    
    container.innerHTML = html;
}

function createDepartmentCard(department) {
    const degrees = {};
    department.contracts.forEach(c => {
        degrees[c.degree] = (degrees[c.degree] || 0) + 1;
    });
    
    return `
        <div class="department-card">
            <div class="department-header">
                <div class="department-icon">
                    <i class="fas fa-building"></i>
                </div>
                <div class="department-info">
                    <h3 class="department-name">${department.name}</h3>
                    <div class="department-count">${department.contracts.length} عقد</div>
                </div>
            </div>
            
            <div class="department-stats">
                ${Object.entries(degrees).map(([degree, count]) => `
                    <div class="stat-box">
                        <div class="stat-box-value">${count}</div>
                        <div class="stat-box-label">${degree}</div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

// ====================================
// الفلاتر
// ====================================
function setupFilters() {
    // تعبئة خيارات الفلاتر
    populateFilterOptions();
    
    // إضافة مستمعي الأحداث
    document.getElementById('contractSearch')?.addEventListener('input', applyFilters);
    document.getElementById('degreeFilter')?.addEventListener('change', applyFilters);
    document.getElementById('progressFilter')?.addEventListener('change', applyFilters);
    document.getElementById('departmentFilter')?.addEventListener('change', applyFilters);
    document.getElementById('universitySearch')?.addEventListener('input', filterUniversities);
}

function populateFilterOptions() {
    // الدرجات العلمية
    const degrees = [...new Set(allContracts.map(c => c.degree))];
    const degreeSelect = document.getElementById('degreeFilter');
    if (degreeSelect) {
        degrees.forEach(degree => {
            const option = document.createElement('option');
            option.value = degree;
            option.textContent = degree;
            degreeSelect.appendChild(option);
        });
    }
    
    // نسب الإنجاز
    const progress = [...new Set(allContracts.map(c => c.progress))];
    const progressSelect = document.getElementById('progressFilter');
    if (progressSelect) {
        progress.forEach(prog => {
            const option = document.createElement('option');
            option.value = prog;
            option.textContent = prog;
            progressSelect.appendChild(option);
        });
    }
    
    // الإدارات
    const departments = [...new Set(allContracts.map(c => c.department))];
    const deptSelect = document.getElementById('departmentFilter');
    if (deptSelect) {
        departments.forEach(dept => {
            const option = document.createElement('option');
            option.value = dept;
            option.textContent = dept;
            deptSelect.appendChild(option);
        });
    }
}

function applyFilters() {
    const searchTerm = document.getElementById('contractSearch')?.value.toLowerCase() || '';
    const degree = document.getElementById('degreeFilter')?.value || '';
    const progress = document.getElementById('progressFilter')?.value || '';
    const department = document.getElementById('departmentFilter')?.value || '';
    
    filteredContracts = allContracts.filter(contract => {
        const matchesSearch = contract.program.toLowerCase().includes(searchTerm) ||
                            contract.university.toLowerCase().includes(searchTerm);
        const matchesDegree = !degree || contract.degree === degree;
        const matchesProgress = !progress || contract.progress === progress;
        const matchesDepartment = !department || contract.department === department;
        
        return matchesSearch && matchesDegree && matchesProgress && matchesDepartment;
    });
    
    loadContracts();
}

function filterUniversities() {
    const searchTerm = document.getElementById('universitySearch')?.value.toLowerCase() || '';
    const universities = getUniversities();
    
    const filtered = universities.filter(uni => 
        uni.name.toLowerCase().includes(searchTerm)
    );
    
    const container = document.getElementById('universitiesGrid');
    let html = '';
    filtered.forEach(uni => {
        html += createUniversityCard(uni);
    });
    
    container.innerHTML = html;
}

// ====================================
// البحث بالتواريخ
// ====================================
function searchByDate() {
    const dateInput = document.getElementById('specificDate');
    const date = dateInput.value;
    
    if (!date) {
        alert('الرجاء اختيار تاريخ');
        return;
    }
    
    const results = allContracts.filter(contract => {
        return contract.startDate === date || 
               contract.endDate === date ||
               contract.docsReceivedDate === date ||
               contract.updatedDocsDate === date ||
               contract.verificationVisitDate === date ||
               contract.reviewerVisitDate === date;
    });
    
    displayDateSearchResults(results, `نتائج البحث للتاريخ: ${date}`);
}

function searchByDateRange() {
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    
    if (!startDate || !endDate) {
        alert('الرجاء اختيار نطاق التواريخ');
        return;
    }
    
    const results = getContractsByDateRange(startDate, endDate);
    displayDateSearchResults(results, `نتائج البحث من ${startDate} إلى ${endDate}`);
}

function displayDateSearchResults(results, title) {
    const container = document.getElementById('dateSearchResults');
    
    let html = `
        <div class="results-header">
            <h3>${title}</h3>
            <p class="results-count">تم العثور على ${results.length} عقد</p>
        </div>
    `;
    
    if (results.length > 0) {
        html += '<div class="contracts-grid">';
        results.forEach(contract => {
            html += createContractCard(contract);
        });
        html += '</div>';
    } else {
        html += '<p class="text-center">لا توجد نتائج</p>';
    }
    
    container.innerHTML = html;
}

// ====================================
// عرض تفاصيل العقد
// ====================================
function setupModal() {
    const modal = document.getElementById('contractModal');
    const closeBtn = document.querySelector('.close');
    
    closeBtn.onclick = function() {
        modal.style.display = 'none';
    };
    
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
}

function showContractDetails(contractId) {
    const contract = allContracts.find(c => c.id === contractId);
    if (!contract) return;
    
    const modal = document.getElementById('contractModal');
    const modalBody = document.getElementById('modalBody');
    
    modalBody.innerHTML = `
        <div class="modal-header">
            <h2 class="modal-title">${contract.program}</h2>
            <p class="modal-subtitle">${contract.university}</p>
        </div>
        
        <div class="modal-body">
            <div class="detail-section">
                <h3 class="detail-section-title">معلومات أساسية</h3>
                <div class="detail-grid">
                    <div class="detail-item">
                        <div class="detail-label">الدرجة العلمية</div>
                        <div class="detail-value">${contract.degree}</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">حالة العقد</div>
                        <div class="detail-value">${contract.status}</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">نسبة الإنجاز</div>
                        <div class="detail-value">${contract.progress}</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">الإدارة المختصة</div>
                        <div class="detail-value">${contract.department}</div>
                    </div>
                </div>
            </div>
            
            <div class="detail-section">
                <h3 class="detail-section-title">التواريخ</h3>
                <div class="detail-grid">
                    <div class="detail-item">
                        <div class="detail-label">بداية سريان العقد</div>
                        <div class="detail-value">${formatDate(contract.startDate)}</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">انتهاء سريان العقد</div>
                        <div class="detail-value">${formatDate(contract.endDate)}</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">تاريخ استلام الوثائق</div>
                        <div class="detail-value">${contract.docsReceivedDate ? formatDate(contract.docsReceivedDate) : 'لم يتم التسليم'}</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">تاريخ الوثائق المحدثة</div>
                        <div class="detail-value">${contract.updatedDocsDate ? formatDate(contract.updatedDocsDate) : 'لم يتم التسليم'}</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">تاريخ زيارة التحقق</div>
                        <div class="detail-value">${contract.verificationVisitDate ? formatDate(contract.verificationVisitDate) : 'لم يتم جدولة'}</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">تاريخ زيارة المراجعين</div>
                        <div class="detail-value">${contract.reviewerVisitDate ? formatDate(contract.reviewerVisitDate) : 'لم يتم جدولة'}</div>
                    </div>
                </div>
            </div>
            
            <div class="detail-section">
                <h3 class="detail-section-title">حالة الوثائق والزيارات</h3>
                <div class="detail-grid">
                    <div class="detail-item">
                        <div class="detail-label">حالة استلام الوثائق</div>
                        <div class="detail-value">${contract.docsReceived}</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">حالة الوثائق المحدثة</div>
                        <div class="detail-value">${contract.updatedDocsStatus}</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">حالة زيارة المراجعين</div>
                        <div class="detail-value">${contract.reviewerVisitStatus || 'لم يتم جدولة'}</div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
}

// ====================================
// دوال مساعدة
// ====================================
function formatDate(dateString) {
    if (!dateString) return 'غير محدد';
    
    const date = new Date(dateString);
    return date.toLocaleDateString('ar-SA', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}
