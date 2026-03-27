const imagenesporColor = {
  "color-blue": [
    "./img/earbuds/earbuds_01.png",
    "./img/earbuds/earbuds_02.png",
    "./img/earbuds/earbuds_03.png",
    "./img/earbuds/earbuds_04.png"
  ],
  "color-gray-light": [
    "./img/earbuds/gray-light-01.png",
    "./img/earbuds/gray-light-02.png",
    "./img/earbuds/gray-light-03.png",
    "./img/earbuds/gray-light-04.png"
  ],
  "color-black": [
    "./img/earbuds/black-1.png",
    "./img/earbuds/black-2.png",
    "./img/earbuds/black-3.png",
    "./img/earbuds/black-4.png"
  ],
  "color-gray": [
    "./img/earbuds/gray-1.png",
    "./img/earbuds/gray-2.png",
    "./img/earbuds/gray-3.webp",
    "./img/earbuds/gray-4.png"
  ],
  "color-green": [
    "./img/earbuds/green-1.png",
    "./img/earbuds/green-2.png",
    "./img/earbuds/green-3.png",
    "./img/earbuds/green-4.png"
  ],
  "color-orange": [
    "./img/earbuds/orange-1.png",
    "./img/earbuds/orange-2.png",
    "./img/earbuds/orange-3.png",
    "./img/earbuds/orange-4.png"
  ],
}
const radios = document.querySelectorAll('input[name="color"]');

radios.forEach(radio => {
  radio.addEventListener("change", () => {
    const imagenes = imagenesporColor[radio.id];
    if (!imagenes) return;

    thumbnails.forEach((img, i) => {
      img.src = imagenes[i] || "";
      img.classList.remove("active");
    });

    imagenGrande.src = imagenes[0];
    thumbnails[0].classList.add("active");
  });
});

const imagenGrande = document.getElementById("imagenGrande");
const thumbnails = document.querySelectorAll("#thumbnails img");

thumbnails.forEach(img => {
  img.addEventListener("click", () => {
    imagenGrande.src = img.src;
  });
});

document.addEventListener("DOMContentLoaded", function () {

  const boton = document.getElementById("btn-carrito");
  const cantidadSelect = document.getElementById("quantity");
  const carrito = document.getElementById("cart-count");

  let total = 0;

  boton.addEventListener("click", function () {

    // Capturar datos del producto
    const titulo = document.querySelector("h1")?.innerText;
    const precio = document.querySelector(".price_purchase")?.innerText;
    const cantidad = parseInt(cantidadSelect.value);

    // Color seleccionado
    const radioSeleccionado = document.querySelector('input[name="color"]:checked');
    const color = radioSeleccionado ? radioSeleccionado.id : "No seleccionado";

    const producto = {
      titulo: titulo,
      precio: precio,
      cantidad: cantidad,
      color: color
    };

    console.log("Producto añadido al carrito:", producto);

    // Actualizar contador del carrito
    total += cantidad;
    carrito.textContent = total;

  });

});








