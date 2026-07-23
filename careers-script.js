// Job Data
const jobsData = [{
    id: 1,
    title: "Radiologist (Female)",
    validFrom: "March 30, 2026",
    validUntil: "Open until filled",
    location: "Sharjah, UAE",
    description: "We are seeking a skilled Female Radiologist to join our team at Metro Starcare Medical Centre in Sharjah. The ideal candidate will have expertise in Ultrasound, X-Ray, and General Radiology reporting with strong diagnostic and communication skills.",
    requirements: [
      "Expertise in Ultrasound, X-Ray, and General Radiology reporting",
      "Strong diagnostic and communication skills",
      "Ability to work in a multidisciplinary team environment",
      "Valid MOH license or eligibility",
      "Experience in a hospital or clinical setting preferred"
    ],
    perks: [
      "Attractive Salary Package",
      "Supportive & Professional Work Environment",
      "State-of-the-Art Facilities",
      "Immediate Joining Preferred"
    ],
    posterImage: "posters/radiology_specialist.jpeg"
  },
  {
    id: 2,
    title: "Laser Technician",
    validFrom: "May 2026",
    validUntil: "Open until filled",
    location: "Sharjah, UAE",
    description: "We are looking for a skilled and experienced Laser Technician to join our growing team.",
    requirements: [
      "DHA/MOH/DOH License or Eligibility",
      "Minimum 2 years of experience in laser treatments",
      "Expertise in hair removal, skin rejuvenation & aesthetic procedures",
      "Good communication and patient care skills",
      "Ability to work in a fast-paced environment"
    ],
    perks: [
      "Competitive salary package",
      "Friendly & professional work environment",
      "Career growth opportunities"
    ],
    contact: {
      email: "careers@metromedicalgroupuae.com",
      phone: ["052 841 5113", "06 561 1099"]
    },
    posterImage: "posters/laser_technician.jpeg"
  },
  {
    id: 3,
    title: "Lab Technician",
    validFrom: "May 11, 2026",
    validUntil: "Open until filled",
    location: "Sharjah, UAE",
    description: "We are looking for a qualified Lab Technician to join Metro Starcare Medical Centre in Sharjah. The ideal candidate should have experience in sample collection and laboratory procedures with sound knowledge in hematology, biochemistry, and microbiology.",
    requirements: [
      "DHA/MOH License or Eligibility",
      "Experience in sample collection & laboratory procedures",
      "Knowledge in hematology, biochemistry & microbiology",
      "Good communication and computer skills",
      "UAE experience preferred"
    ],
    perks: [
      "Competitive Salary Package",
      "Professional & Supportive Work Environment",
      "Modern Laboratory Facilities",
      "Career Growth Opportunities"
    ],
    posterImage: "posters/lab_technician.jpeg"
  },
  {
    id: 4,
    title: "Front Office Executive",
    validFrom: "May 11, 2026",
    validUntil: "Open until filled",
    location: "Sharjah, UAE",
    description: "Metro Starcare Medical Centre is seeking a Front Office Executive with excellent communication and customer service skills to manage patient appointments, reception activities, and insurance coordination efficiently.",
    requirements: [
      "Excellent communication & customer service skills",
      "Experience in hospital/clinic reception preferred",
      "Knowledge of appointment handling & insurance process",
      "Computer proficiency required",
      "Arabic speaking is an added advantage"
    ],
    perks: [
      "Attractive Salary Package",
      "Friendly & Professional Workplace",
      "Career Development Opportunities",
      "Immediate Joining Preferred"
    ],
    posterImage: "posters/lab_technician.jpeg"
  }
];

function renderJobs() {
  const grid = document.getElementById("jobsGrid");
  if (!grid || grid.children.length > 0) return;
  grid.innerHTML = jobsData.map(job => `
    <div class="job-card">
      <div class="job-header">
        <h3>${job.title}</h3>
        <div class="job-badge">Full Time</div>
      </div>
      <div class="job-body">
        <div class="job-deadline">
          <i class="fas fa-calendar-alt"></i>
          <span>Valid Until:</span>
          <span class="date">${job.validUntil}</span>
        </div>
        <p class="job-description">${job.description.substring(0, 120)}${job.description.length > 120 ? '...' : ''}</p>
        <ul class="job-requirements">
          ${job.requirements.slice(0, 2).map(req => `<li><i class="fas fa-check-circle"></i> ${req.substring(0, 60)}${req.length > 60 ? '...' : ''}</li>`).join('')}
          ${job.requirements.length > 2 ? `<li><i class="fas fa-ellipsis-h"></i> +${job.requirements.length - 2} more requirements</li>` : ''}
        </ul>
      </div>
      <div class="job-footer">
        <button class="view-details-btn" onclick="openModal(${job.id})">View Details</button>
      </div>
    </div>
  `).join('');
}

function openModal(id) {
  const job = jobsData.find(j => j.id === id);
  if (!job) return;

  document.getElementById("modalTitle").innerText = job.title;
  document.getElementById("modalBody").innerHTML = `
    <img src="${job.posterImage}" alt="${job.title}" class="modal-poster" onerror="this.style.display='none'">
    <div class="modal-date-box">
      <div class="modal-date-item">
        <div class="modal-date-label">Valid From</div>
        <div class="modal-date-value">${job.validFrom}</div>
      </div>
      <div class="modal-date-item">
        <div class="modal-date-label">Valid Until</div>
        <div class="modal-date-value">${job.validUntil}</div>
      </div>
    </div>
    <h4><i class="fas fa-briefcase"></i> Job Description</h4>
    <p>${job.description}</p>
    <h4><i class="fas fa-list-check"></i> Requirements</h4>
    <ul>
      ${job.requirements.map(req => `<li><i class="fas fa-check-circle"></i> ${req}</li>`).join('')}
    </ul>
    <h4><i class="fas fa-envelope"></i> How to Apply</h4>
    <p>Please send your CV and cover letter to <strong>careers@metromedicalgroupuae.com</strong> with the subject line: <strong>"${job.title}"</strong>. Only shortlisted candidates will be contacted.</p>
  `;
  document.getElementById("jobModal").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const modal = document.getElementById("jobModal");
  if (modal) modal.classList.remove("active");
  document.body.style.overflow = "";
}

// Close modal on outside click
document.addEventListener("DOMContentLoaded", () => {
  const jobModal = document.getElementById("jobModal");
  if (jobModal) {
    jobModal.addEventListener("click", (e) => {
      if (e.target === jobModal) closeModal();
    });
  }

  // Navbar scroll effect
  window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 40);
  });

  // Back to top
  const backToTopBtn = document.getElementById("backToTop");
  window.onscroll = function() {
    if (backToTopBtn) {
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopBtn.style.display = "block";
      } else {
        backToTopBtn.style.display = "none";
      }
    }
  };
  if (backToTopBtn) {
    backToTopBtn.onclick = function() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    };
  }

  // Language switcher
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      if (btn.dataset.lang === 'en') window.location.href = 'careers.html';
      else if (btn.dataset.lang === 'ar') window.location.href = 'arabic/careers.html';
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

  renderJobs();
});

function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  const hamburger = document.getElementById("hamburger");
  if (navLinks && hamburger) {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");
  }
}
