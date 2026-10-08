
    // Package Data with image URLs (based on original site structure)
    const packagesData = [
      
      // 1. General Health
      {
          id: 1,
          name: "Umrah Vaccination Offer – 60 AED",
          category: "general_health",
          description: "Protect yourself before your Umrah journey with an affordable vaccination package.",
          features: [
            "Umrah Vaccination",
            "Safe & Certified Vaccine",
            "Quick Administration",
            "Doctor Consultation Available",
            "Suitable for All Age Groups",
            "Hygienic & Professional Care"
          ],
          fullDetails: "This special Umrah vaccination offer ensures you stay protected during your spiritual journey. Available at an affordable price, the package includes a safe and certified vaccine administered by healthcare professionals in a hygienic environment."
        },
      {
        id: 2,
        name: "Mini Wellness Health Checkup – 39 AED",
        category: "general_health",
        description: "Affordable mini wellness checkup for quick health screening.",
        features: [
          "Blood Pressure Check",
          "Blood Sugar (FBS/RBS)",
          "Total Cholesterol",
          "SGPT (Liver Enzyme)",
          "Uric Acid",
          "BMI (Body Mass Index)",
          "Free GP Consultation"
        ],
        fullDetails: "This mini wellness package is ideal for individuals and families looking for a quick and budget-friendly health checkup."
      },
      {
        id: 3,
        name: "Wellness Health Checkup – 59 AED",
        category: "general_health",
        description: "Affordable wellness health checkup package for routine screening.",
        features: [
          "Blood Sugar (FBS/RBS)",
          "Lipid Profile",
          "Liver Screening",
          "Kidney Profile",
          "Blood Pressure Check",
          "BMI",
          "Free GP Consultation"
        ],
        fullDetails: "Ideal for regular health monitoring and early detection."
      },
      {
        id: 4,
        name: "Essential Health Checkup – 99 AED",
        category: "general_health",
        description: "Advanced essential health checkup for detailed assessment.",
        features: [
          "Blood Sugar",
          "Lipid Profile",
          "Kidney Profile",
          "Liver Profile",
          "TSH",
          "Urine Routine",
          "BMI",
          "Blood Pressure"
        ],
        fullDetails: "Comprehensive evaluation of body’s key functions."
      },

      // 2. Diabetes
      {
        id: 5,
        name: "Glucofit Diabetes Package – 59 AED",
        category: "diabetes",
        description: "Essential diabetes screening package.",
        features: [
          "FBS/RBS",
          "HbA1c"
        ],
        fullDetails: "Helps monitor both immediate and long-term blood sugar levels."
      },

      // 3. Blood Test
      {
        id: 6,
        name: "Anemia Package – 199 AED",
        category: "blood_test",
        description: "Comprehensive anemia screening package.",
        features: [
          "CBC",
          "Ferritin",
          "Iron",
          "TIBC",
          "Vitamin B12"
        ],
        fullDetails: "Helps diagnose causes of fatigue and weakness."
      },

      // 5. Women Health
      {
        id: 7,
        name: "Female Fitness Package – 199 AED",
        category: "women_health",
        description: "Comprehensive female health evaluation.",
        features: [
          "FSH",
          "LH",
          "TSH",
          "Vitamin D",
          "CBC",
          "ECG"
        ],
        fullDetails: "Covers hormonal, nutritional, and overall health."
      },

      // 6. Allergy
      {
        id: 8,
        name: "Skin Allergy Package – 199 AED",
        category: "allergy",
        description: "Detects skin allergy conditions early.",
        features: [
          "CBC",
          "IgE",
          "AEC"
        ],
        fullDetails: "Helps identify causes of itching and rashes."
      },
      {
        id: 9,
        name: "Nasal Allergy Package – 599 AED",
        category: "allergy",
        description: "Comprehensive nasal allergy diagnosis.",
        features: [
          "ENT Consultation",
          "Nasal Endoscopy",
          "Allergy Test"
        ],
        fullDetails: "Helps diagnose respiratory allergies."
      },

      // 7. General Fitness
      {
        id: 10,
        name: "Fitness Health Package – 149 AED",
        category: "general_fitness",
        description: "Designed for active lifestyle monitoring.",
        features: [
          "ECG",
          "Vitamin D",
          "CBC",
          "Lipid Profile",
          "BMI"
        ],
        fullDetails: "Helps track fitness and nutritional status."
      },

      // 8. Nutrition
      {
        id: 11,
        name: "Vitamin D Test – 49 AED",
        category: "nutrition",
        description: "Check Vitamin D deficiency.",
        features: [
          "Vitamin D Test",
          "Quick Results"
        ],
        fullDetails: "Supports bone and immune health."
      },

      // 9. Advanced Health
      {
        id: 12,
        name: "Advanced Health Checkup – 199 AED",
        category: "advanced_health",
        description: "Complete advanced health screening.",
        features: [
          "CBC",
          "Diabetes Tests",
          "Thyroid",
          "Liver & Kidney",
          "ECG"
        ],
        fullDetails: "Detailed full body evaluation."
      },
      {
        id: 13,
        name: "Executive Health Checkup – 199 AED",
        category: "advanced_health",
        description: "In-depth executive health package.",
        features: [
          "CBC",
          "Diabetes",
          "Vitamin D",
          "Calcium"
        ],
        fullDetails: "Advanced preventive health assessment."
      },
      {
        id: 19,
        name: "Women’s Care Consultation",
        category: "women_health",
        description: "Comprehensive gynecology consultation service focused on women’s health, covering reproductive care, hormonal issues, and preventive screenings.",
        features: [
            "Irregular Periods Treatment",
            "Pregnancy Care",
            "PCOS Management",
            "Menopause Care",
            "Contraceptive Advice",
            "IUCD Insertion & Removal",
            "Cancer Screening (Cervical Cytology)",
            "Menstrual Disorder Treatment",
            "Infertility Workup & Basic Treatment"
        ],
        fullDetails: "This women’s healthcare service is led by an experienced gynecologist, providing complete care for all stages of a woman’s life. From menstrual health and pregnancy care to menopause management and infertility evaluation, the consultation ensures personalized diagnosis and treatment. Preventive screenings like cervical cancer tests and expert guidance on contraception further support long-term wellness. Ideal for women seeking trusted and comprehensive gynecological care."
      },
      {
  id: 22,
  name: "Basic Pregnancy Package – 1750 AED",
  category: "women_health",
  description: "Complete maternity care for a healthy mother and happy baby — 5 obstetric consultations and 2 ultrasound scans.",
  features: [
    "Obstetric Consultation – 5 Visits",
    "Normal Ultrasound – 2",
    "Anomaly Scan – 1",
    "NT Scan – 1",
    "Laboratory Tests: CBC, RBS, Urine Analysis, VDRL, PPBS, Blood Group, Blood Type, TSH",
    "Monitoring: Blood Pressure & BMI",
    "Regular Antenatal Check-ups",
    "Personalized Care & Guidance"
  ],
  fullDetails: "The Basic Pregnancy Package at Metro Starcare Medical Centre provides essential antenatal care for expecting mothers. It includes 5 obstetric consultations, 2 normal ultrasounds, and key scans (Anomaly and NT), plus a comprehensive lab panel (CBC, RBS, Urine Analysis, VDRL, PPBS, Blood Group, Blood Type, TSH) and routine monitoring of blood pressure and BMI. Designed to give you and your baby complete, worry-free care throughout your pregnancy."
},
{
  id: 23,
  name: "Executive Pregnancy Package – 2500 AED",
  category: "women_health",
  description: "Advanced maternity care with 7 obstetric consultations, 3 ultrasounds, and extended laboratory tests.",
  features: [
    "Obstetric Consultation – 7 Visits",
    "Normal Ultrasound – 3",
    "NT Scan – 1",
    "Anomaly Scan – 1",
    "Laboratory Tests: CBC 3, HCV, RBS, TSH, VDRL, GTT, HIV, HBSAG, Blood Group, RUBELLA, Blood Type, Urine Analysis 2",
    "Monitoring: Blood Pressure & BMI",
    "Advanced Ultrasound Scans",
    "Essential Lab Investigations"
  ],
  fullDetails: "The Executive Pregnancy Package offers an enhanced level of maternity care with 7 obstetric consultations, 3 normal ultrasounds, and both NT and Anomaly scans. The laboratory panel is expanded to include CBC 3, HCV, RBS, TSH, VDRL, GTT, HIV, HBSAG, Blood Group, Rubella, Blood Type, and Urine Analysis (2), along with continuous blood pressure and BMI monitoring. Ideal for expecting mothers who want a more thorough, monitored pregnancy journey."
},
{
  id: 24,
  name: "Premium Pregnancy Package – 3250 AED",
  category: "women_health",
  description: "Our most comprehensive maternity package — 10 consultations, 4 ultrasounds, and the full lab panel for complete peace of mind.",
  features: [
    "Obstetric Consultation – 10 Visits",
    "Normal Ultrasound – 4",
    "NT Scan – 1",
    "Anomaly Scan – 1",
    "Laboratory Tests: CBC 4, HIV, HCV, VDRL, TSH, GTT, HBSAG, HbA1c, Urine Analysis 3, Urine Culture & Sensitivity, Blood Group, Blood Type, Blood Sugar Fasting 2, Blood Sugar Post Pandial",
    "Monitoring: Blood Pressure & BMI",
    "Advanced Ultrasound Scans",
    "Essential Lab Investigations",
    "Personalized Care & Guidance",
    "Peace of Mind for You & Your Baby"
  ],
  fullDetails: "The Premium Pregnancy Package is our most complete maternity offering — 10 obstetric consultations, 4 normal ultrasounds, NT and Anomaly scans, and an extensive laboratory panel (CBC 4, HIV, HCV, VDRL, TSH, GTT, HBSAG, HbA1c, Urine Analysis 3, Urine Culture & Sensitivity, Blood Group, Blood Type, Blood Sugar Fasting 2, Blood Sugar Post Pandial). Includes ongoing blood pressure and BMI monitoring for total peace of mind throughout your pregnancy."
},

// Metro Premium Wellness Package
{
  id: 25,
  name: "Metro Premium Wellness Package – 299 AED",
  category: "advanced_health",
  description: "A complete checkup for complete peace of mind — covering hemogram, diabetic, lipid, liver, kidney, thyroid profiles, ECG, vision, and dental consultation.",
  features: [
    "Complete Hemogram (CBC – 19 Parameters)",
    "Diabetic Test: FBS / RBS, HbA1c",
    "Lipid Profile: Total Cholesterol, Triglycerides, LDL, VLDL, HDL, Non-HDL",
    "Liver Profile: SGPT, SGOT, ALP, Total Bilirubin, Direct Bilirubin, GGT, Total Protein, Albumin, Globulin",
    "Kidney Profile: Urea, Creatinine, GFR, Uric Acid",
    "Thyroid Profile: TSH, FT3, FT4",
    "Additional Wellness Tests: Phosphorus, Magnesium, Iron, CRP, ECG, Vision Screening, Dental Consultation, Doctor's Report Review",
    "Urine Routine, BMI, Blood Pressure"
  ],
  fullDetails: "The Metro Premium Wellness Package is a comprehensive preventive health checkup designed for complete peace of mind. It includes a 19-parameter Complete Hemogram, diabetic screening (FBS/RBS, HbA1c), full Lipid Profile, Liver Profile (SGPT, SGOT, ALP, Bilirubin, GGT, Total Protein, Albumin, Globulin), Kidney Profile (Urea, Creatinine, GFR, Uric Acid), Thyroid Profile (TSH, FT3, FT4), plus additional wellness tests including Phosphorus, Magnesium, Iron, CRP, ECG, Vision Screening, Dental Consultation, Urine Routine, BMI, Blood Pressure, and a Doctor's Report Review. Complete care. Complete wellness."
},

// Iron Test
{
  id: 26,
  name: "Iron Test – 49 AED",
  category: "blood_test",
  description: "Feeling unusually tired or weak? An iron test measures iron in your blood and helps your doctor investigate low or high iron levels.",
  features: [
    "Iron Test",
    "Quick Results",
    "Detects Iron Deficiency or Excess",
    "Doctor Consultation Available"
  ],
  fullDetails: "Feeling unusually tired or weak? An iron test measures iron levels in your blood and helps your doctor investigate low or high iron levels. Low iron directly affects how oxygen travels through your body, leaving you constantly drained. Get your levels checked today for just 49 AED. Ask your doctor if this test is right for you."
},

// Magnesium Test
{
  id: 27,
  name: "Magnesium Test – 49 AED",
  category: "nutrition",
  description: "Sudden muscle cramps or unexplained fatigue? A magnesium test helps check for an imbalance that may contribute to these symptoms.",
  features: [
    "Magnesium Test",
    "Quick Results",
    "Detects Magnesium Imbalance",
    "Supports Muscle & Nerve Health"
  ],
  fullDetails: "Waking up with sudden leg cramps or feeling exhausted even after 8 hours of sleep? It might not just be 'a long week' — it could be a hidden magnesium deficiency. Magnesium plays a vital role in muscle recovery, nerve function, and steady energy levels. Don't guess — check your levels today for just 49 AED. Ask your doctor if this test is right for you."
},

// Phosphorus Test
{
  id: 28,
  name: "Phosphorus Test – 49 AED",
  category: "nutrition",
  description: "Understand your mineral balance. A phosphorus test helps assess bone and kidney health as part of a complete evaluation.",
  features: [
    "Phosphorus Test",
    "Quick Results",
    "Supports Bone Health Assessment",
    "Supports Kidney Health Evaluation"
  ],
  fullDetails: "Did you know mineral balance is the secret to strong bones and healthy kidney function? Phosphorus works closely with calcium to keep your body's foundation solid. Assess your mineral balance with our Phosphorus Test for just 49 AED. Ask your doctor if this test is right for you."
},

// Vitamin D & B12 Package
{
  id: 29,
  name: "Vitamin D & B12 Package – 120 AED",
  category: "nutrition",
  description: "Small tests, a big difference for your family's health. Keep everyone active, strong, and healthy.",
  features: [
    "Vitamin D Test",
    "Vitamin B12 Test",
    "Suitable for All Age Groups",
    "Supports Energy, Immunity & Nerve Health",
    "Supports Overall Well-being"
  ],
  fullDetails: "Your family's energy and immunity start with the right nutrition. Low Vitamin D can lead to bone weakness, while low B12 causes low energy and nerve issues. Keep everyone active, strong, and healthy with our complete Vitamin D & B12 Checkup for just 120 AED. Suitable for all age groups, essential for energy, immunity & nerve health. Know your levels — take control."
},

// Anaemia Screening Package
{
  id: 30,
  name: "Anaemia Screening Package – 149 AED",
  category: "blood_test",
  description: "Essential tests for a healthier tomorrow. Comprehensive iron profile to diagnose the cause of fatigue and weakness.",
  features: [
    "Peripheral Smear (PS)",
    "Iron",
    "Total Iron-Binding Capacity (TIBC)",
    "Unsaturated Iron-Binding Capacity (UIBC)",
    "Transferrin",
    "Ferritin"
  ],
  fullDetails: "Feeling constantly exhausted or low on energy? It might be time to check your iron levels. Our Anaemia Screening Package includes a full Iron Profile: Peripheral Smear (PS), Iron, Total Iron-Binding Capacity (TIBC), Unsaturated Iron-Binding Capacity (UIBC), Transferrin, and Ferritin. Get a complete diagnosis of the cause of fatigue, weakness, and low energy for just 149 AED."
},

// Cardiac Plus Package
{
  id: 31,
  name: "Cardiac Plus Package – 199 AED",
  category: "advanced_health",
  description: "Care for your heart, live for tomorrow. A comprehensive heart health screening to assess your cardiac health.",
  features: [
    "Creatinine",
    "Troponin I",
    "CK-MB",
    "Magnesium",
    "Apolipoprotein A1",
    "Apolipoprotein B",
    "hs-CRP",
    "ECG"
  ],
  fullDetails: "Care for your heart so it can keep caring for you. Keep doing what you love with confidence through our targeted Cardiac Plus Package. Includes essential cardiac markers — Troponin I, CK-MB, hs-CRP, Apolipoprotein A1, Apolipoprotein B, Creatinine, Magnesium, and ECG — to ensure your heart beats strong every day. Because a healthy heart keeps you going stronger."
},

// Cardiac Essentials Package
{
  id: 32,
  name: "Cardiac Essentials Package – 149 AED",
  category: "advanced_health",
  description: "Essential tests for better heart health. A carefully selected panel to assess important cardiac and cardiovascular markers.",
  features: [
    "Creatinine",
    "Apolipoprotein A1",
    "Apolipoprotein B",
    "hs-CRP"
  ],
  fullDetails: "Small steps lead to big heart protection! Stay ahead of your cardiovascular health with our Cardiac Essentials Package. Features key markers — hs-CRP, Apolipoprotein A1 & B, and Creatinine — to help you stay informed and proactive. Essential tests for better heart health at just 149 AED."
},

// Cardiac Comprehensive Package
{
  id: 33,
  name: "Cardiac Comprehensive Package – 299 AED",
  category: "advanced_health",
  description: "Prevention today for a healthier tomorrow. Complete cardiac, metabolic, and mineral evaluation in one package.",
  features: [
    "CBC – Complete Blood Count",
    "Lipid Profile: Total Cholesterol, LDL, Triglycerides, VLDL, HDL, Non-HDL",
    "Kidney Function Test: Urea, Uric Acid, Creatinine, GFR",
    "Minerals: Magnesium, Phosphorus, Vitamin D, Calcium",
    "Thyroid: TSH (Thyroid Stimulating Hormone)",
    "Diabetes Screening: FBS/RBS, HbA1c",
    "Liver Function: SGOT, SGPT, GGT",
    "Heart Health: Troponin I, CK-MB, Apolipoprotein A & B, hs-CRP",
    "Assessments & Consultation: ECG, Blood Pressure, BMI, GP Consultation"
  ],
  fullDetails: "Prevention today means a healthier, happier tomorrow for you and your family! Prioritize your complete wellness with our Cardiac Comprehensive Package. From key cardiac markers to full lipid, kidney, liver, diabetes, and essential mineral profiles — get an all-in-one health check designed to give you total peace of mind. Comprehensive. Complete. Protective."
}
    ];


    let currentFilter = "all";
    let currentSort = "default";

    function getCategoryLabel(cat) {
      const labels = {
        "general_health": "General Health",
        "diabetes": "Diabetes",
        "blood_test": "Blood Test",
        "women_health": "Women Health",
        "allergy": "Allergy",
        "general_fitness": "General Fitness",
        "nutrition": "Nutrition",
        "advanced_health": "Advanced Health"
      };
      return labels[cat] || cat;
    }

    function getImageUrl(pkg) {
      // Use provided image URL or fallback to placeholder
      return pkg.image || "https://via.placeholder.com/400x220?text=Health+Package";
    }

    function renderPackages() {
      const grid = document.getElementById("packagesGrid");
      if (!grid) return;

      let filtered = packagesData.filter(pkg => currentFilter === "all" || pkg.category === currentFilter);

      if (currentSort === "name-asc") {
        filtered.sort((a, b) => a.name.localeCompare(b.name));
      } else if (currentSort === "name-desc") {
        filtered.sort((a, b) => b.name.localeCompare(a.name));
      }

      grid.innerHTML = filtered.map(pkg => {
        // Extract price and clean name
        const priceMatch = pkg.name.match(/(.*)[–-]\s*(\d+)\s*AED/i);
        const displayName = priceMatch ? priceMatch[1].trim() : pkg.name;
        const priceAmount = priceMatch ? priceMatch[2] : "";

        return `
        <div class="package-card" data-category="${pkg.category}">
          ${priceAmount ? `
          <div class="price-badge">
            <span class="amount">${priceAmount}</span>
            <span class="currency">AED</span>
          </div>` : ''}
          <div class="package-header">
            <div class="package-category">${getCategoryLabel(pkg.category)}</div>
            <h2 style="font-size: 1.25rem; font-weight: 700; margin: 10px 0 0 0; line-height: 1.35; color: white;">${displayName}</h2>
          </div>
          <div class="package-body">
            <p class="package-desc">${pkg.description}</p>
            <ul class="package-features">
              ${pkg.features.slice(0, 3).map(f => `<li><i class="fas fa-check-circle"></i> ${f}</li>`).join('')}
              ${pkg.features.length > 3 ? `<li class="more-services"><i class="fas fa-ellipsis-h" style="margin-right: 4px;"></i> +${pkg.features.length - 3} more services</li>` : ''}
            </ul>
          </div>
          <div class="package-footer">
            <button class="view-details-btn" onclick="openModal(${pkg.id})">View Details</button>
          </div>
        </div>
      `}).join('');
    }

    function openModal(id) {
      const pkg = packagesData.find(p => p.id === id);
      if (!pkg) return;

      const priceMatch = pkg.name.match(/(.*)[–-]\s*(\d+)\s*AED/i);
      const displayName = priceMatch ? priceMatch[1].trim() : pkg.name;

      let featuresHtml = '';
      if (pkg.packages) {
        featuresHtml = pkg.packages.map(cat => `
          <h4 style="color: var(--maroon); margin-top: 20px; margin-bottom: 10px; border-bottom: 1px solid var(--border); padding-bottom: 5px; font-size: 1rem;">
            <i class="fas fa-tags" style="margin-right: 8px;"></i> ${cat.category_name}
          </h4>
          <ul style="margin-bottom: 15px;">
            ${cat.services.map(s => `
              <li style="display: flex; justify-content: space-between; align-items: center; padding: 8px 0; border-bottom: 1px solid #f0f0f0; font-size: 0.85rem;">
                <span><i class="fas fa-check-circle" style="color: var(--maroon); margin-right: 8px; font-size: 0.8rem;"></i> ${s.name}</span>
                <span style="font-weight: 700; color: var(--maroon); white-space: nowrap;">${s.price}</span>
              </li>
            `).join('')}
          </ul>
        `).join('');
      } else {
        featuresHtml = `
          <h4><i class="fas fa-list-ul" style="margin-right: 8px;"></i> Package Includes:</h4>
          <ul>
            ${pkg.features.map(f => `<li><i class="fas fa-check-circle"></i> ${f}</li>`).join('')}
          </ul>
        `;
      }

      document.getElementById("modalTitle").innerText = displayName;
      document.getElementById("modalBody").innerHTML = `
        <p><strong>${pkg.description}</strong></p>
        ${priceMatch ? `<p class="modal-price" style="color: var(--maroon); font-weight: 700; font-size: 1.2rem; margin-bottom: 15px;">Price: ${priceMatch[2]} AED</p>` : ''}
        ${featuresHtml}
        <h4 style="margin-top:20px;"><i class="fas fa-info-circle"></i> Detailed Information:</h4>
        <p>${pkg.fullDetails}</p>
        <p><strong>Duration:</strong> Typically completed within 2-3 hours with results in 24-48 hours.</p>
        <p><strong>Preparation:</strong> Fasting may be required for some tests. Please consult our team for specific instructions.</p>
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

    if (window.location.pathname.includes('/arabic/')) {
      const arBtn = document.querySelector('.lang-btn[data-lang="ar"]');
      const enBtn = document.querySelector('.lang-btn[data-lang="en"]');
      if (arBtn) arBtn.classList.add('active');
      if (enBtn) enBtn.classList.remove('active');
    } else {
      const enBtn = document.querySelector('.lang-btn[data-lang="en"]');
      const arBtn = document.querySelector('.lang-btn[data-lang="ar"]');
      if (enBtn) enBtn.classList.add('active');
      if (arBtn) arBtn.classList.remove('active');
    }

    // Initial render
    renderPackages();
  