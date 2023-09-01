//pedido de datos
import datos from './datos.js';



const verificarIngreso = (texto) => {
    let ingreso;
  
    do {
      ingreso = Number(prompt(`${texto}`));
    } while (!ingreso || ingreso < 0);
  
    return ingreso;
  };


for (let i=0; i < datos.length; i++){
    datos[i]['interes']= ((datos[i]['capital'])*(datos[i]['plazo'])*(datos[i]['tasa']))/100;
}




const calcularInteres=(datos)=>{

}


console.table(datos);