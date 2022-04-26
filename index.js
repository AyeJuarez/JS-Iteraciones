const ProductoA = {
    nombre: "Producto A",
    precio: 500
}

const ProductoB = {
    nombre: "Producto B",
    precio: 1000
}

const ProductoC = {
    nombre: "Producto C",
    precio: 1500
}

let producto = 3; // Producto A, B o C //
let cantidad = 3; // Cantidad de productos a elegir //
let modalidad = 3; // Modalidad de Pago, cuota 1 a 6 por ejemplo //
let resultado;

switch (producto) {
    case 1:
        if(modalidad == 1){
            resultado = (ProductoA.precio*cantidad)*0.95;
            console.log(resultado);
        } else if(modalidad == 2){
            let resultado = ProductoA.precio*cantidad;
            console.log(resultado);
        } else if (modalidad == 3){
            let resultado = (ProductoA.precio*cantidad)*1.15;
            console.log(resultado);
        }else{
            console.log("lo siento, solo puedes pagar hasta 3 cuotas");
        }
        break;

    case 2:
        if(modalidad == 1){
            resultado = (ProductoB.precio*cantidad)*0.95;
            console.log(resultado);
        } else if(modalidad == 2){
            let resultado = ProductoB.precio*cantidad;
            console.log(resultado);
        } else if (modalidad == 3){
            let resultado = (ProductoB.precio*cantidad)*1.15;
            console.log(resultado);
        }else{
            console.log("lo siento, solo puedes pagar hasta 3 cuotas");
        }
        break;
    
    case 3:
        if(modalidad == 1){
            resultado = (ProductoC.precio*cantidad)*0.95;
            console.log(resultado);
        } else if(modalidad == 2){
            let resultado = ProductoC.precio*cantidad;
            console.log(resultado);
        } else if (modalidad == 3){
            let resultado = (ProductoC.precio*cantidad)*1.15;
            console.log(resultado);
        }else{
            console.log("lo siento, solo puedes pagar hasta 3 cuotas");
        }
        break;
}