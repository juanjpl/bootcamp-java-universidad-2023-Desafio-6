//pedido de datos
/*
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

*/

//Datos para ser probados en la función

const datos1=[
  {
    mes:'Enero' ,
    ingreso: 10000,
    egreso:1000,

  },
  {
    mes:'Febrero' ,
    ingreso: 15000,
    egreso:1500,

  },
  {
    mes:'Marzo' ,
    ingreso: 40000,
    egreso:4000,

  }
]

const datos2= 1;

const verificarArray=(array)=>{

  let respuesta = Array.isArray(array);

  (!respuesta)
  ?console.log('Haz ingresado un formato distinto a ARRAY')
  :verificarDatos(array)

}

const verificarDatos =(array)=>{

  let acc_egreso=0;
  let acc_ingreso=0;

  for(let i=0; i<array.length;i++){
    if(array[i].hasOwnProperty("mes") && typeof array[i]['mes'] === 'string'){
      
      console.log( `Existe la propiedad MES en Array. ${array[i]['mes']} `)

      if(array[i].hasOwnProperty("ingreso") && Number(array[i]['ingreso'])){
        console.log( `Existe la propiedad INGRESO en Array. ${array[i]['mes']} `)

        if(array[i].hasOwnProperty("egreso") && Number(array[i]['egreso'])){
          console.log( `Existe la propiedad EGRESO en Array. ${array[i]['mes']} `)

          acc_egreso = acc_egreso+array[i]['egreso'];
          acc_ingreso =acc_ingreso+array[i]['ingreso'];
        }else{
          console.log('error en la carga de datos de.')
        }
      }else{
        console.log('error en la carga de datos de.')
      }
    }else{
      console.log('error en la carga de datos de.')
    }



    //console.log(array[i]['ingreso'])
  }

  console.log(acc_egreso)
  console.log(acc_ingreso)
  console.log(acc_ingreso - acc_egreso)
  if((acc_ingreso - acc_egreso)>0){

   
    console.log(1)
  }else if((acc_ingreso - acc_egreso)===0){
    
      console.log(0)
   
  }else{
    console.log(-1)
  }
  


}


const ingresarArray =(array)=>{

  const isArray = verificarArray(array);
  
 

}


ingresarArray(datos1);