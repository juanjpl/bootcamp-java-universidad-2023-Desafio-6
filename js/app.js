
//Datos para ser probados en la función

const datos1 = [
  {
    mes: 'Enero',
    ingreso: 10000,
    egreso: 1000,
  },
  {
    mes: "Febrero",
    ingreso: 15000,
    egreso: 1500,
  },
  {
    mes: "Marzo",
    ingreso: 40000,
    egreso: 4000,
  },
];

const datos2 = 1;


const verificarDatos = (array) => {
  let acc_egreso = 0;
  let acc_ingreso = 0;

  console.log('Carga de los datos presentados ')
  console.log('=====================================')
 

  for (let i = 0; i < array.length; i++) {
    if (array[i].hasOwnProperty("mes") && typeof array[i]["mes"] === "string") {
      //console.log(typeof array[i]["ingreso"]);
      console.log(array[i]["mes"]);

      if (
        array[i].hasOwnProperty("ingreso") &&
        typeof array[i]["ingreso"] === "number"
      ) {
        //console.log(typeof array[i]["ingreso"]);
        console.log(array[i]["ingreso"]);
        acc_ingreso = acc_ingreso + array[i]["ingreso"];
        if (
          array[i].hasOwnProperty("egreso") &&
          typeof array[i]["egreso"] === "number"
        ) {
          //console.log(typeof array[i]["ingreso"]);
          
          console.log(array[i]["egreso"]);

          acc_egreso = acc_egreso + array[i]["egreso"];
         
        } else {
          console.log("error en la carga de datos de Egreso");
        }
      } else {
        console.log("error en la carga de datos en Ingreso");
      }
    } else {
      console.log("error en la carga de datos en Mes");
    }
  }
  console.log('=====================================')
  console.log(`El total de Ingresos es: ${acc_ingreso}`);
  console.log(`El total de Egresos es: ${acc_egreso}`);
  console.log(`Ingresos - Egreso: ${acc_ingreso - acc_egreso}`);

  console.log('=====================================')
  console.log('El resultado de la funcion es.... ')
  if (acc_ingreso - acc_egreso > 0) {
    console.log(1);
  } else if (acc_ingreso - acc_egreso === 0) {
    console.log(0);
  } else {
    console.log(-1);
  }
};


const ingresarArray = (array) => {
  let respuesta = Array.isArray(array);

  !respuesta
    ? console.log("Haz ingresado un formato distinto a ARRAY")
    : verificarDatos(array);
};




ingresarArray(datos1);
