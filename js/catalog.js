document.addEventListener('DOMContentLoaded', () => {
  const reveals = Array.from(document.querySelectorAll('.product.reveal'));

  function revealOnScroll() {
    const triggerBottom = window.innerHeight * 0.93; // чуть выше
    let changed = false;

    reveals.forEach(card => {
      if (!card.classList.contains('visible')) {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < triggerBottom) {
          card.classList.add('visible');
          changed = true;
        }
      }
    });

    // Если все открылись — убираем слушатель
    if (reveals.every(card => card.classList.contains('visible'))) {
      window.removeEventListener('scroll', revealOnScroll);
    }
  }

  window.addEventListener('scroll', revealOnScroll, { passive: true });
  revealOnScroll(); // показать что видно при старте
});
