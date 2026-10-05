// my-first-website — script.js
// Small enhancements: mobile nav toggle, footer year, and a mailto-based contact form.

(function () {
  const navToggle = document.querySelector('.nav-toggle');
  const siteNav = document.getElementById('site-nav');

  if (navToggle && siteNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = siteNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Close menu when clicking a link (mobile)
    siteNav.addEventListener('click', (e) => {
      if (e.target instanceof HTMLElement && e.target.closest('a')) {
        siteNav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
      return true;
    });
  }

  // Dynamic year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Simple form validation and mailto handling
  const form = document.getElementById('contact-form');
  const emailLink = document.getElementById('email-link');
  if (form && emailLink) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = /** @type {HTMLInputElement} */(document.getElementById('name')).value.trim();
      const email = /** @type {HTMLInputElement} */(document.getElementById('email')).value.trim();
      const message = /** @type {HTMLTextAreaElement} */(document.getElementById('message')).value.trim();

      // Basic validation
      let valid = true;
      const nameError = document.getElementById('name-error');
      const emailError = document.getElementById('email-error');
      const messageError = document.getElementById('message-error');

      if (!name) { if (nameError) nameError.textContent = 'Please enter your name.'; valid = false; } else { if (nameError) nameError.textContent = ''; }
      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { if (emailError) emailError.textContent = 'Please enter a valid email.'; valid = false; } else { if (emailError) emailError.textContent = ''; }
      if (!message) { if (messageError) messageError.textContent = 'Please enter a message.'; valid = false; } else { if (messageError) messageError.textContent = ''; }

      if (!valid) return;

      const to = (emailLink.getAttribute('href') || 'mailto:you@example.com').replace('mailto:', '');
      const subject = `Portfolio inquiry from ${name}`;
      const body = `${message}\n\nFrom: ${name} <${email}>`;

      const mailto = `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      // Open user's email client
      window.location.href = mailto;
    });
  }
})();
