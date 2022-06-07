// solicito precio al usuario
let precio = parseInt (prompt("ingrese el precio al contado"));

//solicito cantidad de cuotas
let cantidadCuotas = parseInt (prompt("ingrese la catidad de cuotas deseada"));

let cuotaMensual;

// calcular cuotas con interes
function calcularCuotas (precio) {
    let interes = 0.20;
    cuotaMensual = (precio*(1+interes))/cantidadCuotas
    //return cuotaMensual;
    

    //if(cantidadCuotas>=1 && cantidadCuotas<=3){
       //cuotaMensual = (precio*(1+interes))/cantidadCuotas

    //if(cantidadCuotas>3 && cantidadCuotas>=6){
      //  let cuotaMensual = (precio*interes2)/cantidadCuotas}
    
    //if(cantidadCuotas>6 && cantidadCuotas<=12){
       // let cuotaMensual = (precio*interes3)/cantidadCuotas}    

   
}

calcularCuotas(precio);
console.log("Su cuota mensual es " + cuotaMensual);


 //while(cantidadCuotas >=1 && cantidadCuotas =<12) {

 

 //alert ("Cantidad de cuotas no permitida");