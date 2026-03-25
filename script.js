// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// ===== Hero Section Animations =====
const heroTimeline = gsap.timeline();

// Animate hero text lines
gsap.utils.toArray('.text-line').forEach((line, index) => {
  heroTimeline.to(line, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power2.out'
  }, index * 0.15);
});

// Animate hero description
heroTimeline.to('.hero-description', {
  opacity: 1,
  y: 0,
  duration: 0.8,
  ease: 'power2.out'
}, 0.4);

// Animate button
heroTimeline.to('.btn-primary', {
  opacity: 1,
  y: 0,
  duration: 0.8,
  ease: 'power2.out'
}, 0.6);

// Animate phone with rotation
heroTimeline.to('.hero-phone', {
  opacity: 1,
  rotationY: 0,
  duration: 1,
  ease: 'power2.out'
}, 0.2);

// Set initial state for hero phone
gsap.set('.hero-phone', {
  opacity: 0,
  rotationY: -25
});

// ===== Parallax and Scroll Animations =====

// Feature cards animation
gsap.utils.toArray('.feature-card').forEach((card, index) => {
  gsap.to(card, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: card,
      start: 'top 80%',
      end: 'top 20%',
      scrub: 1,
      markers: false
    }
  });
});

// Set initial state for feature cards
gsap.set('.feature-card', {
  opacity: 0,
  y: 30
});

// Features highlight animations
gsap.timeline({
  scrollTrigger: {
    trigger: '.features-highlight',
    start: 'top 60%',
    end: 'top 20%',
    scrub: 1,
    markers: false
  }
}).to('.highlight-phone', {
  opacity: 1,
  x: 0,
  duration: 0.8,
  ease: 'power2.out'
}, 0).to('.highlight-content', {
  opacity: 1,
  x: 0,
  duration: 0.8,
  ease: 'power2.out'
}, 0);

gsap.set(['.highlight-phone', '.highlight-content'], {
  opacity: 0,
  x: -30
});

// ===== Install Section Animations =====

// Step cards animation
gsap.utils.toArray('.step-card').forEach((card, index) => {
  gsap.to(card, {
    opacity: 1,
    y: 0,
    duration: 0.6,
    ease: 'back.out',
    scrollTrigger: {
      trigger: card,
      start: 'top 75%',
      markers: false
    },
    delay: index * 0.1
  });
});

gsap.set('.step-card', {
  opacity: 0,
  y: 30
});

// CTA section animation
gsap.to('.cta-section', {
  opacity: 1,
  y: 0,
  duration: 1,
  ease: 'power2.out',
  scrollTrigger: {
    trigger: '.cta-section',
    start: 'top 70%',
    markers: false
  }
});

gsap.set('.cta-section', {
  opacity: 0,
  y: 30
});

// ===== Testimonials Animations =====

gsap.utils.toArray('.testimonial-card').forEach((card, index) => {
  gsap.to(card, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: card,
      start: 'top 80%',
      markers: false
    },
    delay: (index % 3) * 0.1
  });
});

gsap.set('.testimonial-card', {
  opacity: 0,
  y: 20
});

// ===== Download Section Animations =====

gsap.to('.download-container', {
  opacity: 1,
  y: 0,
  duration: 1,
  ease: 'power2.out',
  scrollTrigger: {
    trigger: '.download',
    start: 'top 70%',
    markers: false
  }
});

gsap.set('.download-container', {
  opacity: 0,
  y: 30
});

// ===== Smooth Scroll for Navigation Links =====

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const target = document.querySelector(targetId);

    if (target) {
      gsap.to(window, {
        duration: 0.8,
        scrollTo: {
          y: target,
          offsetY: 80
        },
        ease: 'power2.inOut'
      });
    }
  });
});

// ===== Hover Effects for Buttons =====

document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('mouseenter', function () {
    gsap.to(this, {
      scale: 1.05,
      duration: 0.3,
      ease: 'power2.out'
    });
  });

  btn.addEventListener('mouseleave', function () {
    gsap.to(this, {
      scale: 1,
      duration: 0.3,
      ease: 'power2.out'
    });
  });
});

// ===== Phone Tilt Effect on Hover =====

document.querySelectorAll('.phone-frame').forEach(phone => {
  phone.addEventListener('mousemove', function (e) {
    const rect = this.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    gsap.to(this, {
      rotationY: x * 10,
      rotationX: y * -10,
      duration: 0.5,
      ease: 'power2.out'
    });
  });

  phone.addEventListener('mouseleave', function () {
    gsap.to(this, {
      rotationY: 0,
      rotationX: 0,
      duration: 0.5,
      ease: 'power2.out'
    });
  });
});

// ===== Floating Animation for Content =====

gsap.to('.hero-phone', {
  y: 10,
  repeat: -1,
  yoyo: true,
  duration: 3,
  ease: 'sine.inOut',
  delay: 1
});

// ===== Number Counter Animation =====

function animateCounter(element, target) {
  let current = 0;
  const increment = target / 50;

  const counter = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target;
      clearInterval(counter);
    } else {
      element.textContent = Math.floor(current);
    }
  }, 20);
}

// Animate step numbers on scroll
gsap.utils.toArray('.step-number').forEach(number => {
  ScrollTrigger.create({
    trigger: number,
    onEnter: () => {
      const value = parseInt(number.textContent);
      animateCounter(number, value);
    },
    once: true
  });
});

// ===== Stagger Animation for Feature Grid =====

const featureCards = gsap.utils.toArray('.feature-card');
const featureTl = gsap.timeline({
  scrollTrigger: {
    trigger: '.features-grid',
    start: 'top 70%',
    end: 'top 20%',
    scrub: 1,
    markers: false
  }
});

featureCards.forEach((card, index) => {
  featureTl.to(card, {
    opacity: 1,
    duration: 0.6,
    ease: 'power2.out'
  }, index * 0.05);
});

// ===== Highlight Features Stagger =====

gsap.utils.toArray('.highlight-item').forEach((item, index) => {
  gsap.to(item, {
    opacity: 1,
    x: 0,
    duration: 0.8,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.highlight-content',
      start: 'top 60%',
      markers: false
    },
    delay: index * 0.1
  });
});

gsap.set('.highlight-item', {
  opacity: 0,
  x: -20
});

// ===== Testimonial Card Hover Effect =====

document.querySelectorAll('.testimonial-card').forEach(card => {
  card.addEventListener('mouseenter', function () {
    gsap.to(this, {
      y: -10,
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
      duration: 0.3,
      ease: 'power2.out'
    });
  });

  card.addEventListener('mouseleave', function () {
    gsap.to(this, {
      y: 0,
      boxShadow: '0 5px 15px rgba(0, 0, 0, 0)',
      duration: 0.3,
      ease: 'power2.out'
    });
  });
});

// ===== Footer Fade In =====

gsap.to('.footer', {
  opacity: 1,
  duration: 1,
  delay: 0.5,
  scrollTrigger: {
    trigger: '.footer',
    start: 'top 90%',
    markers: false
  }
});

gsap.set('.footer', {
  opacity: 0.8
});

// ===== Navbar Scroll Effect =====

let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > 100) {
    gsap.to(navbar, {
      boxShadow: '0 5px 20px rgba(0, 0, 0, 0.15)',
      duration: 0.3
    });
  } else {
    gsap.to(navbar, {
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
      duration: 0.3
    });
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// ===== Intersection Observer for lazy animations =====

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      gsap.to(entry.target, {
        opacity: 1,
        duration: 0.6,
        ease: 'power2.out'
      });
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe elements
document.querySelectorAll('.feature-card, .step-card, .testimonial-card').forEach(el => {
  gsap.set(el, { opacity: 0 });
  observer.observe(el);
});

// ===== Mobile Menu Toggle (for future enhancement) =====

// This can be expanded for mobile navigation in the future

// ===== Initialize =====

console.log('GSAP animations loaded successfully');
