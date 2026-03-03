// Product data for Embroidery Shop
const products = [
  {
    id: 1,
    name: 'Floral Patch Jacket',
    price: 58,
    tag: 'Apparel',
    img: 'images/download (5).jpeg',
    desc: 'A handcrafted floral patch sewn onto a durable denim jacket.',
  },
  {
    id: 2,
    name: 'Minimal Wave Tee',
    price: 34,
    tag: 'Apparel',
    img: 'images/download (5).jpeg',
    desc: 'Soft cotton tee with subtle embroidered wave motif.',
  },
  {
    id: 3,
    name: 'Sunrise Hoop Art',
    price: 45,
    tag: 'Home',
    img: 'images/download (5).jpeg',
    desc: 'Ready-to-hang embroidered hoop with sunrise design.',
  },
  {
    id: 4,
    name: 'Botanical Tote',
    price: 29,
    tag: 'Accessory',
    img: 'images/download (5).jpeg',
    desc: 'Sturdy canvas tote with hand-stitched botanical pattern.',
  },
  {
    id: 5,
    name: 'Monogram Hat',
    price: 22,
    tag: 'Accessory',
    img: 'images/download (5).jpeg',
    desc: 'Adjustable cap featuring a small monogram.',
  },
  {
    id: 6,
    name: 'Home Pillow',
    price: 66,
    tag: 'Home',
    img: 'images/download (5).jpeg',
    desc: 'Decorative pillow with textured embroidery.',
  },
];

const cardsContainer = document.querySelector('#card-container');

function renderCards(data) {
  let cardElements = '';

  if (data && data.length > 0) {
    data.forEach((product) => {
      const html = `
      <div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <div class="card mb-4 d-flex align-items-center justify-content-center mx-auto" style="max-width: 20rem;">
          <img src="${product.img}" class="card-img-top mx-auto d-block" alt="${product.name}" style="width: 100%; max-height: 220px; object-fit: cover; border-radius: 1rem; margin-top: 1rem;" />
          <div class="card-body text-center">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">${product.desc}</p>
            <p class="card-text"><strong>$${product.price}</strong></p>
            <button class="btn btn-primary add-to-cart" data-id="${product.id}">Add to Cart</button>
          </div>
        </div>
      </div>
      `;
      cardElements += html;
    });
  }
  cardsContainer.innerHTML = cardElements;
}

renderCards(products);
