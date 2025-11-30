#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script لتحويل بيانات العقود من النص إلى JSON
"""

import json
import re

# البيانات الخام
raw_data = """اتباع شروط الاعتماد لتاريخ استلام الوثائق من البرنامج 	تاريخ استلام الوثائق من البرنامج	نسبة الانجاز	اتباع شروط استلام الوثائق المحدثة	تاريخ استلام الوثائق المحدثة من البرنامج	التاريخ المجدول لزيارة التحقق	اتباع شروط التاريخ المجدول لزيارة المراجعين	التاريخ المجدول لزيارة المراجعين	الإدارة المختصة	اسم البرنامج	الجامعة / الكلية	الدرجة العلمية	حالة العقد	بداية سريان / تمديد العقد	انتهاء سريان العقد
لم يتم التسليم		5% - العقود الجديدة - اللقاء التعريفي	لم يتم التسليم					إدارة برامج العلوم الهندسية وعلوم الحاسب	هندسة الطيران	جامعة الملك عبد العزيز	ماجستير	تحت الإجراء	04/13/23	06/30/26"""

def parse_date(date_str):
    """تحويل التاريخ من MM/DD/YY إلى YYYY-MM-DD"""
    if not date_str or date_str.strip() == "":
        return ""
    try:
        parts = date_str.split('/')
        if len(parts) == 3:
            month, day, year = parts
            # إضافة 20 قبل السنة
            full_year = "20" + year
            return f"{full_year}-{month.zfill(2)}-{day.zfill(2)}"
    except:
        return date_str
    return date_str

# قائمة العقود (سأضيف العقود يدوياً هنا)
contracts = []

# نموذج العقد الأول
contracts.append({
    "university": "جامعة الملك عبد العزيز",
    "program": "هندسة الطيران",
    "degree": "ماجستير",
    "status": "تحت الإجراء",
    "startDate": "2023-04-13",
    "endDate": "2026-06-30",
    "department": "إدارة برامج العلوم الهندسية وعلوم الحاسب",
    "progress": "5% - العقود الجديدة - اللقاء التعريفي",
    "docsReceived": "لم يتم التسليم",
    "docsReceivedDate": "",
    "updatedDocsStatus": "لم يتم التسليم",
    "updatedDocsDate": "",
    "verificationVisitDate": "",
    "reviewerVisitStatus": "",
    "reviewerVisitDate": ""
})

# حفظ البيانات
output = f"""// جميع بيانات العقود - {len(contracts)} عقد
const contractsData = {json.dumps(contracts, ensure_ascii=False, indent=2)};

// تصدير البيانات
if (typeof module !== 'undefined' && module.exports) {{
    module.exports = {{ contractsData }};
}}
"""

with open('data.js', 'w', encoding='utf-8') as f:
    f.write(output)

print(f"تم إنشاء ملف البيانات بنجاح - {len(contracts)} عقد")
