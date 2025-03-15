function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Typed.js

const typed = new Typed('.multiple-text', {
  strings: ['Full Stack Developer'],
  typeSpeed: 70,
  backSpeed: 70,
  backDelay: 1000,
  loop: true,
});

// Initialize ScrollReveal
const sr = ScrollReveal({
  distance: '50px',     // Distance for the animation
  duration: 800,       // Duration of animation in ms
  easing: 'ease-in-out',// Easing function
  reset: false,         // Animations won't repeat on scroll back
});

// Profile Section
sr.reveal('.profile .section__pic-container', { origin: 'left' });
sr.reveal('.profile .section__text', { origin: 'right', delay: 200 });

// About Section
sr.reveal('#about .section__pic-container', { origin: 'top' });
sr.reveal('#about .about-details-container', { origin: 'bottom', delay: 200 });

// Skills Section
sr.reveal('.skills h2', { origin: 'top' });
sr.reveal('.skills .skills-container .skill', { 
  interval: 100,        // Staggering effect for skills
  origin: 'bottom'
});

// Projects Section
sr.reveal('.project .heading', { origin: 'top' });
sr.reveal('.project .project-container .project-box', {
  interval: 200,        // Staggering effect for project boxes
  origin: 'bottom',
});

// Contact Section
sr.reveal('#contact .section__text__p1', { origin: 'top' });
sr.reveal('#contact .title', { origin: 'top', delay: 200 });
sr.reveal('#contact .contact-info-upper-container', { 
  interval: 150,        // Animates contact info in sequence
  origin: 'bottom' 
});

// Footer
sr.reveal('footer', { origin: 'bottom', delay: 300 });

