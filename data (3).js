// ملف البيانات الشامل للعقود الأكاديمية
const contractsData = {
  
  // جميع العقود مع التفاصيل الكاملة
  allContracts: [
    {
      id: 1,
      contractDetails: "ماجستير، الاقتصاد، كلية الأنظمة والاقتصاد، الجامعة الإسلامية",
      degree: "ماجستير",
      major: "الاقتصاد",
      college: "كلية الأنظمة والاقتصاد",
      university: "الجامعة الإسلامية",
      department: "إدارة برامج العلوم الإنسانية والتربوية",
      status: "تحت الإجراء",
      startDate: "2024-03-07",
      endDate: "2025-03-06",
      completionRate: "40% - زيارة التحقق",
      documentReceived: "2025-01-23",
      documentReceivedStatus: "تم التسليم متأخر",
      updatedDocReceived: "2025-05-15",
      updatedDocStatus: "تم التسليم متأخر",
      verificationVisitScheduled: "2025-05-15",
      reviewerVisitScheduled: "2026-01-25",
      reviewerVisitStatus: "تم جدولة الزيارة - متأخر"
    },
    {
      id: 2,
      contractDetails: "ماجستير، الإعلام والاتصال، كلية اللغة العربية والدراسات الإنسانية، الجامعة الإسلامية",
      degree: "ماجستير",
      major: "الإعلام والاتصال",
      college: "كلية اللغة العربية والدراسات الإنسانية",
      university: "الجامعة الإسلامية",
      department: "إدارة برامج العلوم الإنسانية والتربوية",
      status: "تحت الإجراء",
      startDate: "2024-03-07",
      endDate: "2025-03-06",
      completionRate: "40% - زيارة التحقق",
      documentReceived: "2025-01-23",
      documentReceivedStatus: "تم التسليم متأخر",
      updatedDocReceived: "2025-08-31",
      updatedDocStatus: "تم التسليم متأخر",
      verificationVisitScheduled: "2025-09-04",
      reviewerVisitScheduled: "2026-02-01",
      reviewerVisitStatus: "تم جدولة الزيارة - متأخر"
    },
    {
      id: 3,
      contractDetails: "ماجستير، أصول التربية الإسلامية، كلية اللغة العربية والدراسات الإنسانية، الجامعة الإسلامية",
      degree: "ماجستير",
      major: "أصول التربية الإسلامية",
      college: "كلية اللغة العربية والدراسات الإنسانية",
      university: "الجامعة الإسلامية",
      department: "إدارة برامج العلوم الإنسانية والتربوية",
      status: "تحت الإجراء",
      startDate: "2024-03-07",
      endDate: "2025-03-06",
      completionRate: "40% - زيارة التحقق",
      documentReceived: "2025-01-23",
      documentReceivedStatus: "تم التسليم متأخر",
      updatedDocReceived: "2025-04-13",
      updatedDocStatus: "تم التسليم متأخر",
      verificationVisitScheduled: "2025-04-16",
      reviewerVisitScheduled: "2025-11-30",
      reviewerVisitStatus: "تم جدولة الزيارة - متأخر"
    },
    {
      id: 4,
      contractDetails: "ماجستير، العلوم في إدارة هندسة التشييد، كلية العمارة والتخطيط، جامعة الإمام عبد الرحمن بن فيصل",
      degree: "ماجستير",
      major: "العلوم في إدارة هندسة التشييد",
      college: "كلية العمارة والتخطيط",
      university: "جامعة الإمام عبد الرحمن بن فيصل",
      department: "إدارة برامج العلوم الهندسية وعلوم الحاسب",
      status: "تحت الإجراء",
      startDate: "2024-06-20",
      endDate: "2026-01-31",
      completionRate: "5% - العقود الجديدة - اللقاء التعريفي",
      documentReceived: null,
      documentReceivedStatus: "لم يتم التسليم",
      updatedDocReceived: null,
      updatedDocStatus: "لم يتم التسليم",
      verificationVisitScheduled: null,
      reviewerVisitScheduled: null,
      reviewerVisitStatus: null
    },
    {
      id: 5,
      contractDetails: "بكالوريوس، التصميم الصناعي، كلية التصاميم، جامعة الإمام عبد الرحمن بن فيصل",
      degree: "بكالوريوس",
      major: "التصميم الصناعي",
      college: "كلية التصاميم",
      university: "جامعة الإمام عبد الرحمن بن فيصل",
      department: "إدارة برامج العلوم الهندسية وعلوم الحاسب",
      status: "تحت الإجراء",
      startDate: "2024-06-20",
      endDate: "2026-01-31",
      completionRate: "5% - العقود الجديدة - اللقاء التعريفي",
      documentReceived: null,
      documentReceivedStatus: "لم يتم التسليم",
      updatedDocReceived: null,
      updatedDocStatus: "لم يتم التسليم",
      verificationVisitScheduled: null,
      reviewerVisitScheduled: null,
      reviewerVisitStatus: null
    }
    // ... سيتم إضافة باقي العقود بنفس التنسيق
  ],

  // تصنيف العقود حسب تاريخ الانتهاء
  contractsByEndDate: {
    expired: [], // منتهية
    ending2024: [], // تنتهي قبل نهاية 2024
    endingFirstHalf2025: [], // تنتهي يناير - يونيو 2025
    endingSecondHalf2025: [], // تنتهي يوليو - ديسمبر 2025
    ending2026: [] // تنتهي في 2026
  },

  // الجامعات مرتبة حسب عدد العقود
  universitiesByContractCount: [
    { name: "جامعة الملك عبد العزيز", count: 125 },
    { name: "جامعة الإمام عبد الرحمن بن فيصل", count: 40 },
    { name: "جامعة الملك سعود", count: 35 },
    { name: "جامعة الملك فيصل", count: 31 },
    { name: "جامعة الطائف", count: 26 },
    { name: "جامعة حفر الباطن", count: 25 },
    { name: "جامعة جدة", count: 24 },
    { name: "جامعة طيبة", count: 24 },
    { name: "جامعة القصيم", count: 21 },
    { name: "جامعة الأميرة نورة بنت عبد الرحمن", count: 17 },
    { name: "جامعة نجران", count: 9 },
    { name: "جامعة جازان", count: 18 },
    { name: "جامعة الباحة", count: 10 },
    { name: "جامعة شقراء", count: 11 },
    { name: "جامعة حائل", count: 8 },
    { name: "جامعة المجمعة", count: 9 },
    { name: "جامعة الجوف", count: 7 },
    { name: "جامعة أم القرى", count: 10 },
    { name: "جامعة تبوك", count: 2 },
    { name: "جامعة بيشة", count: 3 },
    { name: "الجامعة الإسلامية", count: 3 },
    { name: "جامعة الأمير سطام بن عبد العزيز", count: 9 },
    { name: "جامعة الأعمال والتكنولوجيا", count: 3 },
    { name: "جامعة الفيصل", count: 1 },
    { name: "جامعة اليمامة", count: 1 },
    { name: "جامعة الملك سعود بن عبد العزيز للعلوم الصحية", count: 2 },
    { name: "جامعة المعرفة", count: 4 },
    { name: "جامعة الملك خالد", count: 1 },
    { name: "جامعة الإمام محمد بن سعود الإسلامية", count: 2 },
    { name: "جامعة عفت", count: 2 },
    { name: "جامعة سليمان الراجحي", count: 1 },
    { name: "كليات الأصالة", count: 4 },
    { name: "كليات بريدة الأهلية", count: 4 },
    { name: "كليات عنيزة", count: 2 },
    { name: "كلية الأمير سلطان العسكرية للعلوم الصحية بالظهران", count: 2 },
    { name: "كلية الخليج للعلوم الإدارية والإنسانية", count: 1 },
    { name: "كلية الريان الأهلية", count: 1 },
    { name: "كلية الملك فهد الأمنية", count: 1 },
    { name: "كلية جدة العالمية", count: 3 }
  ],

  // توزيع العقود على الإدارات المختصة
  departmentDistribution: {
    "إدارة برامج العلوم الإنسانية والتربوية": {
      count: 0,
      contracts: []
    },
    "إدارة برامج العلوم الهندسية وعلوم الحاسب": {
      count: 0,
      contracts: []
    },
    "إدارة برامج العلوم الصحية": {
      count: 0,
      contracts: []
    },
    "إدارة برامج العلوم الإسلامية والعربية": {
      count: 0,
      contracts: []
    },
    "إدارة برامج التخصصات العلمية": {
      count: 0,
      contracts: []
    }
  },

  // تفاصيل كل جامعة
  universities: {
    "الجامعة الإسلامية": {
      totalContracts: 3,
      contracts: [1, 2, 3],
      departments: {
        "إدارة برامج العلوم الإنسانية والتربوية": 3
      }
    },
    "جامعة الإمام عبد الرحمن بن فيصل": {
      totalContracts: 40,
      contracts: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43],
      departments: {
        "إدارة برامج العلوم الهندسية وعلوم الحاسب": 9,
        "إدارة برامج العلوم الصحية": 9,
        "إدارة برامج التخصصات العلمية": 3,
        "إدارة برامج العلوم الإسلامية والعربية": 7,
        "إدارة برامج العلوم الإنسانية والتربوية": 12
      }
    }
    // ... سيتم إضافة باقي الجامعات
  },

  // التخصصات مع تفاصيلها
  majors: {
    // التخصصات الهندسية وعلوم الحاسب
    engineering: {
      name: "التخصصات الهندسية وعلوم الحاسب",
      department: "إدارة برامج العلوم الهندسية وعلوم الحاسب",
      majors: {
        "إدارة هندسة التشييد": {
          contracts: [4],
          count: 1
        },
        "التصميم الصناعي": {
          contracts: [5],
          count: 1
        },
        "الإدارة الهندسية": {
          contracts: [6],
          count: 1
        },
        "الهندسة البيئية": {
          contracts: [7],
          count: 1
        },
        "نظم المعلومات وتحليل البيانات": {
          contracts: [8],
          count: 1
        },
        "العمارة": {
          contracts: [9],
          count: 1
        },
        "الهندسة المعمارية": {
          contracts: [],
          count: 0
        },
        "علوم الحاسب": {
          contracts: [],
          count: 0
        },
        "تقنية المعلومات": {
          contracts: [],
          count: 0
        },
        "هندسة البرمجيات": {
          contracts: [],
          count: 0
        },
        "الأمن السيبراني": {
          contracts: [],
          count: 0
        },
        "الذكاء الاصطناعي": {
          contracts: [],
          count: 0
        },
        "علوم البيانات": {
          contracts: [],
          count: 0
        },
        "هندسة الحاسب": {
          contracts: [],
          count: 0
        },
        "نظم المعلومات": {
          contracts: [],
          count: 0
        },
        "التصميم الداخلي": {
          contracts: [],
          count: 0
        },
        "التصميم الجرافيكي": {
          contracts: [],
          count: 0
        },
        "الهندسة الكهربائية": {
          contracts: [],
          count: 0
        },
        "الهندسة الميكانيكية": {
          contracts: [],
          count: 0
        },
        "الهندسة الكيميائية": {
          contracts: [],
          count: 0
        },
        "الهندسة الصناعية": {
          contracts: [],
          count: 0
        }
      }
    },

    // التخصصات الصحية
    health: {
      name: "التخصصات الصحية",
      department: "إدارة برامج العلوم الصحية",
      majors: {
        "جودة الرعاية الصحية وسلامة المرضى": {
          contracts: [10],
          count: 1
        },
        "الصحة العامة": {
          contracts: [11],
          count: 1
        },
        "التقنية الحيوية": {
          contracts: [12],
          count: 1
        },
        "تقنية متناهية الصغر": {
          contracts: [13],
          count: 1
        },
        "تقنية القلب": {
          contracts: [14],
          count: 1
        },
        "الرعاية الطبية الطارئة": {
          contracts: [15],
          count: 1
        },
        "صحة البيئة": {
          contracts: [16],
          count: 1
        },
        "الهندسة الطبية الحيوية": {
          contracts: [17],
          count: 1
        },
        "العلاج الطبيعي": {
          contracts: [],
          count: 0
        },
        "طب الأسنان": {
          contracts: [],
          count: 0
        },
        "الصيدلة": {
          contracts: [],
          count: 0
        },
        "التمريض": {
          contracts: [],
          count: 0
        },
        "المختبرات الطبية": {
          contracts: [],
          count: 0
        },
        "الأشعة التشخيصية": {
          contracts: [],
          count: 0
        },
        "التغذية الإكلينيكية": {
          contracts: [],
          count: 0
        },
        "العلاج التنفسي": {
          contracts: [],
          count: 0
        },
        "البصريات": {
          contracts: [],
          count: 0
        }
      }
    },

    // العلوم الإنسانية والتربوية
    humanities: {
      name: "العلوم الإنسانية والتربوية",
      department: "إدارة برامج العلوم الإنسانية والتربوية",
      majors: {
        "الاقتصاد": {
          contracts: [1],
          count: 1
        },
        "الإعلام والاتصال": {
          contracts: [2],
          count: 1
        },
        "أصول التربية الإسلامية": {
          contracts: [3],
          count: 1
        },
        "الأدب الإنجليزي": {
          contracts: [],
          count: 0
        },
        "الجغرافيا ونظم المعلومات الجغرافية": {
          contracts: [],
          count: 0
        },
        "التاريخ الاقتصادي والاجتماعي": {
          contracts: [],
          count: 0
        },
        "علم الاجتماع": {
          contracts: [],
          count: 0
        },
        "الخدمة الاجتماعية": {
          contracts: [],
          count: 0
        },
        "المناهج وطرق التدريس": {
          contracts: [],
          count: 0
        },
        "الإدارة والقيادة التربوية": {
          contracts: [],
          count: 0
        },
        "رياض الأطفال": {
          contracts: [],
          count: 0
        },
        "اللغة الإنجليزية والترجمة": {
          contracts: [],
          count: 0
        },
        "الإرشاد النفسي": {
          contracts: [],
          count: 0
        },
        "إدارة الأعمال": {
          contracts: [],
          count: 0
        },
        "تحليل بيانات الأعمال": {
          contracts: [],
          count: 0
        },
        "تقنيات التعليم": {
          contracts: [],
          count: 0
        },
        "التربية البدنية": {
          contracts: [],
          count: 0
        },
        "المحاسبة": {
          contracts: [],
          count: 0
        },
        "التسويق": {
          contracts: [],
          count: 0
        },
        "التمويل": {
          contracts: [],
          count: 0
        }
      }
    },

    // العلوم الإسلامية والعربية
    islamic: {
      name: "العلوم الإسلامية والعربية",
      department: "إدارة برامج العلوم الإسلامية والعربية",
      majors: {
        "العقيدة والمذاهب المعاصرة": {
          contracts: [],
          count: 0
        },
        "الشريعة": {
          contracts: [],
          count: 0
        },
        "الفقه وأصوله": {
          contracts: [],
          count: 0
        },
        "التفسير وعلوم القرآن": {
          contracts: [],
          count: 0
        },
        "الحديث وعلومه": {
          contracts: [],
          count: 0
        },
        "القراءات": {
          contracts: [],
          count: 0
        },
        "اللغة العربية وآدابها": {
          contracts: [],
          count: 0
        },
        "اللغويات": {
          contracts: [],
          count: 0
        },
        "الأدب والنقد": {
          contracts: [],
          count: 0
        },
        "القانون": {
          contracts: [],
          count: 0
        },
        "الأنظمة": {
          contracts: [],
          count: 0
        }
      }
    },

    // التخصصات العلمية
    science: {
      name: "التخصصات العلمية",
      department: "إدارة برامج التخصصات العلمية",
      majors: {
        "الكيمياء": {
          contracts: [19],
          count: 1
        },
        "الرياضيات": {
          contracts: [20],
          count: 1
        },
        "الفيزياء والطاقة المتجددة": {
          contracts: [21],
          count: 1
        },
        "الأحياء": {
          contracts: [],
          count: 0
        },
        "الفيزياء": {
          contracts: [],
          count: 0
        },
        "علوم الأغذية": {
          contracts: [],
          count: 0
        },
        "علوم التربة": {
          contracts: [],
          count: 0
        },
        "الإنتاج النباتي": {
          contracts: [],
          count: 0
        },
        "الإنتاج الحيواني": {
          contracts: [],
          count: 0
        },
        "الطب البيطري": {
          contracts: [],
          count: 0
        },
        "علوم البحار": {
          contracts: [],
          count: 0
        },
        "الجيولوجيا": {
          contracts: [],
          count: 0
        },
        "العلوم البيئية": {
          contracts: [],
          count: 0
        },
        "الأرصاد": {
          contracts: [],
          count: 0
        }
      }
    }
  },

  // وظائف مساعدة للبحث والتصفية
  searchByDate: function(date) {
    return this.allContracts.filter(contract => 
      contract.startDate === date || 
      contract.endDate === date ||
      contract.documentReceived === date ||
      contract.updatedDocReceived === date ||
      contract.verificationVisitScheduled === date ||
      contract.reviewerVisitScheduled === date
    );
  },

  getContractsByUniversity: function(universityName) {
    return this.allContracts.filter(contract => 
      contract.university === universityName
    );
  },

  getContractsByDepartment: function(departmentName) {
    return this.allContracts.filter(contract => 
      contract.department === departmentName
    );
  },

  getContractsByMajor: function(majorName) {
    return this.allContracts.filter(contract => 
      contract.major === majorName
    );
  },

  getContractsByDegree: function(degree) {
    return this.allContracts.filter(contract => 
      contract.degree === degree
    );
  },

  getContractsByStatus: function(status) {
    return this.allContracts.filter(contract => 
      contract.status === status
    );
  },

  getContractById: function(id) {
    return this.allContracts.find(contract => contract.id === id);
  }
};

// تصنيف العقود حسب تاريخ الانتهاء
contractsData.allContracts.forEach(contract => {
  if (!contract.endDate) return;
  
  const endDate = new Date(contract.endDate);
  const now = new Date();
  
  if (endDate < now) {
    contractsData.contractsByEndDate.expired.push(contract.id);
  } else if (endDate.getFullYear() === 2024) {
    contractsData.contractsByEndDate.ending2024.push(contract.id);
  } else if (endDate.getFullYear() === 2025) {
    if (endDate.getMonth() < 6) {
      contractsData.contractsByEndDate.endingFirstHalf2025.push(contract.id);
    } else {
      contractsData.contractsByEndDate.endingSecondHalf2025.push(contract.id);
    }
  } else if (endDate.getFullYear() === 2026) {
    contractsData.contractsByEndDate.ending2026.push(contract.id);
  }
});

// حساب توزيع العقود على الإدارات
contractsData.allContracts.forEach(contract => {
  if (contract.department) {
    contractsData.departmentDistribution[contract.department].count++;
    contractsData.departmentDistribution[contract.department].contracts.push(contract.id);
  }
});

// تصدير البيانات
if (typeof module !== 'undefined' && module.exports) {
  module.exports = contractsData;
}
