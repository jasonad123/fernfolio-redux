const Turbo = require('@hotwired/turbo');
const drawer = require('./drawer');
const darkMode = require('./dark-mode');

// Turbo automatically starts on import

// Initialize mobile nav drawer
drawer();

// Initialize dark mode toggle
const { enableThemeSwitch } = document.documentElement.dataset;

if (enableThemeSwitch) {
  darkMode();
}

// Handle Netlify Identity Login
if (window.netlifyIdentity) {
  window.netlifyIdentity.on('init', (user) => {
    if (!user) {
      window.netlifyIdentity.on('login', () => {
        document.location.href = '/admin/';
      });
    }
  });
}