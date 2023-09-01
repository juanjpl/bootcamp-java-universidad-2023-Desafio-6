//pedido de datos
import datos from "./datos.js";



const verificarDatos = (datos) => {
 

  console.log('Carga de los datos modificados ')
  console.log('=====================================')
 
  let array = datos;

  for (let i = 0; i < array.length; i++) {
    if (array[i].hasOwnProperty("nombre") && typeof array[i]["nombre"] === "string") {
      //console.log(typeof array[i]["ingreso"]);
      //console.log(array[i]["nombre"]);

      if (
        array[i].hasOwnProperty("capital") &&
        typeof array[i]["capital"] === "number"
      ) {
        //console.log(typeof array[i]["ingreso"]);
        //console.log(array[i]["capital"]);
       
        if (
          array[i].hasOwnProperty("plazo") &&
          typeof array[i]["plazo"] === "number"
        ) {
          //console.log(typeof array[i]["ingreso"]);
          
          //console.log(array[i]["plazo"]);

          
          if (
            array[i].hasOwnProperty("tasa") &&
            typeof array[i]["tasa"] === "number"
          ) {
            //console.log(typeof array[i]["ingreso"]);
            
            //console.log(array[i]["tasa"]);
  
            if (
              !array[i].hasOwnProperty("interes") 
            ) {
              //console.log(typeof array[i]["ingreso"]);
              
              
              //console.log('La propiedad INTERES NO EXISTE');
              //array[i] = Object.assign({'interes': 1});
              array[i]["interes"] = (array[i]["capital"] * array[i]["plazo"] * array[i]["tasa"]) / 100;
              //console.log(array[i]['interes']);
            
             
            } else {
              //console.log("La propiedad INTERES SI EXISTE");
              array[i]["tasa"];
              //console.log(array[i]['interes']);
            }
          
           
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


  //console.log('=====================================')
  //console.log('El resultado de la funcion es.... ')
//console.log(array)

return array;
};



const calcularInteres = (datos) => {
  let respuesta = Array.isArray(datos);
  console.log('Carga de los datos cargados ')
  console.log('=====================================')
  console.table(datos);

  let arrayDevuelvo = [];
  !respuesta
    ? console.log("Haz ingresado un formato distinto a ARRAY")
    : (arrayDevuelvo = verificarDatos(datos));

  return arrayDevuelvo;
};

const resultado = calcularInteres(datos);

console.table(resultado);
