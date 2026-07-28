// News Data (based on original page content with enhanced details)
const newsData = [{
    id: 4,
    title: "Hantavirus: What You Need to Know",
    date: "May 12, 2026",
    excerpt: "A rare but serious viral disease transmitted by rodents — understanding its biology, danger signs, and how to protect yourself and your family from this potentially fatal respiratory illness.",
    fullContent: "Hantavirus is a family of RNA viruses belonging to the Hantaviridae family. Different strains circulate across the globe, each associated with a specific rodent host. In the Americas, the Sin Nombre virus — carried by the deer mouse — is the primary culprit behind Hantavirus Pulmonary Syndrome (HPS), a severe and potentially fatal respiratory illness.<br><br><strong>Transmission: How Does It Spread?</strong><br>Humans contract hantavirus primarily through contact with infected rodents or their droppings, urine, or saliva. Breathing in dust contaminated with rodent waste — particularly in enclosed spaces — is the most common route of infection. Transmission can also occur through direct bites, touching contaminated surfaces and then touching your face, and — in rare cases — person-to-person contact.<br><br><strong>Clinical Course: Symptoms & Progression</strong><br>HPS progresses through three distinct phases. Early symptoms mimic influenza, making early detection difficult:<br>• Phase 1 (Days 1–5): Fever, fatigue, muscle aches, headaches, dizziness, and chills.<br>• Phase 2 (Days 5–10): Rapid onset of cough and shortness of breath as the lungs fill with fluid. This is the critical window.<br>• Phase 3 (Weeks 2–6): Recovery period for survivors.<br><br><strong>Prevention: Protecting Yourself</strong><br>Prevention centers on eliminating rodent exposure. Seal gaps in your home, wet down infested areas with disinfectant before cleaning (avoid sweeping), and wear protective gear like N95 respirators. Store food in rodent-proof containers and air out enclosed spaces before entering.<br><br><strong>Emergency Warning:</strong> If you develop sudden shortness of breath after potential rodent exposure, seek emergency care immediately. HPS can progress from mild symptoms to respiratory failure within 24 hours.",
    image: "assets/images/blog/hantavirus_blog.webp"
  },{
    id: 1,
    title: "Metro Medical Group's 10th Anniversary Grand Finale Becomes Historic",
    date: "December 10, 2024",
    excerpt: "Marking a new chapter in Kuwait's corporate and healthcare history, the grand finale of Metro Medical Group's 10th anniversary celebration became a historic event. The celebration brought together distinguished guests, healthcare professionals, and community leaders...",
    fullContent: "Marking a new chapter in Kuwait's corporate and healthcare history, the grand finale of Metro Medical Group's 10th anniversary celebration became a historic event. The celebration brought together distinguished guests, healthcare professionals, and community leaders to commemorate a decade of excellence in healthcare delivery. The event highlighted the group's journey from its humble beginnings to becoming a leading healthcare provider in the region. Attendees were treated to cultural performances, recognition ceremonies honoring long-serving staff, and inspiring speeches from the leadership. Group Chairman Mustafa Hamza addressed the gathering, expressing gratitude to the dedicated team and loyal patients who have been part of this remarkable journey. The 10th anniversary celebration served as a testament to the group's unwavering commitment to providing quality healthcare services to the community.",
    image: "https://www.metromedicalgroup.com/apt/assets/images/events/697db28db65eb_WhatsApp%20Image%202026-01-31%20at%201.12.39%20PM.jpeg"
  },{
    id: 2,
    title: "Metro Medical International Group Enters Kerala's Tourism Sector with a New Venture",
    date: "March 15, 2025",
    excerpt: "Metro Medical International Group, which has earned a strong reputation for reliability and excellence in the healthcare sector in Kuwait and the UAE, has launched its first venture in India's tourism sector...",
    fullContent: "Metro Medical International Group, which has earned a strong reputation for reliability and excellence in the healthcare sector in Kuwait and the UAE, has launched its first venture in India's tourism sector. This strategic expansion marks a significant milestone for the group, showcasing its commitment to diversification and growth beyond healthcare. The new venture aims to bring the same standards of excellence and hospitality to the tourism industry, creating unique experiences for travelers visiting Kerala. The initiative is expected to boost local tourism and create new employment opportunities in the region. Group Chairman Mustafa Hamza expressed his excitement about this new chapter, stating that the group's core values of trust, quality, and service will be carried forward into this new endeavor.",
    image: "https://www.metromedicalgroup.com/apt/assets/images/events/699acd3a31064_WhatsApp%20Image%202026-02-21%20at%2010.22.01%20AM%20(1).jpeg"
  },
  {
    id: 3,
    title: "Metro Medical Group Launches Al Mathkouri Pharmacy and Metro Eye Point in Jleeb",
    date: "February 28, 2025",
    excerpt: "Metro Medical Group, a trusted name synonymous with quality and reliability in Kuwait's healthcare sector, has officially inaugurated its pharmacy, Al Mathkouri Pharmacy, in Jleeb. The inauguration ceremony was attended by distinguished guests and healthcare professionals...",
    fullContent: "Metro Medical Group, a trusted name synonymous with quality and reliability in Kuwait's healthcare sector, has officially inaugurated its pharmacy, Al Mathkouri Pharmacy, in Jleeb. The inauguration ceremony was attended by distinguished guests and healthcare professionals. Additionally, the group launched Metro Eye Point, a specialized eye care center, further expanding its comprehensive healthcare services. Al Mathkouri Pharmacy offers a wide range of pharmaceutical products, including prescription medications, over-the-counter drugs, and wellness supplements. Metro Eye Point provides specialized eye examinations, diagnostic services, and treatment for various eye conditions. This expansion reflects the group's commitment to making quality healthcare more accessible to the community.",
    image: "https://www.metromedicalgroup.com/apt/assets/images/events/69888255c504a_Screenshot%202026-02-08%20152618.png"
  }
];

function renderNews() {
  const grid = document.getElementById("newsGrid");
  if (!grid || grid.children.length > 0) return;
  grid.innerHTML = newsData.map(news => `
    <div class="news-card">
      <div class="news-image">
        <img src="${news.image}" alt="${news.title}" onerror="this.src='https://via.placeholder.com/400x240?text=News+Image'">
      </div>
      <div class="news-date"><i class="far fa-calendar-alt" style="margin-right: 6px;"></i>${news.date}</div>
      <div class="news-content">
        <h3 class="news-title">${news.title}</h3>
        <p class="news-excerpt">${news.excerpt.substring(0, 120)}${news.excerpt.length > 120 ? '...' : ''}</p>
        <a href="javascript:void(0)" class="read-more-link" onclick="openModal(${news.id})">Read More <i class="fas fa-arrow-right"></i></a>
      </div>
    </div>
  `).join('');
}

function openModal(id) {
  const news = newsData.find(n => n.id === id);
  if (!news) return;

  document.getElementById("modalTitle").innerText = news.title;
  document.getElementById("modalBody").innerHTML = `
    <img src="${news.image}" alt="${news.title}" class="modal-image" onerror="this.src='https://via.placeholder.com/800x300?text=News+Image'">
    <div class="modal-date"><i class="far fa-calendar-alt"></i> ${news.date}</div>
    <h2>${news.title}</h2>
    <p>${news.fullContent}</p>
    <p><strong>For more information, please contact us at +971 52 841 5113 or visit our center.</strong></p>
  `;
  document.getElementById("newsModal").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const modal = document.getElementById("newsModal");
  if (modal) modal.classList.remove("active");
  document.body.style.overflow = "";
}

document.addEventListener("DOMContentLoaded", () => {
  const newsModal = document.getElementById("newsModal");
  if (newsModal) {
    newsModal.addEventListener("click", (e) => {
      if (e.target === newsModal) closeModal();
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
      const isArabicPage = window.location.pathname.includes('/arabic/');
      if (btn.dataset.lang === 'en') {
        window.location.href = isArabicPage ? '../news.html' : 'news.html';
      } else if (btn.dataset.lang === 'ar') {
        window.location.href = isArabicPage ? 'news.html' : 'arabic/news.html';
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

  renderNews();
});

function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  const hamburger = document.getElementById("hamburger");
  if (navLinks && hamburger) {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");
  }
}
