let nombre = prompt("Ingresa tu Nombre"); 


    if(nombre === "Matias"){
        alert("Ingresaste lo correcto");
    }else{
        alert("Ingresaste un nombre invalido");
    }

function capturar(){
    function Persona (nombre,edad){
        this.nombre=nombre;
        this.edad=edad;
    }
    const nombreCapturar = document.getElementById("nombre").value;
    console.log(nombreCapturar);
    
    const edadCapturar = document.getElementById("edad").value;
    console.log(edadCapturar);

    nuevoSujeto = new Persona (nombreCapturar, edadCapturar)
    console.log(nuevoSujeto);
    agregar();
}

var baseDatos= [];
function agregar(){
    baseDatos.push(nuevoSujeto);
    console.log(baseDatos);
    document.getElementById("tabla").innerHTML += '<tbody><td>' + nuevoSujeto.nombre + '</td><td>' + nuevoSujeto.edad + '</td></tbody>';
}

function generarTabla(numero) {
    let num = parseInt(numero);

    let tabla = document.getElementById("tablas");
    tabla.innerHTML = '';

    for (let contador = 1; contador <= 10; contador++) {
        let resultado = contador * num;


        let fila = tabla.insertRow(contador - 1);
        let celda = fila.insertCell(0);
        celda.innerHTML = contador + " * " + num + " = " + resultado;


    }
}

function sumarNumero(numero) {

    let numeroFinal = parseInt(numero);
    let numeroInicial = 1;
    let resultado = 0;

    while (numeroInicial <= numeroFinal) {
        resultado += numeroInicial;
        numeroInicial++;
    }

    document.getElementById("resultado").innerText = resultado;
}