# 🔧 تعليمات رفع المشروع على GitHub

## الخطوة 1: إنشاء Repository جديد على GitHub

1. اذهب إلى [GitHub](https://github.com)
2. اضغط على زر "+" في الأعلى واختر "New repository"
3. املأ التفاصيل:
   - **Repository name**: `contracts-dashboard`
   - **Description**: "نظام إدارة وتحليل عقود الاعتماد الأكاديمي للجامعات السعودية"
   - **Public** أو **Private** حسب الرغبة
   - **لا تضف** README, .gitignore, license (لدينا بالفعل)
4. اضغط "Create repository"

## الخطوة 2: إعداد Git محلياً

افتح Terminal/Command Prompt في مجلد المشروع ونفذ:

```bash
# التحقق من تثبيت Git
git --version

# إذا لم يكن مثبتاً، حمله من: https://git-scm.com/downloads
```

## الخطوة 3: إعداد Git للمرة الأولى (إذا لزم الأمر)

```bash
# ضع اسمك وبريدك الإلكتروني
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

## الخطوة 4: رفع المشروع

### الطريقة 1: استخدام HTTPS

```bash
# تهيئة Git في المجلد
git init

# إضافة جميع الملفات
git add .

# عمل Commit أول
git commit -m "Initial commit: نظام إدارة عقود الاعتماد الأكاديمي"

# إضافة Remote Repository (استبدل YOUR-USERNAME باسمك)
git remote add origin https://github.com/YOUR-USERNAME/contracts-dashboard.git

# رفع الملفات
git branch -M main
git push -u origin main
```

### الطريقة 2: استخدام SSH

```bash
# تهيئة Git في المجلد
git init

# إضافة جميع الملفات
git add .

# عمل Commit أول
git commit -m "Initial commit: نظام إدارة عقود الاعتماد الأكاديمي"

# إضافة Remote Repository (استبدل YOUR-USERNAME باسمك)
git remote add origin git@github.com:YOUR-USERNAME/contracts-dashboard.git

# رفع الملفات
git branch -M main
git push -u origin main
```

## الخطوة 5: التحديثات المستقبلية

عند إجراء تعديلات على المشروع:

```bash
# إضافة التغييرات
git add .

# عمل Commit مع رسالة وصفية
git commit -m "وصف التحديث"

# رفع التحديثات
git push origin main
```

## 📋 أوامر Git المفيدة

### عرض الحالة
```bash
git status
```

### عرض السجل
```bash
git log
git log --oneline
```

### إنشاء Branch جديد
```bash
git branch feature-name
git checkout feature-name
# أو
git checkout -b feature-name
```

### دمج Branch
```bash
git checkout main
git merge feature-name
```

### التراجع عن التغييرات
```bash
# قبل الـ Commit
git restore filename

# بعد الـ Commit
git revert commit-hash
```

### تحديث من Remote
```bash
git pull origin main
```

## 🌐 نشر الموقع على GitHub Pages

لنشر الموقع مجاناً:

```bash
# إنشاء branch جديد للنشر
git checkout -b gh-pages

# رفع البيانات
git push origin gh-pages
```

ثم في إعدادات Repository:
1. اذهب إلى **Settings** > **Pages**
2. في **Source** اختر `gh-pages` branch
3. احفظ

سيكون الموقع متاحاً على:
```
https://YOUR-USERNAME.github.io/contracts-dashboard/
```

## ❗ نصائح مهمة

### 1. لا ترفع ملفات حساسة
- تحقق من `.gitignore` قبل الرفع
- لا ترفع كلمات مرور أو API keys

### 2. استخدم Commit Messages واضحة
```bash
✅ جيد: "إضافة ميزة البحث بالتاريخ"
✅ جيد: "إصلاح خطأ في عرض البيانات"
❌ سيئ: "تحديث"
❌ سيئ: "fix"
```

### 3. Commit بشكل منتظم
- اعمل commit بعد كل ميزة أو إصلاح
- لا تنتظر حتى نهاية اليوم

### 4. استخدم Branches
- `main` للإصدار المستقر
- `develop` للتطوير
- `feature-*` للميزات الجديدة
- `bugfix-*` لإصلاح الأخطاء

## 🔄 سير عمل Git Flow

```bash
# إنشاء branch للميزة الجديدة
git checkout -b feature/new-feature

# العمل على الميزة...
git add .
git commit -m "إضافة ميزة جديدة"

# العودة للـ main ودمج الميزة
git checkout main
git merge feature/new-feature

# رفع التحديثات
git push origin main

# حذف الـ branch المحلي (اختياري)
git branch -d feature/new-feature
```

## 🐛 حل المشاكل الشائعة

### المشكلة 1: "Permission denied"
```bash
# استخدم HTTPS بدلاً من SSH
git remote set-url origin https://github.com/YOUR-USERNAME/contracts-dashboard.git
```

### المشكلة 2: "Repository not found"
```bash
# تأكد من صحة الرابط
git remote -v
git remote set-url origin CORRECT-URL
```

### المشكلة 3: "Merge conflict"
```bash
# افتح الملف المتعارض وحل التعارض يدوياً
# ثم:
git add .
git commit -m "حل تعارض الدمج"
```

### المشكلة 4: نسيت عمل Pull قبل Push
```bash
git pull --rebase origin main
git push origin main
```

## 📚 موارد إضافية

- [Git Documentation](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com/)
- [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)

## ✅ Checklist قبل الرفع

- [ ] جميع الملفات المطلوبة موجودة
- [ ] لا توجد ملفات حساسة
- [ ] `.gitignore` محدث
- [ ] `README.md` واضح ومفصل
- [ ] الكود يعمل بدون أخطاء
- [ ] Commit messages واضحة

---

**بالتوفيق! 🚀**
