//pedido de datos
import datos from './datos.js';



const verificarIngreso = (texto) => {
    let ingreso;
  
    do {
      ingreso = Number(prompt(`${texto}`));
    } while (!ingreso || ingreso < 0);
  
    return ingreso;
  };

const edad= verificarIngreso('Buenos días, ingrese su edad:');

console.log(edad);

for (let i=0; i < datos.length; i++){
    datos[i]['interes']= ((datos[i]['capital'])*(datos[i]['plazo'])*(datos[i]['tasa']))/100;
}



console.table(datos);