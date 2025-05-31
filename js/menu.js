document.addEventListener('DOMContentLoaded', () => {
  const burger = document.getElementById('burger');
  const menu = document.getElementById('menu');
  if (!burger || !menu) return;

  burger.setAttribute('role', 'button');
  burger.setAttribute('aria-expanded', 'false');
  burger.setAttribute('tabindex', '0');

  // Открытие/закрытие меню
  function toggleMenu(force) {
    const isOpen = force !== undefined ? force : !menu.classList.contains('open');
    menu.classList.toggle('open', isOpen);
    burger.classList.toggle('open', isOpen);
    burger.setAttribute('aria-expanded', isOpen ? "true" : "false");
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  burger.addEventListener('click', () => toggleMenu());
  burger.addEventListener('keydown', e => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      toggleMenu();
    }
  });

  // Закрытие по ссылке
  menu.addEventListener('click', e => {
    if (e.target.tagName === 'A') toggleMenu(false);
  });

  // Закрытие по Esc
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') toggleMenu(false);
  });
});