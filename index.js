/*let main = function () {
    captura_boton();
}

let captura_boton = function () {
    document.querySelector(".boton input").setAttribute("onclick", "dataRead()");
}

let dataRead = function () {
    console.log("Datos Del Formulario");
    console.log(
        document.querySelector("#nombre").value,
        document.querySelector("#apellido").value,
        document.querySelector("#email").value,
        document.querySelector("#pass").value);

    let myObject = {
        nombre: document.querySelector("#nombre").value,
        apellido: document.querySelector("#apellido").value,
        email: document.querySelector("#email").value,
        pass: document.querySelector("#pass").value
    }
    console.log(myObject);
    console.log(JSON.stringify(myObject));

    save_localStorage(myObject);
};

let save_localStorage = function (myObj) {
    localStorage.setItem("dato", JSON.stringify(myObj));
}

let read_localStorage = function () {
    let dato = localStorage.getItem("dato");
    console.log(dato);
    let myObject = JSON.parse(dato);
    console.log(myObject);
}

main();*/

/*const boton = document.querySelector('#formulario');
boton.addEventListener('submit', aplicar);

function aplicar(e){
    e.preventDefault();
    const valor = document.querySelector('#nombre').value;

    if (valor ===""){
        Swal.fire({
            title: 'Error',
            text: 'El Campo es Obligatorio',
            icon: 'error',
            confirmButtonText: 'OK'
        })
    } else {
        Swal.fire({
            title: `${valor}!`,
            text: 'Bienvenid@, gracias por ingresar!!',
            icon: 'success',
            confirmButtonText: 'OK'
        })
    }    
}
*/

// Fetch
let formulario

const dataRead = async () => {
    
    let response = await fetch("./api.json")
    let data = await response.json()

    formulario = data
    console.log(response)

}

