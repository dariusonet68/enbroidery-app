// Embroidery Shop main JS
// Handles product rendering, modal, and interactions
// Expects products array to be loaded from products.js

function renderProducts() {
  const grid = document.getElementById('productGrid');
  grid.innerHTML = '';
  products.forEach((p) => {
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML = `
      <img src="${p.img}" alt="${p.name}">
      <div class="card-body">
        <div style="display:flex;justify-content:space-between;align-items:center">
          <div>
            <div style="font-weight:700">${p.name}</div>
            <div style="font-size:13px;color:var(--muted)">${p.tag}</div>
          </div>
          <div class="price">$${p.price}</div>
        </div>
        <div class="card-actions">
          <button class="btn" data-id="${p.id}">View</button>
          <button class="ghost">Quick add</button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

function setupModal() {
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modalImg');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');
  const modalPrice = document.getElementById('modalPrice');
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn');
    if (!btn) return;
    const id = btn.getAttribute('data-id');
    if (id) {
      const p = products.find((x) => x.id == id);
      if (!p) return;
      modalImg.src = p.img;
      modalImg.alt = p.name;
      modalTitle.textContent = p.name;
      modalDesc.textContent = p.desc;
      modalPrice.textContent = `$${p.price}`;
      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
    }
  });
  document.getElementById('closeModal').addEventListener('click', () => {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
  });
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
    }
  });
}

function setupInteractions() {
  document.getElementById('year').textContent = new Date().getFullYear();
  document.getElementById('shopNow').addEventListener('click', () => {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
  });
  document.getElementById('ctaShop').addEventListener('click', () => {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  setupModal();
  setupInteractions();
});
