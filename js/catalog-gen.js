function createProductCard(product) {
  const multiple = product.images.length > 1;
  let imagesHtml = product.images.map((img, idx) =>
    `<img src="${img.src}" alt="${img.alt || (product.title + ' — фото ' + (idx + 1))}" loading="lazy"${idx === 0 ? ' class="show"' : ''} />`
  ).join('');

  if (multiple) {
    imagesHtml += `
      <button class="arrow prev" type="button" tabindex="0" aria-label="Назад">
        <svg viewBox="0 0 24 24" width="22" height="22">
          <path d="M15.5 4.5l-7 7 7 7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <button class="arrow next" type="button" tabindex="0" aria-label="Вперёд">
        <svg viewBox="0 0 24 24" width="22" height="22">
          <path d="M8.5 19.5l7-7-7-7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    `;
  }

  return `
    <div class="product reveal">
      <div class="product-img${multiple ? ' multi-img' : ''}" tabindex="0" aria-label="${product.title}">
        ${imagesHtml}
      </div>
      <div class="product-info">
        <h3>${product.title}</h3>
        <p>Цена: ${product.price}</p>
      </div>
    </div>
  `;
}

const catalogContainer = document.getElementById('products');
catalogContainer.innerHTML = Array.isArray(products) && products.length
  ? products.map(createProductCard).join('')
  : "<p>Нет товаров</p>";

// Слайдер карточки (универсально для single/multi)
document.querySelectorAll('.product-img').forEach(container => {
  const imgs = Array.from(container.querySelectorAll('img'));
  const prevBtn = container.querySelector('.arrow.prev');
  const nextBtn = container.querySelector('.arrow.next');
  let index = imgs.findIndex(img => img.classList.contains('show')) || 0;

  if (imgs.length < 2) return;

  function showImg(i) {
    imgs.forEach((img, idx) => img.classList.toggle('show', idx === i));
    index = i;
  }

  const showPrev = e => {
    e && e.stopPropagation();
    showImg((index - 1 + imgs.length) % imgs.length);
  };
  const showNext = e => {
    e && e.stopPropagation();
    showImg((index + 1) % imgs.length);
  };

  prevBtn && prevBtn.addEventListener('click', showPrev);
  nextBtn && nextBtn.addEventListener('click', showNext);

  // Accessibility: стрелки на клавиатуре (работает с фокусом на .product-img)
  container.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft') showPrev();
    if (e.key === 'ArrowRight') showNext();
  });

  // Touch swipe для мобильных
  let startX = null;
  container.addEventListener('touchstart', e => startX = e.touches[0].clientX);
  container.addEventListener('touchend', e => {
    if (startX === null) return;
    const endX = e.changedTouches[0].clientX;
    if (Math.abs(startX - endX) > 30) {
      if (endX < startX) showNext();
      else showPrev();
    }
    startX = null;
  });

  // Сразу показываем первый
  showImg(index);
});