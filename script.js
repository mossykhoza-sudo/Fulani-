document.addEventListener("DOMContentLoaded", () => {
  // === HERO TEXT ANIMATION ===
  const heroText = document.querySelector(".animate-text");
  const heroSub = document.querySelector(".animate-sub");
  const heroBtn = document.querySelector(".animate-btn");

  if (heroText && heroSub && heroBtn) {
    setTimeout(() => heroText.classList.add("show"), 300);
    setTimeout(() => heroSub.classList.add("show"), 600);
    setTimeout(() => heroBtn.classList.add("show"), 900);
  }

  // === SLIDESHOW (if exists) ===
  const slides = document.querySelectorAll(".hero-slide");
  let currentSlide = 0;

  if (slides.length > 0) {
    setInterval(() => {
      slides[currentSlide].classList.remove("active");
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add("active");
    }, 5000);
  }

  // === SCROLL REVEAL ANIMATION (Featured Projects, Core Values, etc.) ===
  const revealElements = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const delay = [...revealElements].indexOf(target) * 150; // stagger
        setTimeout(() => {
          target.classList.add("visible");
        }, delay);
        observer.unobserve(target);
      }
    });
  }, { threshold: 0.15 });

  revealElements.forEach(el => observer.observe(el));

  // === FOOTER ANIMATION ===
  const footer = document.querySelector(".custom-footer");
  if (footer) {
    const footerObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          footer.classList.add("visible");
          footerObserver.unobserve(footer);
        }
      });
    }, { threshold: 0.1 });
    footerObserver.observe(footer);
  }
});
// Reveal on Scroll
const revealElements = document.querySelectorAll('.reveal');

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  revealElements.forEach(el => {
    const revealTop = el.getBoundingClientRect().top;
    if (revealTop < windowHeight - 100) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
