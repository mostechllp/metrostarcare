
    // Package Data with image URLs (based on original site structure)
    const packagesData = [
      {
        id: 21,
        name: "10th Anniversary Health Offers",
        category: "general_health",
        description: "Special anniversary offers on consultations, lab tests, diagnostics, and wellness treatments at discounted prices.",
        features: [
          "Special prices on Consultations",
          "Discounted Lab & Vitamin Tests",
          "Radiology & Diagnostic offers",
          "Aesthetic & PRP treatments",
          "Physiotherapy sessions",
          "ENT & Ophthalmology services"
        ],
        packages: [
          {
            category_name: "Consultations",
            services: [
              { name: "GP Consultation", price: "49 AED" },
              { name: "Specialist Consultation", price: "99 AED" }
            ]
          },
          {
            category_name: "Lab Tests",
            services: [
              { name: "CBC", price: "30 AED" },
              { name: "Urine Routine", price: "30 AED" },
              { name: "CRP", price: "40 AED" },
              { name: "Influenza Test", price: "49 AED" },
              { name: "Troponin I", price: "49 AED" },
              { name: "Beta HCG", price: "60 AED" },
              { name: "Ferritin", price: "69 AED" }
            ]
          },
          {
            category_name: "Vitamin & Hormone Tests",
            services: [
              { name: "Vitamin D Test", price: "49 AED" },
              { name: "Vitamin D Injection", price: "49 AED" },
              { name: "Vitamin B12", price: "69 AED" },
              { name: "FSH", price: "69 AED" },
              { name: "LH", price: "69 AED" },
              { name: "Thyroid Test", price: "49 AED" },
              { name: "Thyroid Profile Test", price: "99 AED" }
            ]
          },
          {
            category_name: "Cardiac Tests",
            services: [
              { name: "ECG", price: "60 AED" },
              { name: "ECG + Troponin I", price: "99 AED" }
            ]
          },
          {
            category_name: "Radiology & Diagnostics",
            services: [
              { name: "X-Ray Single View", price: "49 AED" },
              { name: "Ultrasound", price: "175 AED" },
              { name: "Specialised Scan", price: "350 AED" }
            ]
          },
          {
            category_name: "Physiotherapy",
            services: [
              { name: "Physiotherapy Session", price: "99 AED" }
            ]
          },
          {
            category_name: "Aesthetic Treatments",
            services: [
              { name: "Quick Glow Peel", price: "149 AED" },
              { name: "Anti-Ageing Peeling", price: "299 AED" },
              { name: "Glass Peeling", price: "299 AED" },
              { name: "Botox (starting from)", price: "200 AED" },
              { name: "Metro Signature Peel", price: "199 AED" },
              { name: "Glutathione Drip", price: "149 AED" },
              { name: "Glutathione + Vitamin C Drip", price: "179 AED" }
            ]
          },
          {
            category_name: "PRP Treatments",
            services: [
              { name: "PRP (Hair)", price: "149 AED" },
              { name: "PRP (Face)", price: "199 AED" },
              { name: "GFC", price: "199 AED" }
            ]
          },
          {
            category_name: "ENT Services",
            services: [
              { name: "Ear Wax Removal", price: "30 AED" },
              { name: "Hearing Test", price: "99 AED" },
              { name: "Painless Ear Piercing + ENT Consultation", price: "99 AED" },
              { name: "Nasal Endoscopy", price: "125 AED" }
            ]
          },
          {
            category_name: "Ophthalmology",
            services: [
              { name: "Ophthalmologist Consultation + Refraction", price: "90 AED" },
              { name: "Ophthal Consultation + Foreign Body Removal + Eye Dressing", price: "120 AED" }
            ]
          }
        ],
        fullDetails: "Celebrate our anniversary with these exclusive health offers! We are providing significant discounts across all our major departments including General Medicine, Laboratory, Radiology, Physiotherapy, ENT, Ophthalmology and Aesthetic treatments. Our goal is to make high-quality healthcare accessible and affordable for everyone in our community."
      },

      // 1. General Health
      {
          id: 1,
          name: "Umrah Vaccination Offer – 49 AED",
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
      let filtered = packagesData.filter(pkg => currentFilter === "all" || pkg.category === currentFilter);

      if (currentSort === "name-asc") filtered.sort((a, b) => a.name.localeCompare(b.name));
      else if (currentSort === "name-desc") filtered.sort((a, b) => b.name.localeCompare(a.name));

      const grid = document.getElementById("packagesGrid");
      if (filtered.length === 0) {
        grid.innerHTML = '<div class="no-results">No packages found in this category. Please try another filter.</div>';
        return;
      }

      grid.innerHTML = filtered.map(pkg => {
        // Extract price and clean name
        const priceMatch = pkg.name.match(/(.*)[–-]\s*(\d+)\s*AED/i);
        const displayName = priceMatch ? priceMatch[1].trim() : pkg.name;
        const priceAmount = priceMatch ? priceMatch[2] : "";

        return `
        <div class="package-card">
          ${priceAmount ? `
          <div class="price-badge">
            <div class="amount">${priceAmount}</div>
            <div class="currency">AED</div>
          </div>` : ''}
          <div class="package-header">
            <div class="package-category" style="margin-bottom:10px;">${getCategoryLabel(pkg.category)}</div>
            <h3>${displayName}</h3>
          </div>
          <div class="package-body">
            <p class="package-desc">${pkg.description}</p>
            <ul class="package-features">
              ${pkg.features.slice(0, 3).map(f => `<li><i class="fas fa-check-circle"></i> ${f}</li>`).join('')}
              ${pkg.features.length > 3 ? `<li><i class="fas fa-ellipsis-h"></i> +${pkg.features.length - 3} more services</li>` : ''}
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
        if (btn.dataset.lang === 'en') window.location.href = 'packages.html';
        else if (btn.dataset.lang === 'ar') window.location.href = 'arabic/packages.html';
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
  