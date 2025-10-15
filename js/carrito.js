 let cartConteiners = document.getElementById("cart-selection")
 let totalContainer = document.getElementById("total") 
 let cartStorage = localStorage.getItem("cartProductos")

 cartStorage = JSON.parse(cartStorage)

 function renderCarrito(cartItems) {
    cartConteiners.innerHTML = "" 
    let total = 0
    cartItems.forEach(producto => {
        const card = document.createElement("div")
        const subtotal = producto.precio * (producto.cantidad || 1)
        card.innerHTML = `<h3>${producto.estilo} x${producto.cantidad || 1}</h3>
                          <p>${subtotal}</p> `
        cartConteiners.appendChild(card)

         total += subtotal
     totalContainer.textContent = `Total: $${total}`
                        
    });
 }
 renderCarrito(cartStorage)

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
