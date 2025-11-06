let cartConteiners = document.getElementById("cart-selection");
let totalContainer = document.getElementById("total"); 
let cartStorage = localStorage.getItem("cartProductos");


let cartProductos = JSON.parse(cartStorage) || [];

function renderCarrito() {
    cartConteiners.innerHTML = "";
    let total = 0;

    if (!cartProductos || cartProductos.length === 0) {
        cartConteiners.innerHTML = "<p>Tu carrito está vacío</p>";
        totalContainer.textContent = "Total: $0";
        return;
    }

    cartProductos.forEach(producto => {
        const card = document.createElement("div");
        card.classList.add("itemCarrito");

        const subtotal = producto.precio * (producto.cantidad || 1);

        card.innerHTML = `
            <h3>${producto.estilo} x${producto.cantidad || 1}</h3>
            <div>
                <button class="btnRestar" data-id="${producto.id}">-</button>
                <span>${producto.cantidad}</span>
                <button class="btnSumar" data-id="${producto.id}">+</button>
            </div>
            <p>${subtotal}</p> 
            <button class="btnEliminar" data-id="${producto.id}">Eliminar</button>
        `;

        cartConteiners.appendChild(card);
        total += subtotal;
    });

    totalContainer.textContent = `Total: $${total}`;
    localStorage.setItem("cartProductos", JSON.stringify(cartProductos));

    const btnComprar = document.createElement("button");
    btnComprar.id = "btn-comprar";
    btnComprar.textContent = "Finalizar compra";
    btnComprar.classList.add("btnEliminar");
    cartConteiners.appendChild(btnComprar);

    btnComprar.addEventListener("click", () => {
        if (cartProductos.length === 0) return;

        const metodoPago = document.getElementById("metodo-pago").value;

        if (metodoPago === "") {
            Swal.fire({
                title: "Elegí un método de pago",
                icon: "warning",
                confirmButtonText: "OK",
            });
            return;
        }

        Swal.fire({
            title: '¡Gracias por confiar en mi trabajo!',
            text: `Seleccionaste pagar con ${metodoPago}. Te espero en Instagram para coordinar tu turno y diseño.`,
            icon: 'success',
            confirmButtonText: 'Ir a Instagram',
            confirmButtonColor: '#000'
        }).then(() => {
            window.location.href = "https://www.instagram.com/vudu_tattoo13/";
        });

        cartProductos = [];
        localStorage.removeItem("cartProductos");
        renderCarrito();
    });

    actBotones();
}

// Botones
function actBotones() {

    const botonSumar =document.querySelectorAll(".btnSumar");
    const botonRestar = document.querySelectorAll(".btnRestar");
    const botonEliminar = document.querySelectorAll(".btnEliminar");


     botonSumar.forEach(btn => {
        btn.addEventListener("click", e => {
            const id = parseInt(e.currentTarget.dataset.id);
            const producto = cartProductos.find(p => p.id === id);
            if (producto) {
                producto.cantidad = (producto.cantidad || 1) + 1;
                renderCarrito();
            }
        });
    });

    botonRestar.forEach(btn => {
        btn.addEventListener("click", e => {
            const id = parseInt(e.currentTarget.dataset.id);
            const producto = cartProductos.find(p => p.id === id);
            if (producto) {
                if ((producto.cantidad || 1) > 1) {
                    producto.cantidad--;
                } else {
                    cartProductos = cartProductos.filter(p => p.id !== id);
                }
                renderCarrito();
            }
        });
    });

    
    botonEliminar.forEach(btn => {
        btn.addEventListener("click", e => {
            const id = parseInt(e.currentTarget.dataset.id);
            cartProductos = cartProductos.filter(p => p.id !== id);
            renderCarrito();
        });
    });
}

let borrarBtn = document.getElementById("borrar-carrito")
if (!borrarBtn) {
    borrarBtn = document.createElement("button")
    borrarBtn.id = "borrar-carrito"
    borrarBtn.textContent = "Borrar Carrito"
    document.body.appendChild(borrarBtn)
}

borrarBtn.addEventListener("click", () => {
    cartProductos = []                   
    localStorage.removeItem("cartProductos")
    totalContainer.textContent = `Total: $0`
    renderCarrito()                     
})

renderCarrito();
