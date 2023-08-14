//pedido de datos


const verificarIngreso =(texto) =>{
    let ingreso;

    do{
        ingreso = Number(prompt(`${texto}`))
    }while(!ingreso || ingreso<0 )

    return ingreso;
}


const ingresoTotal = verificarIngreso('Ingrese su ingreso total:');
//console.log(costoFijo);

let gastosNecesarios = ingresoTotal*0.50;
console.log(`El 50% de tus ingreso (gastos necesarios) es de ${gastosNecesarios}`);

//let gastosOpcionales =ingresoTotal*0.30;
console.log(`El 30% de tus ingreso (gastos opcionales) es de ${ingresoTotal*0.30}`);

let ahorro_inversion =ingresoTotal*0.20;
console.log(`El 20% de tus ingreso (ahorro) es de ${ahorro_inversion}`);

