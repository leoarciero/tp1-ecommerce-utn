console.log("hola mundo");
fetch("http://localhost:3000/productos")
  .then((res) => res.json())
  .then((productos) => {
    console.table(productos);
    const contenedor = document.getElementById("contproductos");

    productos.forEach((p) => {
      console.log(p);
      console.log(p.nombre, p.precio);
      const tarjeta = document.createElement("div");
      tarjeta.classList.add("tarjeta");
      tarjeta.innerHTML = `
            <div class="imagen-tarjeta">
              <img src="assets/images/${p.id}.jpg" alt="" />
            </div>
            <div class="contenedor-infoproducto">
              <p class="nombre-producto">${p.nombre}</p>
              <p class="precio-producto">$ ${p.precio}</p>
            </div>
          `;
      contenedor.appendChild(tarjeta);
    });
  });
const btnBuscar = document.getElementById("btnBuscar");
btnBuscar.addEventListener("click", function () {
  console.log("clickeaste en buscar");
  const inputBusqueda = document.getElementById("inputBusqueda");
  console.log(inputBusqueda.value);
});
