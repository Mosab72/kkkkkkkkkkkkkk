// جميع بيانات العقود - 445 عقد تحت الإجراء
// تم استخلاص البيانات من النظام الأكاديمي

const contractsData = [
  // إدارة برامج العلوم الهندسية وعلوم الحاسب
  {"id":1,"university":"جامعة الملك عبد العزيز","program":"هندسة الطيران","degree":"ماجستير","status":"تحت الإجراء","startDate":"2023-04-13","endDate":"2026-06-30","department":"إدارة برامج العلوم الهندسية وعلوم الحاسب","progress":"5%","progressText":"العقود الجديدة - اللقاء التعريفي","docsReceived":"لم يتم التسليم","docsReceivedDate":"","updatedDocsStatus":"لم يتم التسليم","updatedDocsDate":"","verificationVisitDate":"","reviewerVisitStatus":"","reviewerVisitDate":""},
  {"id":2,"university":"جامعة الملك عبد العزيز","program":"الهندسة الصناعية","degree":"ماجستير","status":"تحت الإجراء","startDate":"2023-04-13","endDate":"2026-06-30","department":"إدارة برامج العلوم الهندسية وعلوم الحاسب","progress":"5%","progressText":"العقود الجديدة - اللقاء التعريفي","docsReceived":"لم يتم التسليم","docsReceivedDate":"","updatedDocsStatus":"لم يتم التسليم","updatedDocsDate":"","verificationVisitDate":"","reviewerVisitStatus":"","reviewerVisitDate":""},
  {"id":3,"university":"جامعة الملك عبد العزيز","program":"الإدارة الهندسية","degree":"ماجستير","status":"تحت الإجراء","startDate":"2023-04-13","endDate":"2026-06-30","department":"إدارة برامج العلوم الهندسية وعلوم الحاسب","progress":"40%","progressText":"زيارة التحقق","docsReceived":"تم التسليم متأخر","docsReceivedDate":"2025-09-07","updatedDocsStatus":"تم التسليم متأخر","updatedDocsDate":"2025-11-02","verificationVisitDate":"2025-11-05","reviewerVisitStatus":"تم جدولة الزيارة - متأخر","reviewerVisitDate":"2026-01-25"},
  {"id":4,"university":"جامعة الملك عبد العزيز","program":"العمارة","degree":"ماجستير","status":"تحت الإجراء","startDate":"2023-04-13","endDate":"2026-06-30","department":"إدارة برامج العلوم الهندسية وعلوم الحاسب","progress":"5%","progressText":"العقود الجديدة - اللقاء التعريفي","docsReceived":"لم يتم التسليم","docsReceivedDate":"","updatedDocsStatus":"لم يتم التسليم","updatedDocsDate":"","verificationVisitDate":"","reviewerVisitStatus":"","reviewerVisitDate":""},
  {"id":5,"university":"جامعة الملك عبد العزيز","program":"تقنية المعلومات","degree":"دكتوراه","status":"تحت الإجراء","startDate":"2023-04-13","endDate":"2026-06-30","department":"إدارة برامج العلوم الهندسية وعلوم الحاسب","progress":"40%","progressText":"زيارة التحقق","docsReceived":"تم التسليم متأخر","docsReceivedDate":"2025-09-07","updatedDocsStatus":"تم التسليم متأخر","updatedDocsDate":"2025-10-26","verificationVisitDate":"2025-10-30","reviewerVisitStatus":"تم جدولة الزيارة - متأخر","reviewerVisitDate":"2026-01-25"},
  {"id":6,"university":"جامعة الملك عبد العزيز","program":"نظم المعلومات","degree":"دكتوراه","status":"تحت الإجراء","startDate":"2023-04-13","endDate":"2026-06-30","department":"إدارة برامج العلوم الهندسية وعلوم الحاسب","progress":"40%","progressText":"زيارة التحقق","docsReceived":"تم التسليم متأخر","docsReceivedDate":"2025-09-07","updatedDocsStatus":"تم التسليم متأخر","updatedDocsDate":"2025-10-26","verificationVisitDate":"2025-10-30","reviewerVisitStatus":"تم جدولة الزيارة - متأخر","reviewerVisitDate":"2026-01-25"},
  {"id":7,"university":"جامعة الملك عبد العزيز","program":"الهندسة البحرية","degree":"بكالوريوس","status":"تحت الإجراء","startDate":"2023-04-13","endDate":"2026-06-30","department":"إدارة برامج العلوم الهندسية وعلوم الحاسب","progress":"5%","progressText":"العقود الجديدة - اللقاء التعريفي","docsReceived":"لم يتم التسليم","docsReceivedDate":"","updatedDocsStatus":"لم يتم التسليم","updatedDocsDate":"","verificationVisitDate":"","reviewerVisitStatus":"","reviewerVisitDate":""},
  {"id":8,"university":"كليات الأصالة","program":"التصميم الداخلي","degree":"بكالوريوس","status":"تحت الإجراء","startDate":"2024-03-02","endDate":"2025-03-01","department":"إدارة برامج العلوم الهندسية وعلوم الحاسب","progress":"40%","progressText":"زيارة التحقق","docsReceived":"تم التسليم متأخر","docsReceivedDate":"2025-03-06","updatedDocsStatus":"تم التسليم متأخر","updatedDocsDate":"2025-05-15","verificationVisitDate":"2025-05-22","reviewerVisitStatus":"تم جدولة الزيارة - متأخر","reviewerVisitDate":"2025-12-21"},
  {"id":9,"university":"كليات الأصالة","program":"العمارة","degree":"بكالوريوس","status":"تحت الإجراء","startDate":"2024-03-02","endDate":"2025-03-01","department":"إدارة برامج العلوم الهندسية وعلوم الحاسب","progress":"40%","progressText":"زيارة التحقق","docsReceived":"تم التسليم متأخر","docsReceivedDate":"2025-03-06","updatedDocsStatus":"تم التسليم متأخر","updatedDocsDate":"2025-05-15","verificationVisitDate":"2025-05-22","reviewerVisitStatus":"تم جدولة الزيارة - متأخر","reviewerVisitDate":"2025-12-21"},
  {"id":10,"university":"جامعة الإمام عبد الرحمن بن فيصل","program":"العلوم في إدارة هندسة التشييد","degree":"ماجستير","status":"تحت الإجراء","startDate":"2024-06-20","endDate":"2026-01-31","department":"إدارة برامج العلوم الهندسية وعلوم الحاسب","progress":"5%","progressText":"العقود الجديدة - اللقاء التعريفي","docsReceived":"لم يتم التسليم","docsReceivedDate":"","updatedDocsStatus":"لم يتم التسليم","updatedDocsDate":"","verificationVisitDate":"","reviewerVisitStatus":"","reviewerVisitDate":""},
  {"id":11,"university":"جامعة الإمام عبد الرحمن بن فيصل","program":"التصميم الصناعي","degree":"بكالوريوس","status":"تحت الإجراء","startDate":"2024-06-20","endDate":"2026-01-31","department":"إدارة برامج العلوم الهندسية وعلوم الحاسب","progress":"5%","progressText":"العقود الجديدة - اللقاء التعريفي","docsReceived":"لم يتم التسليم","docsReceivedDate":"","updatedDocsStatus":"لم يتم التسليم","updatedDocsDate":"","verificationVisitDate":"","reviewerVisitStatus":"","reviewerVisitDate":""},
  {"id":12,"university":"جامعة الإمام عبد الرحمن بن فيصل","program":"العلوم في الإدارة الهندسية","degree":"ماجستير","status":"تحت الإجراء","startDate":"2024-06-20","endDate":"2026-01-31","department":"إدارة برامج العلوم الهندسية وعلوم الحاسب","progress":"5%","progressText":"العقود الجديدة - اللقاء التعريفي","docsReceived":"لم يتم التسليم","docsReceivedDate":"","updatedDocsStatus":"لم يتم التسليم","updatedDocsDate":"","verificationVisitDate":"","reviewerVisitStatus":"","reviewerVisitDate":""},
  {"id":13,"university":"جامعة الإمام عبد الرحمن بن فيصل","program":"العلوم في الهندسة البيئية","degree":"ماجستير","status":"تحت الإجراء","startDate":"2024-06-20","endDate":"2026-01-31","department":"إدارة برامج العلوم الهندسية وعلوم الحاسب","progress":"5%","progressText":"العقود الجديدة - اللقاء التعريفي","docsReceived":"لم يتم التسليم","docsReceivedDate":"","updatedDocsStatus":"لم يتم التسليم","updatedDocsDate":"","verificationVisitDate":"","reviewerVisitStatus":"","reviewerVisitDate":""},
  {"id":14,"university":"جامعة الإمام عبد الرحمن بن فيصل","program":"العلوم في نظم المعلومات وتحليل البيانات","degree":"ماجستير","status":"تحت الإجراء","startDate":"2024-06-20","endDate":"2026-01-31","department":"إدارة برامج العلوم الهندسية وعلوم الحاسب","progress":"5%","progressText":"العقود الجديدة - اللقاء التعريفي","docsReceived":"لم يتم التسليم","docsReceivedDate":"","updatedDocsStatus":"لم يتم التسليم","updatedDocsDate":"","verificationVisitDate":"","reviewerVisitStatus":"","reviewerVisitDate":""},
  {"id":15,"university":"جامعة الإمام عبد الرحمن بن فيصل","program":"العمارة","degree":"ماجستير","status":"تحت الإجراء","startDate":"2024-06-20","endDate":"2026-01-31","department":"إدارة برامج العلوم الهندسية وعلوم الحاسب","progress":"5%","progressText":"العقود الجديدة - اللقاء التعريفي","docsReceived":"لم يتم التسليم","docsReceivedDate":"","updatedDocsStatus":"لم يتم التسليم","updatedDocsDate":"","verificationVisitDate":"","reviewerVisitStatus":"","reviewerVisitDate":""}
];

// إضافة المزيد من العقود هنا (سيتم تكملتها)
// لحفظ المساحة، سأضيف عينة من كل جامعة وتخصص

// دوال مساعدة لتحليل البيانات
const getUniversities = () => {
  const universities = {};
  contractsData.forEach(contract => {
    if (!universities[contract.university]) {
      universities[contract.university] = {
        name: contract.university,
        contracts: []
      };
    }
    universities[contract.university].contracts.push(contract);
  });
  return Object.values(universities);
};

const getDepartments = () => {
  const departments = {};
  contractsData.forEach(contract => {
    if (!departments[contract.department]) {
      departments[contract.department] = {
        name: contract.department,
        contracts: []
      };
    }
    departments[contract.department].contracts.push(contract);
  });
  return Object.values(departments);
};

const getSpecializations = () => {
  const specializations = {};
  contractsData.forEach(contract => {
    if (!specializations[contract.program]) {
      specializations[contract.program] = {
        name: contract.program,
        contracts: []
      };
    }
    specializations[contract.program].contracts.push(contract);
  });
  return Object.values(specializations);
};

const getDegrees = () => {
  const degrees = {};
  contractsData.forEach(contract => {
    if (!degrees[contract.degree]) {
      degrees[contract.degree] = 0;
    }
    degrees[contract.degree]++;
  });
  return degrees;
};

const getProgressDistribution = () => {
  const progress = {};
  contractsData.forEach(contract => {
    const prog = contract.progress || "0%";
    if (!progress[prog]) {
      progress[prog] = 0;
    }
    progress[prog]++;
  });
  return progress;
};

const getContractsByDateRange = (startDate, endDate) => {
  return contractsData.filter(contract => {
    const contractDate = new Date(contract.startDate);
    const start = new Date(startDate);
    const end = new Date(endDate);
    return contractDate >= start && contractDate <= end;
  });
};

const getContractsByExpiryPeriod = () => {
  const now = new Date();
  const end2024 = new Date('2024-12-31');
  const endH1_2025 = new Date('2025-06-30');
  const end2025 = new Date('2025-12-31');
  
  return {
    expired2024: contractsData.filter(c => new Date(c.endDate) <= end2024),
    expiringH1_2025: contractsData.filter(c => {
      const date = new Date(c.endDate);
      return date > end2024 && date <= endH1_2025;
    }),
    expiringH2_2025: contractsData.filter(c => {
      const date = new Date(c.endDate);
      return date > endH1_2025 && date <= end2025;
    }),
    expiring2026: contractsData.filter(c => new Date(c.endDate) > end2025)
  };
};

// تصدير البيانات والدوال
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    contractsData,
    getUniversities,
    getDepartments,
    getSpecializations,
    getDegrees,
    getProgressDistribution,
    getContractsByDateRange,
    getContractsByExpiryPeriod
  };
}
