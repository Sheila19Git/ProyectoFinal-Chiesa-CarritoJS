let clientes = []
let turnos = []
let indice = 0
const minimoDeTatuaje = 20000

let continuar = true
while (continuar) {
    let menu = parseInt(prompt("Ingrese 1 para Ver turnos, 2 para consultas, 3 Cancelar turno, 4. Agenda tu turno, 5. Salir"))
    switch (menu) {
        case 1:
            if (indice === 0) {
                console.log("Turnos disponibles esta semana por la Siesta")
            } else {
                mostrarTurnos(clientes, turnos, indice)
            }
            break
        case 2:
            console.log("Contame que tamaño, zona y diseño te gustaria hacerte")
            break
        case 3:
            console.log("Cancelaste tu turno!")
            break
        case 4:
            let Nombre = prompt("Ingrese su nombre")
            console.log("Cliente " + Nombre)
            saludarCliente(Nombre)

            let cantidad = Number(prompt("Cuantos tatuajes queres hacerte?"))
            if (cantidad <= 0 || isNaN(cantidad)) {
                alert("Porfavor ingrese un numero de tatuajes por sesion valido.")
                break
            }
             calcularTatuajes(cantidad)
            turnos[indice] = cantidad
            clientes[indice] = Nombre
            indice++
            break

        case 5:
            continuar = false
            console.log("Gracias!!")
            break
        default:
            alert("Opcion incorrecta")
    }
}

function saludarCliente(Nombre) {
    console.log("Bienvenido a Vudu!!" + Nombre + " Agenda tu turno!")
}

function calcularTatuajes(TatuajesporSesion) {

    let total = TatuajesporSesion * minimoDeTatuaje
    alert("El total de tu sesion sera de: " + total)
}

function mostrarTurnos(clientes, turnos, total) {
    console.log("Turnos:")
    for (let i = 0; i < total; i++) {
        console.log(clientes[i] + " - " + turnos[i] + " tatuajes")
    }
}