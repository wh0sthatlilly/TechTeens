// ===== Mobile Navigation Toggle =====
const navToggle = document.getElementById('navToggle');
const navMenu = document.querySelector('nav ul');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  });
}

// ===== Dark Mode Toggle =====
const darkModeToggle = document.getElementById('darkModeToggle');

if (darkModeToggle) {
  darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Change icon
    darkModeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';

    // Save preference
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
  });

  // Load saved preference
  if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
    darkModeToggle.textContent = '☀️';
  }
}

// ===== Event Form Modal =====
function openForm(url) {
  const modal = document.getElementById('formModal');
  const iframe = document.getElementById('eventForm');

  if (modal && iframe) {
    modal.style.display = 'flex';
    iframe.src = url;
  }
}

function closeForm() {
  const modal = document.getElementById('formModal');
  const iframe = document.getElementById('eventForm');

  if (modal && iframe) {
    modal.style.display = 'none';
    iframe.src = '';
  }
}
