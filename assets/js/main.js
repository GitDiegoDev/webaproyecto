/**
 * Bernal María Luz | Abogada
 * Main JavaScript File
 */

document.addEventListener("DOMContentLoaded", () => {
  /**
   * Sticky Navbar
   */
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  /**
   * Mobile Menu Toggle
   */
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const navLinks = document.getElementById("navLinks");

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      const icon = mobileMenuBtn.querySelector("i");
      if (navLinks.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
      } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
      }
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll(".nav-links a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        const icon = mobileMenuBtn.querySelector("i");
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
      });
    });
  }

  /**
   * Scroll Animations (Intersection Observer)
   */
  const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, observerOptions);

  document.querySelectorAll(".fade-in").forEach((el) => {
    observer.observe(el);
  });

  /**
   * Testimonials Slider
   */
  let currentSlide = 0;
  const track = document.getElementById("testimonialTrack");

  if (track) {
    const slides = track.children;
    const totalSlides = slides.length;

    window.moveSlider = (direction) => {
      currentSlide += direction;
      if (currentSlide < 0) currentSlide = totalSlides - 1;
      if (currentSlide >= totalSlides) currentSlide = 0;
      track.style.transform = `translateX(-${currentSlide * 100}%)`;
    };

    setInterval(() => {
      moveSlider(1);
    }, 6000);
  }

  /**
   * Contact Form & Modal
   */
  const contactForm = document.getElementById("contactForm");
  const successModal = document.getElementById("successModal");

  if (contactForm && successModal) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      successModal.classList.add("active");
      contactForm.reset();
    });

    window.closeModal = () => {
      successModal.classList.remove("active");
    };

    successModal.addEventListener("click", (e) => {
      if (e.target === successModal) {
        closeModal();
      }
    });
  }

  /**
   * Smooth Scrolling for Anchor Links
   */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  /**
   * Parallax Effect for Hero
   */
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector(".hero");
    if (hero) {
      hero.style.backgroundPositionY = scrolled * 0.5 + "px";
    }
  });
});
