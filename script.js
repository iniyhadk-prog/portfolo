const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.textContent = open ? '✕' : '☰';
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open'); menuToggle.setAttribute('aria-expanded', 'false'); menuToggle.textContent = '☰';
  }));
}
const year = document.querySelector('#year'); if (year) year.textContent = new Date().getFullYear();
const form = document.querySelector('#contact-form');
if (form) form.addEventListener('submit', event => {
  event.preventDefault();
  const name = document.querySelector('#name').value.trim();
  const email = document.querySelector('#email').value.trim();
  const message = document.querySelector('#message').value.trim();
  const subject = encodeURIComponent(`Portfolio message from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
  window.location.href = `mailto:iniyhadk@gmail.com?subject=${subject}&body=${body}`;
});

const navLinks = document.querySelectorAll('.nav a');
const sections = document.querySelectorAll('main section[id]');
function setActiveLink() {
  let current = 'home';
  sections.forEach(section => { if (window.scrollY >= section.offsetTop - 140) current = section.id; });
  navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === '#' + current));
}
window.addEventListener('scroll', setActiveLink, {passive:true});
navLinks.forEach(link => link.addEventListener('click', () => {
  navLinks.forEach(item => item.classList.remove('active'));
  link.classList.add('active');
}));
