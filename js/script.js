const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const themeToggle = document.getElementById("themeToggle");
const profileImage = document.getElementById("profileImage");
const profileFallback = document.getElementById("profileFallback");
const contactForm = document.getElementById("contactForm");
const toast = document.getElementById("toast");

document.getElementById("year").textContent = new Date().getFullYear();

// Tampilkan foto jika file foto-profil.jpg sudah tersedia.
profileImage.addEventListener("load", () => {
  profileImage.classList.add("loaded");
  profileFallback.classList.add("hidden");
});
profileImage.addEventListener("error", () => {
  profileImage.classList.remove("loaded");
  profileFallback.classList.remove("hidden");
});

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Tutup menu" : "Buka menu");
});

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Tema tersimpan selama tab/browser masih menggunakan penyimpanan lokal.
const savedTheme = localStorage.getItem("portfolio-theme");
if (savedTheme === "light") document.body.classList.add("light-theme");
updateThemeButton();

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
  localStorage.setItem("portfolio-theme", document.body.classList.contains("light-theme") ? "light" : "dark");
  updateThemeButton();
});

function updateThemeButton() {
  const isLight = document.body.classList.contains("light-theme");
  themeToggle.textContent = isLight ? "☾" : "☼";
  themeToggle.setAttribute("aria-label", isLight ? "Aktifkan tema gelap" : "Aktifkan tema terang");
  themeToggle.title = isLight ? "Tema gelap" : "Tema terang";
}

// Filter kartu proyek berdasarkan kategori.
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    const category = button.dataset.filter;
    projectCards.forEach((card) => {
      const shouldShow = category === "semua" || card.dataset.category === category;
      card.classList.toggle("hidden", !shouldShow);
    });
  });
});


// Form kontak dikirim melalui WhatsApp
contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const message = document.getElementById("message").value.trim();

  // Ganti dengan nomor WhatsApp tujuan
  const nomorWA = "628971796200";

  if (!name || !message) {
    alert("Nama dan pesan wajib diisi.");
    return;
  }

  const teksPesan = `Halo, saya ${name}.\n\n${message}`;
  const url = `https://wa.me/${nomorWA}?text=${encodeURIComponent(teksPesan)}`;

  window.open(url, "_blank");
});

function showToast(text) {
  toast.textContent = text;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 2600);
}

// Tandai menu aktif sesuai bagian yang sedang terlihat.
const sections = document.querySelectorAll("main section[id]");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      document.querySelectorAll(".nav-link").forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    }
  });
}, { rootMargin: "-35% 0px -55% 0px" });
sections.forEach((section) => observer.observe(section));
