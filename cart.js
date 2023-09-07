document.addEventListener("DOMContentLoaded", () => {
    const agregarAlCarrito = document.querySelectorAll(".agregar-carrito");
    const carritoLista = document.querySelector(".carrito-lista");
    const total = document.getElementById("total");
    const vaciarCarritoBtn = document.getElementById("vaciar-carrito");

    const carrito = [];

    agregarAlCarrito.forEach((boton) => {
        boton.addEventListener("click", () => {
            const producto = boton.dataset.producto;
            const precio = parseFloat(boton.dataset.precio);

            const productoEnCarrito = carrito.find((item) => item.producto === producto);

            if (productoEnCarrito) {
                productoEnCarrito.cantidad++;
            } else {
                carrito.push({ producto, precio, cantidad: 1 });
            }

            actualizarCarrito();
        });
    });

    vaciarCarritoBtn.addEventListener("click", () => {
        carrito.length = 0;
        actualizarCarrito();
    });

    function actualizarCarrito() {
        carritoLista.innerHTML = "";

        let carritoTotal = 0;

        carrito.forEach((item) => {
            const { producto, precio, cantidad } = item;
            carritoTotal += precio * cantidad;

            const li = document.createElement("li");
            li.innerHTML = `${producto} x ${cantidad} - $${(precio * cantidad).toFixed(2)}`;
            carritoLista.appendChild(li);
        });

        total.textContent = carritoTotal.toFixed(2);
    }
});
