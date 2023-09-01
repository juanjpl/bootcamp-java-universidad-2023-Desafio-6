//pedido de datos
import datos from "./datos.js";

const verificarIngreso = (texto) => {
  let ingreso;

  do {
    ingreso = Number(prompt(`${texto}`));
  } while (!ingreso || ingreso < 0);

  return ingreso;
};

for (let i = 0; i < datos.length; i++) {
  datos[i]["interes"] =
    (datos[i]["capital"] * datos[i]["plazo"] * datos[i]["tasa"]) / 100;
}

const verificarDatos = (datos) => {
 

  console.log('Carga de los datos presentados ')
  console.log('=====================================')
 
  let array = datos;

  for (let i = 0; i < array.length; i++) {
    if (array[i].hasOwnProperty("nombre") && typeof array[i]["nombre"] === "string") {
      //console.log(typeof array[i]["ingreso"]);
      console.log(array[i]["nombre"]);

      if (
        array[i].hasOwnProperty("capital") &&
        typeof array[i]["capital"] === "number"
      ) {
        //console.log(typeof array[i]["ingreso"]);
        console.log(array[i]["capital"]);
        //acc_ingreso = acc_ingreso + array[i]["plazo"];
        if (
          array[i].hasOwnProperty("plazo") &&
          typeof array[i]["plazo"] === "number"
        ) {
          //console.log(typeof array[i]["ingreso"]);
          
          console.log(array[i]["plazo"]);

          //acc_egreso = acc_egreso + array[i]["egreso"];
          if (
            array[i].hasOwnProperty("tasa") &&
            typeof array[i]["tasa"] === "number"
          ) {
            //console.log(typeof array[i]["ingreso"]);
            
            console.log(array[i]["tasa"]);
  
            //acc_egreso = acc_egreso + array[i]["egreso"];
           
          } else {
            console.log("error en la carga de datos de Tasa");
          }
         
        } else {
          console.log("error en la carga de datos de Plazo");
        }
      } else {
        console.log("error en la carga de datos en Capital");
      }
    } else {
      console.log("error en la carga de datos en Nombre");
    }
  }


  console.log('=====================================')
  console.log('El resultado de la funcion es.... ')
//console.log(array)

return array;
};



const calcularInteres = (datos) => {
  let respuesta = Array.isArray(datos);
  let arrayDevuelvo = [];
  !respuesta
    ? console.log("Haz ingresado un formato distinto a ARRAY")
    : (arrayDevuelvo = verificarDatos(datos));

  return arrayDevuelvo;
};

const resultado = calcularInteres(datos);
console.log(resultado);
