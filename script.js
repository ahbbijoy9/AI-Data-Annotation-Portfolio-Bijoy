// Professional Portfolio - Abul Hossain Bijoy
document.addEventListener("DOMContentLoaded", () => {
  // ===== Mobile Menu Toggle =====
  const menuToggle = document.getElementById("menuToggle");
  const mobileNav = document.getElementById("mobileNav");
  const header = document.getElementById("header");

  if (menuToggle && mobileNav) {
    menuToggle.addEventListener("click", () => {
      mobileNav.classList.toggle("open");
      const icon = menuToggle.querySelector("i");
      if (mobileNav.classList.contains("open")) {
        icon.classList.replace("fa-bars", "fa-xmark");
      } else {
        icon.classList.replace("fa-xmark", "fa-bars");
      }
    });

    // Close mobile menu on link click
    mobileNav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        mobileNav.classList.remove("open");
        menuToggle.querySelector("i").classList.replace("fa-xmark", "fa-bars");
      });
    });
  }

  // ===== Header scroll effect =====
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // ===== Fade-in animation for skill cards =====
  const cards = document.querySelectorAll(".skill-card");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("visible");
          }, index * 80);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  cards.forEach((card) => observer.observe(card));

  // ===== Smooth reveal for other sections =====
  const revealElements = document.querySelectorAll(
    ".timeline-item, .why-card, .playlist-card, .contact-card, .highlight-card, .project-card, .testimonial-card"
  );

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  revealElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.55s ease, transform 0.55s ease";
    revealObserver.observe(el);
  });
});
