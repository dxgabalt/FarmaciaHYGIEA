// cart.js

// Función para agregar un producto al carrito
function agregarAlCarrito(producto, precio) {
    const carritoLista = document.querySelector('.carrito-lista');
    const totalElemento = document.getElementById('total');

    // Crea un nuevo elemento de lista
    const nuevoProducto = document.createElement('li');
    nuevoProducto.textContent = `${producto} - $${precio}`;
    carritoLista.appendChild(nuevoProducto);

    // Actualiza el total
    let total = parseFloat(totalElemento.textContent.substring(1));
    total += parseFloat(precio);
    totalElemento.textContent = `$${total.toFixed(2)}`;
}

// Función para generar el enlace de WhatsApp
function generarEnlaceWhatsApp() {
    const numeroWhatsApp = '50585375055'; // Reemplaza con el número correcto
    const mensaje = encodeURIComponent('¡Hola! Vengo del Sitio Web de Farmacia JJ HIGYEA...'); // Formatea el mensaje

    const enlaceWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;
    window.open(enlaceWhatsApp, '_blank');
}

// Función para realizar un pedido
function realizarPedido() {
    const nombre = document.getElementById('nombre').value;
    const telefono = document.getElementById('telefono').value;
    const direccion = document.getElementById('direccion').value;
    const productoSeleccionado = document.getElementById('producto').value;
    const precioSeleccionado = document.getElementById('producto').options[document.getElementById('producto').selectedIndex].getAttribute('data-precio');

    // Verifica si la dirección contiene "Centro de Managua"
    if (direccion.toLowerCase().includes("centro de managua")) {
        // Genera el enlace de WhatsApp con la información del pedido
        const mensaje = encodeURIComponent(`¡Hola! Vengo del Sitio Web de Farmacia JJ HIGYEA 🌿\n\nNúmero de pedido: ${Math.floor(Math.random() * 100000)}\nFecha: ${new Date().toLocaleDateString()}\nHora: ${new Date().toLocaleTimeString()}\n\n*Información del cliente*\nNombre: ${nombre}\nTeléfono: ${telefono}\nEl pedido se llevará a domicilio: Sí\nDirección: ${direccion}\n\n*Pedido*\n${productoSeleccionado} - C$ ${precioSeleccionado}\n\n*Costos*\nSubtotal: C$ ${precioSeleccionado}\nCosto de envío: C$ 0.00\nCosto total: C$ ${precioSeleccionado}`);
        
        // Redirige a WhatsApp
        window.location.href = `https://wa.me/50585375055?text=${mensaje}`;
    } else {
        // La dirección no es válida, muestra un mensaje de error (puedes personalizar esto)
        alert("Lo sentimos, solo realizamos entregas en el Centro de Managua.");
    }
}


// Función para vaciar el carrito
function vaciarCarrito() {
    const carritoLista = document.querySelector('.carrito-lista');
    const totalElemento = document.getElementById('total');

    // Vacía la lista y restablece el total
    carritoLista.innerHTML = '';
    totalElemento.textContent = '$0.00';
}

// Evento para vaciar el carrito al hacer clic en el botón correspondiente
document.getElementById('vaciar-carrito').addEventListener('click', vaciarCarrito);
