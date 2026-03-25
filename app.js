const imagenGrande = document.getElementById("imagenGrande");
const thumbnails = document.querySelectorAll("#thumbnails img");

thumbnails.forEach(img => {
  img.addEventListener("click", () => {
    imagenGrande.src = img.src;
  });
});


window.onload = function () {

  const boton = document.getElementById('btn-carrito');

  boton.addEventListener('click', function () {


    // Intentamos capturar los datos básicos
    const titulo = document.querySelector('h1')?.innerText
    const precio = document.querySelector('.price_purchase')?.innerText;
    const cantidad = document.getElementById('quantity')?.value

    // Buscamos el color seleccionado
    const radioSeleccionado = document.querySelector('input[name="color"]:checked');
    const color = radioSeleccionado ? radioSeleccionado.id : "No seleccionado";

    const producto = [titulo, precio, cantidad, color];

    console.log("Producto añadido al carrito:", producto);
  });

}
document.addEventListener("DOMContentLoaded", function () {

  const boton = document.getElementById("btn-carrito");
  const cantidad = document.getElementById("quantity");
  const carrito = document.getElementById("cart-count");

  let total = 0;

  boton.addEventListener("click", function () {

    const cantidadSeleccionada = parseInt(cantidad.value);

    total += cantidadSeleccionada;

    carrito.textContent = total;

  });

});