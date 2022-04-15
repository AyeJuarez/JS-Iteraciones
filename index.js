let nombre = prompt("Ingresa tu Nombre"); 


    if(nombre === "Matias"){
        alert("Ingresaste lo correcto");
    }else{
        alert("Ingresaste un nombre invalido");
    }


function generarTabla(numero) {
    let num = parseInt(numero);

    let tabla = document.getElementById("tabla");
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