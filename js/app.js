//pedido de datos
import datos from './data.js';
//console.log(datos);

const verificarIngreso = (texto) => {
    let ingreso;
  
    do {
      ingreso = Number(prompt(`${texto}`));
    } while (!ingreso || ingreso < 0);
  
    return ingreso;
  };

  let acc_ingreso=0;
  let acc_egreso=0;

for (let i=0; i < datos.length-1; i++){
   

    const ingreso = verificarIngreso(`Ingrese el valor de INGRESO del mes ${datos[i]['mes']}:`);
    datos[i]['ingreso']=ingreso;
    acc_ingreso += ingreso;
  
    const egreso = verificarIngreso(`Ingrese el valor de EGRESO del mes ${datos[i]['mes']}:`);
    datos[i]['egreso']=egreso;
    acc_egreso += egreso;
    //console.log(`${datos[i]['mes']}\t\t` , `Ingreso: ${datos[i]['ingreso']}\t`,`Egreso: ${datos[i]['egreso']}`)
}

datos[12]['ingreso']=acc_ingreso;
datos[12]['egreso']=acc_egreso;


console.table(datos);

(( acc_ingreso-acc_egreso) < 0 )
? console.log('CUIDADO! Este flujo de ingresos genera perdidas!')
: console.log('FELICITACIONES! Este flujo de ingresos genera ganancias!')




