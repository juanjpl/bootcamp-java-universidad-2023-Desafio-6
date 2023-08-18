

const verificarIngreso = (texto) => {
    let ingreso;
  
    do {
      ingreso = Number(prompt(`${texto}`));
    } while (!ingreso || ingreso < 0 ||ingreso>=120);
  
    return ingreso;
  };

const edad= verificarIngreso('Buenos días, ingrese su edad:');

console.log(edad);

edad>=18 ? console.log('Bienvenido----->Eres mayor de edad'):console.log('Aún no tienes edad para ser mayor')


