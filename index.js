//Ejercio 1
let persona = {
    nombre: "Daniela",
    apellido: " Estrada",
    comision: " 23068",
    hobbies: " Escalada Deportiva, el tenis y leer",
    
    saludar: function() {
      console.log("Hola, mi nombre es " + this.nombre + this.apellido); 
    },
    agregar: function () {
      console.log ("Pertenezco a la comision" + this.comision);
    },
    anexo: function () {
      console.log ("Mis Hobbies son la" + this.hobbies);
    }
  };
  
  persona.saludar(); 
  persona.agregar();
  persona.anexo();

//Ejercico 2
let animal = prompt("Frase celebre favorita: ");

  console.log(animal);

//Ejercicio 3
let bienvenida = prompt ("Cual es tu nombre?");
  document.write("Hola," +bienvenida, "!")

//Ejercicio 4
let usuario = prompt ("Indicame tu nombre y apellido")
  console.log(usuario)

//Ejercicio 5
let nacimiento = prompt ("Cual fue tu año de nacimiento?");
{
      let x = 2023;
      let y = nacimiento;
      let resultado = x - y;
        console.log("Tienes " +resultado + " años");
}

//Ejercicio 6
let peso = prompt ("Cual es tu peso en kg?");
let altura = prompt ("Ahora decime tu altura en metros");
{
  let ibm = peso / (altura ^ 2);
  document.write("Tu BMI es " + ibm);
}

//Ejercicio 7
let cantidadDeVentanas = 5;
  console.log(cantidadDeVentanas);

//Ejercicio 8
let razonamiento = true;
let librealbredrio = true;
let SoyHumano = razonamiento && librealbredrio;
  console.log(SoyHumano)

//Ejercicio 9
let  miGustoDePizza = "Margarita a la Napolitana"
  console.log(miGustoDePizza)

//Ejercicio 10
let Ejercicio10 = false;
console.log(Ejercicio10);

Ejercicio10 = 'Hola';
console.log(Ejercicio10);

Ejercicio10 = 0;
console.log(Ejercicio10);

Ejercicio10 = 'Minions';
console.log(Ejercicio10);

/*Ejercicio11 Por completar. 
Chat GPT me indico una opcion bastante buena
function calcularSuperficie(base, altura) {
  return (base * altura) / 2;
}

function calcularPerimetro(base, altura) {
  var lado = Math.sqrt((base * base) + (altura * altura));
  return base + altura + lado;
}

// Ejemplo de uso:
var base = 5;
var altura = 3;

var superficie = calcularSuperficie(base, altura);
var perimetro = calcularPerimetro(base, altura);

console.log("Superficie: " + superficie);
console.log("Perímetro: " + perimetro);
*/

//Ejercicio 12
function dividir(a, b) {
  return a / b;
}
let conversor = dividir(50, 2.205);
  console.log(conversor)

//Ejercicio 13
function raise(a, b)  {
  return a * b;
}
let resultado = raise(120000, 1.15);
  console.log(resultado)

//Ejercicio 14

