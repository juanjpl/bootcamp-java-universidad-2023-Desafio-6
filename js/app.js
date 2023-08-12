//pedido de datos


const verificarIngreso =(texto) =>{
    let ingreso;

    do{
        ingreso = Number(prompt(`${texto}`))
    }while(!ingreso || ingreso<0 )

    return ingreso;
}
const costoFijo = verificarIngreso('ingrese el costo fijo:');
//console.log(costoFijo);
const costoVariable = verificarIngreso('ingrese el costo variable:');
//console.log(costoVariable);
const precioVenta =verificarIngreso('ingrese el precio de venta:');
//console.log(precioVenta);
const cantidadTotal=costoFijo/(costoVariable*precioVenta)
console.log(`La cantidad a vender necesaria es de: ${cantidadTotal})`);