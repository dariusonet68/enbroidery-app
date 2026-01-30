// cart.js — Shopping cart logic for Atelierul de broderie
// This module is ready for integration with your product and UI code.

// Cart state (in-memory for now)
let cart = [];

// Add a product to the cart
function addToCart(product, quantity = 1) {
  const existing = cart.find((item) => item.id === product.id);
  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({ ...product, quantity });
  }
  // Optionally: persist to localStorage
}

// Remove a product from the cart
function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
}

// Update quantity for a product
function updateCartQuantity(productId, quantity) {
  const item = cart.find((item) => item.id === productId);
  if (item) {
    item.quantity = quantity;
    if (item.quantity <= 0) removeFromCart(productId);
  }
}

// Get all items in the cart
function getCartItems() {
  return cart;
}

// Get total price
function getCartTotal() {
  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

// Clear cart
function clearCart() {
  cart = [];
}

// Export functions for integration
// Usage: import or include this file before your main app.js
// Example: addToCart(product)
