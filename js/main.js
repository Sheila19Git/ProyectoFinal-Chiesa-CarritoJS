

function saludarCliente (Nombre) {
console.log("Bienvenido a Vudu!!" + Nombre + " Agenda tu turno!")

}

function calcularTatuajes (TatuajesporSesion) {
    const minimoDeTatuaje = 20000
     if(TatuajesporSesion <= 0) {
        alert("Porfavor ingrese un numero de tatuajes por sesion.")
        return
     }
     let total = TatuajesporSesion * minimoDeTatuaje
     alert("El total de tu sesion sera de: " + total)
}

function mostrarTurnos(clientes, turnos, total) {
    console.log("Turnos:")
    for (let i = 0; i < total; i++) {
        console.log(clientes[i] + " - " + turnos[i] + " tatuajes")
    }
}


let clientes =  []
let turnos =  []
let indice = 0


let continuar = true
while(continuar) {
   

let menu = parseInt(prompt("Ingrese 1 para Ver turnos, 2 para consultas, 3 Cancelar turno, 4 Cuantos tatuajes quieres hacerte?"))
switch(menu) {
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
            clientes[indice] = Nombre
            console.log("Cliente " + Nombre)
            saludarCliente(Nombre)

           let cantidad = Number(prompt("Cuantos tatuajes queres hacerte?"))
           calcularTatuajes(cantidad)
           turnos[indice] = cantidad
            indice++
           break
           default:
            alert("Opcion incorrecta")
            }
     

let elegir = prompt("Desea agendar otro turno o consulta? (si/no)").toLowerCase()
if(elegir == "no") {
    continuar = false
    console.log("Gracias!!")
}


    }

    










