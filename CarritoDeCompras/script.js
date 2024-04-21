const produts = [
  {
    name: 'Lápiz',
    price: 500,
  },
  {
    name: 'Borrador',
    price: 400,
  },
  {
    name: 'Cuaderno',
    price: 1200,
  },
];

document.addEventListener('DOMContentLoaded', () => {
  const productsHtml = produts.reduce((prev, product) => {
    prev += `<section class="product">
    <p class="product-name">${product.name} $<span class="product-price">${product.price}</span></p>
    <button class="add-to-card" onclick="addToCart({name:'${product.name}',price:${product.price}});">Añadir</button>
</section>`;

    return prev;
  }, '');

  document.getElementsByClassName('products')[0].innerHTML = productsHtml;
});

function addToCart(newItem) {
  // Obtenemos el contenido del carrito actualmente
  const itemsString = localStorage.getItem('cart');
  let items = [];

  // Si ya hay articulos en el carrito entonces los convertimos a arreglo para poder añadir el nuevo
  if (itemsString !== null) {
    items = JSON.parse(itemsString);
  }

  // Agregamos el nuevo producto
  items.push(newItem);

  // Guardamos el contenido del carrito
  localStorage.setItem('cart', JSON.stringify(items));
}

function viewCart() {
  console.log('Cart', localStorage.getItem('cart'));
}

function cleanCart() {
  localStorage.setItem('cart', JSON.stringify([]));
}
