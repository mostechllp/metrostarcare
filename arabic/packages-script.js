
    // Package Data with Arabic translations
    const packagesData = [
      {
        id: 21,
        name: "عروض الذكرى العاشرة للصحةة الصحية",
        category: "general_health",
        description: "عروض خاصة بمناسبة الذكرى السنوية العاشرة على الاستشارات والفحوصات المخبرية والتشخيصية والعلاجات بأسعار مخفضة.",
        features: [
          "أسعار خاصة على الاستشارات",
          "خصومات على فحوصات المختبر والفيتامينات",
          "عروض الأشعة والتشخيص",
          "علاجات التجميل و PRP",
          "جلسات العلاج الطبيعي",
          "خدمات الأنف والأذن والحنجرة والعيون"
        ],
        packages: [
          {
            category_name: "الاستشارات",
            services: [
              { name: "استشارة طبيب عام", price: "49 درهم" },
              { name: "استشارة أخصائي", price: "99 درهم" }
            ]
          },
          {
            category_name: "الفحوصات المخبرية",
            services: [
              { name: "عد الدم الكامل (CBC)", price: "30 درهم" },
              { name: "فحص البول الروتيني", price: "30 درهم" },
              { name: "البروتين التفاعلي C (CRP)", price: "40 درهم" },
              { name: "فحص الإنفلونزا", price: "49 درهم" },
              { name: "تروبونين I", price: "49 درهم" },
              { name: "هرمون الحمل (Beta HCG)", price: "60 درهم" },
              { name: "فيريتين (مخزون الحديد)", price: "69 درهم" }
            ]
          },
          {
            category_name: "فحوصات الفيتامينات والهرمونات",
            services: [
              { name: "فحص فيتامين د", price: "49 درهم" },
              { name: "حقنة فيتامين د", price: "49 درهم" },
              { name: "فيتامين ب12", price: "69 درهم" },
              { name: "هرمون FSH", price: "69 درهم" },
              { name: "هرمون LH", price: "69 درهم" },
              { name: "فحص الغدة الدرقية", price: "49 درهم" },
              { name: "ملف الغدة الدرقية", price: "99 درهم" }
            ]
          },
          {
            category_name: "فحوصات القلب",
            services: [
              { name: "تخطيط القلب (ECG)", price: "60 درهم" },
              { name: "تخطيط القلب + تروبونين I", price: "99 درهم" }
            ]
          },
          {
            category_name: "الأشعة والتشخيص",
            services: [
              { name: "أشعة سينية (عرض واحد)", price: "49 درهم" },
              { name: "أشعة فوق صوتية (سونار)", price: "175 درهم" },
              { name: "فحص متخصص", price: "350 درهم" }
            ]
          },
          {
            category_name: "العلاج الطبيعي",
            services: [
              { name: "جلسة علاج طبيعي", price: "99 درهم" }
            ]
          },
          {
            category_name: "العلاجات التجميلية",
            services: [
              { name: "تقشير نضارة سريع", price: "149 درهم" },
              { name: "تقشير مكافحة الشيخوخة", price: "299 درهم" },
              { name: "التقشير الزجاجي", price: "299 درهم" },
              { name: "بوتوكس (يبدأ من)", price: "200 درهم" },
              { name: "تقشير مترو المميز", price: "199 درهم" },
              { name: "حقن الجلوتاثيون الوريدية", price: "149 درهم" },
              { name: "جلوتاثيون + فيتامين سي (وريدي)", price: "179 درهم" }
            ]
          },
          {
            category_name: "علاجات بلازما الصفائح الدموية (PRP)",
            services: [
              { name: "بلازما الشعر (PRP)", price: "149 درهم" },
              { name: "بلازما الوجه (PRP)", price: "199 درهم" },
              { name: "علاج GFC", price: "199 درهم" }
            ]
          },
          {
            category_name: "خدمات الأنف والأذن والحنجرة",
            services: [
              { name: "إزالة شمع الأذن", price: "30 درهم" },
              { name: "فحص السمع", price: "99 درهم" },
              { name: "ثقب الأذن بدون ألم + استشارة أنف وأذن وحنجرة", price: "99 درهم" },
              { name: "منظار الأنف", price: "125 درهم" }
            ]
          },
          {
            category_name: "طب العيون",
            services: [
              { name: "استشارة طبيب عيون + فحص النظر", price: "90 درهم" },
              { name: "استشارة طبيب عيون + إزالة جسم غريب + غيار للعين", price: "120 درهم" }
            ]
          }
        ],
        fullDetails: "احتفل معنا بالذكرى السنوية العاشرة مع هذه العروض الصحية الحصرية! نحن نقدم خصومات كبيرة في جميع أقسامنا الرئيسية بما في ذلك الطب العام والمختبر والأشعة والعلاج الطبيعي والأنف والأذن والحنجرة وطب العيون والعلاجات التجميلية. هدفنا هو جعل الرعاية الصحية عالية الجودة في متناول الجميع وبأسعار معقولة لمجتمعنا."
      },

      // 1. General Health
      {
          id: 1,
          name: "عرض لقاح العمرة – 49 درهم",
          category: "general_health",
          description: "احمِ نفسك قبل رحلة العمرة مع باقة تطعيم ميسورة التكلفة.",
          features: [
            "لقاح العمرة",
            "لقاح آمن ومعتمد",
            "إعطاء سريع للتطعيم",
            "استشارة طبيب متاحة",
            "مناسب لجميع الفئات العمرية",
            "رعاية صحية نظيفة واحترافية"
          ],
          fullDetails: "يضمن لك عرض لقاح العمرة هذا الحماية خلال رحلتك الروحية. يتوفر بسعر مناسب ويشمل لقاحًا آمنًا ومعتمدًا يتم تقديمه من قبل متخصصين في الرعاية الصحية ضمن بيئة نظيفة وآمنة."
        },
      {
        id: 2,
        name: "فحص العافية المصغر – 39 درهم",
        category: "general_health",
        description: "فحص عافية مصغر بأسعار معقولة للفحص الصحي السريع.",
        features: [
          "فحص ضغط الدم",
          "سكر الدم (FBS/RBS)",
          "الكوليسترول الكلي",
          "إنزيم الكبد (SGPT)",
          "حمض اليوريك",
          "مؤشر كتلة الجسم (BMI)",
          "استشارة طبيب عام مجانية"
        ],
        fullDetails: "تعتبر باقة العافية المصغرة هذه مثالية للأفراد والعائلات الذين يبحثون عن فحص صحي سريع واقتصادي."
      },
      {
        id: 3,
        name: "فحص العافية الصحي – 59 درهم",
        category: "general_health",
        description: "باقة فحص صحي ميسورة التكلفة للفحص الروتيني.",
        features: [
          "سكر الدم (FBS/RBS)",
          "ملف الدهون",
          "فحص الكبد",
          "ملف الكلى",
          "فحص ضغط الدم",
          "مؤشر كتلة الجسم",
          "استشارة طبيب عام مجانية"
        ],
        fullDetails: "مثالي للمراقبة الصحية المنتظمة والكشف المبكر."
      },
      {
        id: 4,
        name: "فحص الصحة الأساسي – 99 درهم",
        category: "general_health",
        description: "فحص صحي أساسي متقدم لتقييم مفصل.",
        features: [
          "سكر الدم",
          "ملف الدهون",
          "ملف الكلى",
          "ملف الكبد",
          "هرمون الغدة الدرقية (TSH)",
          "تحليل البول الروتيني",
          "مؤشر كتلة الجسم",
          "ضغط الدم"
        ],
        fullDetails: "تقييم شامل للوظائف الرئيسية للجسم."
      },

      // 2. Diabetes
      {
        id: 5,
        name: "باقة جلوكوفيت للسكري – 59 درهم",
        category: "diabetes",
        description: "باقة فحص السكري الأساسية.",
        features: [
          "FBS/RBS",
          "السكر التراكمي (HbA1c)"
        ],
        fullDetails: "يساعد في مراقبة مستويات سكر الدم الفورية وطويلة المدى."
      },

      // 3. Blood Test
      {
        id: 6,
        name: "باقة فقر الدم – 199 درهم",
        category: "blood_test",
        description: "باقة فحص فقر الدم الشاملة.",
        features: [
          "صورة الدم الكاملة (CBC)",
          "الفيريتين",
          "الحديد",
          "القدرة الكلية لربط الحديد (TIBC)",
          "فيتامين ب12"
        ],
        fullDetails: "يساعد في تشخيص أسباب التعب والضعف."
      },

      // 5. Women Health
      {
        id: 7,
        name: "باقة اللياقة البدنية للسيدات – 199 درهم",
        category: "women_health",
        description: "تقييم شامل لصحة المرأة.",
        features: [
          "هرمون FSH",
          "هرمون LH",
          "هرمون TSH",
          "فيتامين د",
          "صورة دم كاملة",
          "تخطيط القلب (ECG)"
        ],
        fullDetails: "يغطي الصحة الهرمونية والغذائية والعامة."
      },

      // 6. Allergy
      {
        id: 8,
        name: "باقة حساسية الجلد – 199 درهم",
        category: "allergy",
        description: "يكشف عن حالات حساسية الجلد في وقت مبكر.",
        features: [
          "صورة دم كاملة",
          "الأجسام المضادة (IgE)",
          "العد المطلق للحمضات (AEC)"
        ],
        fullDetails: "يساعد في تحديد أسباب الحكة والطفح الجلدي."
      },
      {
        id: 9,
        name: "باقة حساسية الأنف – 599 درهم",
        category: "allergy",
        description: "تشخيص شامل لحساسية الأنف.",
        features: [
          "استشارة أنف وأذن وحنجرة",
          "تنظير الأنف",
          "اختبار الحساسية"
        ],
        fullDetails: "يساعد في تشخيص الحساسية التنفسية."
      },

      // 7. General Fitness
      {
        id: 10,
        name: "باقة الصحة واللياقة – 149 درهم",
        category: "general_fitness",
        description: "مصممة لمراقبة نمط الحياة النشط.",
        features: [
          "تخطيط القلب (ECG)",
          "فيتامين د",
          "صورة دم كاملة",
          "ملف الدهون",
          "مؤشر كتلة الجسم"
        ],
        fullDetails: "يساعد في تتبع حالة اللياقة البدنية والتغذية."
      },

      // 8. Nutrition
      {
        id: 11,
        name: "فحص فيتامين د – 49 درهم",
        category: "nutrition",
        description: "تحقق من نقص فيتامين د.",
        features: [
          "فحص فيتامين د",
          "نتائج سريعة"
        ],
        fullDetails: "يدعم صحة العظام والجهاز المناعي."
      },

      // 9. Advanced Health
      {
        id: 12,
        name: "فحص الصحة المتقدم – 199 درهم",
        category: "advanced_health",
        description: "فحص صحي متقدم كامل.",
        features: [
          "صورة دم كاملة",
          "فحوصات السكري",
          "الغدة الدرقية",
          "الكبد والكلى",
          "تخطيط القلب"
        ],
        fullDetails: "تقييم مفصل لكامل الجسم."
      },
      {
        id: 13,
        name: "فحص الصحة التنفيذي – 199 درهم",
        category: "advanced_health",
        description: "باقة صحية تنفيذية متعمقة.",
        features: [
          "صورة دم كاملة",
          "السكري",
          "فيتامين د",
          "الكالسيوم"
        ],
        fullDetails: "تقييم صحي وقائي متقدم."
      },
      {
    "id": 19,
    "name": "استشارة صحة المرأة",
    "category": "صحة_المرأة",
    "description": "خدمة استشارة شاملة لأمراض النساء تركز على صحة المرأة وتشمل الرعاية الإنجابية، واضطرابات الهرمونات، والفحوصات الوقائية.",
    "features": [
        "علاج اضطراب الدورة الشهرية",
        "رعاية الحمل",
        "علاج تكيس المبايض (PCOS)",
        "رعاية سن اليأس",
        "الاستشارة بشأن وسائل منع الحمل",
        "تركيب وإزالة اللولب (IUCD)",
        "فحص السرطان (مثل مسحة عنق الرحم)",
        "علاج اضطرابات الحيض",
        "فحوصات العقم والعلاج الأولي"
    ],
    "fullDetails": "تقدم هذه الخدمة رعاية متكاملة لصحة المرأة بإشراف طبيبة متخصصة ذات خبرة عالية. تشمل الرعاية جميع مراحل حياة المرأة بدءًا من مشاكل الدورة الشهرية ورعاية الحمل، وصولًا إلى سن اليأس وتشخيص وعلاج العقم. كما توفر فحوصات وقائية مثل الكشف المبكر عن سرطان عنق الرحم وإرشادات طبية حول وسائل منع الحمل، مما يساعد على الحفاظ على صحة المرأة على المدى الطويل."
    }

    ];

    let currentFilter = "all";
    let currentSort = "default";

    function getCategoryLabel(cat) {
      const labels = {
        "general_health": "الصحة العامة",
        "diabetes": "السكري",
        "blood_test": "فحص الدم",
        "women_health": "صحة المرأة",
        "allergy": "الحساسية",
        "general_fitness": "اللياقة البدنية",
        "nutrition": "التغذية",
        "advanced_health": "الصحة المتقدمة"
      };
      return labels[cat] || cat;
    }

    function renderPackages() {
      let filtered = packagesData.filter(pkg => currentFilter === "all" || pkg.category === currentFilter);

      if (currentSort === "name-asc") filtered.sort((a, b) => a.name.localeCompare(b.name, 'ar'));
      else if (currentSort === "name-desc") filtered.sort((a, b) => b.name.localeCompare(a.name, 'ar'));

      const grid = document.getElementById("packagesGrid");
      if (filtered.length === 0) {
        grid.innerHTML = '<div class="no-results">لم يتم العثور على باقات في هذه الفئة. يرجى تجربة تصفية أخرى.</div>';
        return;
      }

      grid.innerHTML = filtered.map(pkg => {
        // Extract price and clean name
        const priceMatch = pkg.name.match(/(.*)[–-]\s*(\d+)\s*(AED|درهم)/i);
        const displayName = priceMatch ? priceMatch[1].trim() : pkg.name;
        const priceAmount = priceMatch ? priceMatch[2] : "";

        return `
        <div class="package-card">
          ${priceAmount ? `
          <div class="price-badge">
            <div class="amount">${priceAmount}</div>
            <div class="currency">درهم</div>
          </div>` : ''}
          <div class="package-header">
            <div class="package-category" style="margin-bottom:10px;">${getCategoryLabel(pkg.category)}</div>
            <h3>${displayName}</h3>
          </div>
          <div class="package-body">
            <p class="package-desc">${pkg.description}</p>
            <ul class="package-features">
              ${pkg.features.slice(0, 3).map(f => `<li><i class="fas fa-check-circle"></i> ${f}</li>`).join('')}
              ${pkg.features.length > 3 ? `<li><i class="fas fa-ellipsis-h"></i> +${pkg.features.length - 3} خدمات أخرى</li>` : ''}
            </ul>
          </div>
          <div class="package-footer">
            <button class="view-details-btn" onclick="openModal(${pkg.id})">عرض التفاصيل</button>
          </div>
        </div>
      `}).join('');
    }

    function openModal(id) {
      const pkg = packagesData.find(p => p.id === id);
      if (!pkg) return;

      const priceMatch = pkg.name.match(/(.*)[–-]\s*(\d+)\s*(AED|درهم)/i);
      const displayName = priceMatch ? priceMatch[1].trim() : pkg.name;

      let featuresHtml = '';
      if (pkg.packages) {
        featuresHtml = pkg.packages.map(cat => `
          <h4 style="color: var(--maroon); margin-top: 20px; margin-bottom: 10px; border-bottom: 1px solid var(--border); padding-bottom: 5px; font-size: 1rem;">
            <i class="fas fa-tags" style="margin-left: 8px;"></i> ${cat.category_name}
          </h4>
          <ul style="margin-bottom: 15px;">
            ${cat.services.map(s => `
              <li style="display: flex; justify-content: space-between; align-items: center; padding: 8px 0; border-bottom: 1px solid #f0f0f0; font-size: 0.85rem;">
                <span><i class="fas fa-check-circle" style="color: var(--maroon); margin-left: 8px; font-size: 0.8rem;"></i> ${s.name}</span>
                <span style="font-weight: 700; color: var(--maroon); white-space: nowrap;">${s.price}</span>
              </li>
            `).join('')}
          </ul>
        `).join('');
      } else {
        featuresHtml = `
          <h4><i class="fas fa-list-ul" style="margin-left: 8px;"></i> تتضمن الباقة:</h4>
          <ul>
            ${pkg.features.map(f => `<li><i class="fas fa-check-circle"></i> ${f}</li>`).join('')}
          </ul>
        `;
      }

      document.getElementById("modalTitle").innerText = displayName;
      document.getElementById("modalBody").innerHTML = `
        <p><strong>${pkg.description}</strong></p>
        ${priceMatch ? `<p class="modal-price" style="color: var(--maroon); font-weight: 700; font-size: 1.2rem; margin-bottom: 15px;">السعر: ${priceMatch[2]} درهم</p>` : ''}
        ${featuresHtml}
        <h4 style="margin-top:20px;"><i class="fas fa-info-circle"></i> معلومات تفصيلية:</h4>
        <p>${pkg.fullDetails}</p>
        <p><strong>المدة:</strong> تكتمل عادة خلال 2-3 ساعات مع ظهور النتائج في غضون 24-48 ساعة.</p>
        <p><strong>التحضير:</strong> قد يلزم الصيام لبعض الفحوصات. يرجى استشارة فريقنا للحصول على تعليمات محددة.</p>
      `;
      document.getElementById("packageModal").classList.add("active");
      document.body.style.overflow = "hidden";
    }

    function closeModal() {
      document.getElementById("packageModal").classList.remove("active");
      document.body.style.overflow = "";
    }

    // Dropdown Toggles (Filter & Sort)
    const filterMobileToggle = document.getElementById("filterMobileToggle");
    const filterTabs = document.getElementById("filterTabs");
    const activeCategoryText = document.getElementById("activeCategoryText");
    const sortDropdownToggle = document.getElementById("sortDropdownToggle");
    const sortOptions = document.getElementById("sortOptions");
    const activeSortText = document.getElementById("activeSortText");

    if (filterMobileToggle) {
      filterMobileToggle.addEventListener("click", (e) => {
        e.stopPropagation();
        filterTabs.classList.toggle("show");
        if (sortOptions) sortOptions.classList.remove("show");
      });
    }

    if (sortDropdownToggle) {
      sortDropdownToggle.addEventListener("click", (e) => {
        e.stopPropagation();
        sortOptions.classList.toggle("show");
        if (filterTabs) filterTabs.classList.remove("show");
      });
    }

    // Filter Category Selection
    document.querySelectorAll(".filter-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        currentFilter = btn.dataset.category;
        
        if (activeCategoryText) activeCategoryText.innerText = btn.innerText;
        if (window.innerWidth <= 768) filterTabs.classList.remove("show");
        renderPackages();
      });
    });

    // Sort Option Selection
    document.querySelectorAll(".sort-opt").forEach(opt => {
      opt.addEventListener("click", () => {
        document.querySelectorAll(".sort-opt").forEach(o => o.classList.remove("active"));
        opt.classList.add("active");
        currentSort = opt.dataset.value;
        
        if (activeSortText) activeSortText.innerText = opt.innerText;
        sortOptions.classList.remove("show");
        renderPackages();
      });
    });

    // Close dropdowns when clicking outside
    document.addEventListener("click", (e) => {
      if (filterTabs && !filterTabs.contains(e.target) && e.target !== filterMobileToggle) {
        filterTabs.classList.remove("show");
      }
      if (sortOptions && !sortOptions.contains(e.target) && e.target !== sortDropdownToggle) {
        sortOptions.classList.remove("show");
      }
    });

    document.getElementById("packageModal").addEventListener("click", (e) => {
      if (e.target === document.getElementById("packageModal")) closeModal();
    });

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
      const navbar = document.getElementById('navbar');
      if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 40);
    });

    function toggleMenu() {
      const navLinks = document.getElementById("navLinks");
      const hamburger = document.getElementById("hamburger");
      if (navLinks && hamburger) {
        navLinks.classList.toggle("active");
        hamburger.classList.toggle("active");
      }
    }

    // Back to top
    const backToTopBtn = document.getElementById("backToTop");
    window.onscroll = function () {
      if (backToTopBtn) {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
          backToTopBtn.style.display = "block";
        } else {
          backToTopBtn.style.display = "none";
        }
      }
    };
    if (backToTopBtn) {
      backToTopBtn.onclick = function () {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      };
    }

    // Language switcher
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const isArabicPage = window.location.pathname.includes('/arabic/');
        if (btn.dataset.lang === 'en') {
          window.location.href = isArabicPage ? '../packages.html' : 'packages.html';
        } else if (btn.dataset.lang === 'ar') {
          window.location.href = isArabicPage ? 'packages.html' : 'arabic/packages.html';
        }
      });
    });

    // Initial render
    renderPackages();
  