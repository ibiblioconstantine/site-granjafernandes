const WHATSAPP = '5541992076345';

function whatsappUrl(message = 'Olá! Gostaria de fazer um pedido de ovos caipiras da Granja Fernandes.') {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;
}

function setWhatsAppLinks() {
  document.querySelectorAll('[data-whatsapp]').forEach((link) => {
    const message = link.getAttribute('data-whatsapp') || undefined;
    link.href = whatsappUrl(message);
    link.target = '_blank';
    link.rel = 'noopener';
  });
}

function setupMenu() {
  const button = document.querySelector('[data-menu-toggle]');
  const menu = document.querySelector('[data-mobile-menu]');
  if (!button || !menu) return;
  button.addEventListener('click', () => {
    const open = menu.classList.toggle('is-open');
    button.setAttribute('aria-expanded', String(open));
  });
  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => menu.classList.remove('is-open'));
  });
}

document.addEventListener('DOMContentLoaded', () => {
  setWhatsAppLinks();
  setupMenu();
  const year = document.querySelector('[data-current-year]');
  if (year) year.textContent = new Date().getFullYear();
});