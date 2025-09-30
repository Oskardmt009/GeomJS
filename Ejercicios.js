//1.Calcula el área de un círculo dado su radio

let r = 10; // se lee el valor del radio
let areaCirculo = Math.PI*Math.pow(r, 2); //Se calcula el área del círculo
console.log("El área del círculo es: " + areaCirculo); //Se imprime el mensaje con 
//el resultado

//2.Encuentra la hipotenusa de un triángulo rectángulo

let cat1=3; //Se lee el primer cateto
let cat2=4; //Se lee el segundo cateto
let h = Math.sqrt(Math.pow(cat1, 2) + Math.pow(cat2, 2)); /* Se aplica el teorema de Pitágoras */
console.log("La hipotenusa del triángulo rectángulo es: " + h); //Se imprime el mensaje

//3.Convierte grados a radianes

let grados = 270; //Se lee los grados
let radianes = grados * (Math.PI / 180); //Se hace la conversión a radianes
console.log(grados + " grados son " + radianes + " radianes."); //Se imprime con el resultado

//4.Calcula seno y coseno de un ángulo en grados

let rad = 3*Math.PI/2;
let sin = Math.sin(rad);
let cos = Math.cos(rad);
let asin = Math.asin(sin);
let acos = Math.acos(cos);
console.log("El seno de " + rad + "en grados es: "+ Math.round(asin*180/Math.PI));
console.log("El coseno de "+ rad + "en grado es: " + Math.round(acos*180/Math.PI));

//5.Calcula la distancia recorrida por un objeto en caída libre

let=vI=0; // Se lee la velocidad inicial
let t = 5; // Se lee el tiempo en segundos
const g = 9.81; // aceleración debida a la gravedad en m/s²

let distancia = (vI * t) + 0.5 * g * Math.pow(t, 2); //Se usa la fórmula de la distancia

console.log("La distancia recorrida por el objeto en caída libre es: " + distancia + " metros.");

//6.Calcula el volumen de una esfera
let radio = 5; // Se lee el radio
let vEsf = (4/3) * Math.PI * Math.pow(radio, 3); /* Se la fórmula para hallar el volumen de
la esfera */
console.log("El volumen de la esfera es: " + vEsf + " metros cúbicos."); //Se imprime el resultado del volumen

//7.Encuentra la distancia entre dos puntos en el plano

let x1 = 3; //Se lee el punto x de la primer coordenada
let y1 = 5; //Se lee el punto y de la primer coordenada
let x2 = 4; //Se lee el punto x de la segunda coordenada
let y2 = 6; //Se lee el punto y de la segunda coordenada.

let distP = Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2)) //Se calcula con la fórmula de la distancia

console.log("La distancia es: "+ distP); // Se imprime el resultado de la distancia

//8. Calcula la energía cinética de un objeto

let m = 5; //Se lee la masa
let v = 6; //Se lee la velocidad

let eC = 0.5*m*Math.pow(v,2); //Se usa la fórmula de la energía cinética

console.log("La energía cinética del objeto es: "+ eC+" J"); //Se imprime el resultado de le energía cinética

//9.Calcula el área de un rectángulo conociendo su diagonal y un lado

let hip = 5 //Se lee la hipotenusa
let c1 = 4 // Se lee uno de sus catetos
let c2 = Math.sqrt(Math.pow(hip,2)-Math.pow(c1,2)); /*Mediante la fórmula del teorema de 
Pitágoras, obtenemos el otro cateto */
let areaR = (c1*c2); //Usamos la fórmula del rectángulo

console.log("El área del rectángulo es: "+ areaR)// imprimimos el área.

//10. Calcula el área de un triángulo conociendo sus tres lados (formula de Heron)

let a = 3; // Se lee el primer lado
let b = 4; // Se lee el segundo lado
let c = 5; // Se lee el tercer lado
let s = (a + b + c)/2; //Se calcula el semiperímetro

let areaTi = Math.sqrt(s*(s-a)*(s-b)*(s-c));// Se calcula el área mediante la fórmula de Heron

console.log("El área del triángulo es: "+ areaTi); //Se imprime el resultado