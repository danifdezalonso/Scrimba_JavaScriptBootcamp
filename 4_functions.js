// To perform similar actions in many places in a program without code repetition, we need to use functions.
function echo(input) {
	console.log(input);
}
// NB: A variable declared in a function only exists inside that function.
function echo(input) {
	let greeting;
	console.log(input);
}
// However, a function can access variables declared outside of its scope. It can also be passed input via arguments:
let greeting = "Hi";  

function echo(input) {
  console.log(`${greeting} ${input}`);  
}

echo(42);


function echo(input, greeting) {
    return `${greeting} ${input}`;  
   }
   
const result = echo(42, "Hi");
console.log(result);

function sendUserMessage(user, text) {
    console.log(`User ${user} says: ${text}`);
  }
  
  sendUserMessage(user1, 'Hey there');


//   -------------- CLOSURE---------
//A closure is an inner function that is inside its outer function’s scope and has access to its variables:

function makeSum(x){
    return function(y) {
        return x + y;
    };
};

let suma5 = makeSum(5); //suma5 = return x + y;
console.log(suma5(5)); // resultado 10 (recuerda el primer valor de la linea anterior y suma este) 

let suma10 = makeSum(10); 
console.log(suma10(10)); // resultado 20 (recuerda el 10 de antes y suma este)

// Challenge: Write a countdown function with a hard-coded starting number inside closure
// Stretch goal: Write a countdown function that can count from a provided number,
// with a provided step

// Start
function countdown(startingNumber, step) {
  let countFromNum = startingNumber + step;
  return function decrease() {
    countFromNum -= step;
    return countFromNum;
  }
}

const countingDown = countdown(20, 5);
console.log(countingDown());
console.log(countingDown());
console.log(countingDown());


// ------------- BETTER FUNCTIONS WITH DEFAULT PARAMETERS
function convertTemperature(celsius, decimalPlaces = 1) {  //decimalPlaces = 1 --> indica que si no se añade segundo parametro
  // celsius to fahrenheit                                   al llamar la funcion, por defecto será 1
const fahrenheit = celsius * 1.8 + 32;
return Number(fahrenheit.toFixed(decimalPlaces));
}
console.log(convertTemperature(21)); // result 69, 8 (por defecto 1 decimal)
console.log(convertTemperature(21, 0)); // result: 70

//--------------- ARROW FUNCTIONS =>
// Arrow functions allow us to write more concise code. They are:
// function expressions (assigned to a variable)
// anonymous (can't give them a name)
// Implicit returns mean that the value following the => is always returned, so the return keyword is not needed.

const username = 'john';

function capitalizeName(name) { //mayuscula primera letra nombre
  return `${name.charAt(0).toUpperCase()}${name.slice(1)}`;  
}

// convertir funcion a arrow, se le asigna a una variable
const capitalize = function capitalizeName(name) { 
  return `${name.charAt(0).toUpperCase()}${name.slice(1)}`;  
}

//se hace anonima (quitar el nombre de la funcion)
const capitalize = function(name) {
  return `${name.charAt(0).toUpperCase()}${name.slice(1)}`;  
}

// quitar la keyiword function y añadir la fecha apuntando al body de la funcion
const capitalize = (name) => { 
  return `${name.charAt(0).toUpperCase()}${name.slice(1)}`;  
}

// ---> si *solo* tenemos un parametro se pueden eliminar los parentensis
const capitalize = name => { 
  return `${name.charAt(0).toUpperCase()}${name.slice(1)}`;  
}

// ---> con dos parametros se ponen los parentesis y coma como siempre
const capitalize = (name, age) => { 
  return `${name.charAt(0).toUpperCase()}${name.slice(1)}`;  
}

// return implicito en arrow functions, no necesita return ni los brackets
const capitalize = name => 
  `${name.charAt(0).toUpperCase()}${name.slice(1)}`;  

// todo en la misma linea
const capitalize = name => `${name.charAt(0).toUpperCase()}${name.slice(1)}`;  

//------------ FUNCTIONS NAME => VERBS
