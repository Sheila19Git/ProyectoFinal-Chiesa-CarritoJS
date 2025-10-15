// let clientes = []
// let turnos = []
// let indice = 0
// const minimoDeTatuaje = 20000

// let continuar = true
// while (continuar) {
//     let menu = parseInt(prompt("Ingrese 1 para Ver turnos, 2 para consultas, 3 Cancelar turno, 4. Agenda tu turno, 5. Salir"))
//     switch (menu) {
//         case 1:
//           verTurnos()
//             break
//         case 2:
//           hacerConsulta()
//             break
//         case 3:
//             cancelarTurno()
//             break
//         case 4:
//            agendarTurno()
//            break
//         case 5:
//             continuar = false
//             console.log("Gracias!!")
//             break
//         default:
//             alert("Opcion incorrecta")
//     }
// }

// function verTurnos() {
//     if (indice === 0) {
//         console.log("Turnos disponibles esta semana por la Siesta")
//     } else {
//         mostrarTurnos(clientes, turnos, indice)
//     }
// }

// function saludarCliente(Nombre) {
//     console.log("Bienvenido a Vudu!!" + Nombre + " Agenda tu turno!")
// }

// function hacerConsulta() {
//     console.log("Contame qué tamaño, zona y diseño te gustaría hacerte")
// }

// function cancelarTurno() {
//     if (indice === 0) {
//         console.log("No hay turnos para cancelar.")
//         return
//     }

//  let nombre = prompt("Nombre del cliente que desea cancelar:")
//     let posicion = clientes.indexOf(nombre)

//      if (posicion !== -1) {
//         clientes.splice(posicion, 1)
//         turnos.splice(posicion, 1)
//         indice--
//         console.log(`Turno cancelado para ${nombre}.`)
//     } else {
//         console.log("No se encontró ningún turno con ese nombre.")
//     }
// }

// function calcularTatuajes(TatuajesporSesion) {

//     let total = TatuajesporSesion * minimoDeTatuaje
//     alert("El total de tu sesion sera de: " + total)
// }


// function agendarTurno() {
//     let Nombre = prompt("Ingrese su nombre")
//     console.log("Cliente " + Nombre)
//     saludarCliente(Nombre)

//     let cantidad = Number(prompt("Cuantos tatuajes queres hacerte?"))
//     if (cantidad <= 0 || isNaN(cantidad)) {
//         alert("Por favor ingrese un número de tatuajes por sesión válido.")
//         return
//     }

//     calcularTatuajes(cantidad)
//     turnos[indice] = cantidad
//     clientes[indice] = Nombre
//     indice++


// }

// function mostrarTurnos(clientes, turnos, total) {
//     console.log("Turnos:")
//     for (let i = 0; i < total; i++) {
//         console.log(clientes[i] + " - " + turnos[i] + " tatuajes")
//     }
// }


const estilosTatuajes = [
{
    id: 1,
    estilo: "minimalista",
    precio: 20000
},

{
    id: 2, 
    estilo: "Tradicional",
    precio: 40000

},

{
    id: 3,
    estilo: "blackandGrey",
    precio: 35000
},

{
 id: 4,
 estilo: "Tribal",
 precio: 50000


},



]

let cartProductos = JSON.parse(localStorage.getItem("cartProductos")) ||  []
let productosContainer = document.getElementById("productos-container")

function renderProductos(productosArray) {
    for (const producto of productosArray) {
        const card = document.createElement("div")
        card.id = "productoInd"
        card.innerHTML =  `<h3>${producto.estilo}</h3>
                          <p>${producto.precio}</p>
                          <button class="productoAgregar" id="${producto.id}">Agregar</button> `
        productosContainer.appendChild(card)

    }
    addToCardButton()
}

renderProductos(estilosTatuajes)

function addToCardButton(){
    addButton = document.querySelectorAll(".productoAgregar")
    addButton.forEach(button => {
    button.onclick = (e) => {
         const productId = Number(e.currentTarget.id)
         const selectedProductOrig = estilosTatuajes.find(producto => producto.id == productId)
         
         if (!selectedProductOrig) return; 
          const selectedProduct = { ...selectedProductOrig }
          const productoExistente = cartProductos.find(p => p.id == selectedProduct.id)

          if (productoExistente) {
             productoExistente.cantidad++

          } else{
             selectedProduct.cantidad = 1;
             cartProductos.push(selectedProduct)

          }

          localStorage.setItem("cartProductos", JSON.stringify(cartProductos))
    }
    })
}

