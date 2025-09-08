function addToCart(productName) {
  let cart = JSON.parse(localStorage.getItem('cart')) || {};
  cart[productName] = (cart[productName] || 0) + 1;
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem('cart')) || {};
  let total = Object.values(cart).reduce((a, b) => a + b, 0);
  const el = document.getElementById('cart-count');
  if (el) el.textContent = total;
}

function getCartItems() {
  return JSON.parse(localStorage.getItem('cart')) || {};
}

function clearCart() {
  localStorage.removeItem('cart');
}
