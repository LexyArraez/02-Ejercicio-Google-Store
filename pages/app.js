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
    const precio = document.querySelector('.price_purchase')?.innerText ;
    const cantidad = document.getElementById('quantity')?.value 

    // Buscamos el color seleccionado
    const radioSeleccionado = document.querySelector('input[name="color"]:checked');
    const color = radioSeleccionado ? radioSeleccionado.id : "No seleccionado";

    const producto = {
      nombre: titulo,
      precio: precio,
      cantidad: cantidad,
      color: color
    };

    alert("Añadiendo al carrito: " + producto.nombre + " - " + producto.color);



  });
};