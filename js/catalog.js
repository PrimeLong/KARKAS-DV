document.addEventListener('DOMContentLoaded', () => {
  const productsContainer = document.getElementById('products');
  if (!productsContainer || !window.products) return;

  // Пример генерации товаров на основе products.js
  productsContainer.innerHTML = window.products.map(product => `
    <div class="product-card">
      <img src="${product.image}" alt="${product.name}" loading="lazy" />
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <span class="price">${product.price} ₽</span>
    </div>
  `).join('');
});
