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
}


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
A closure is an inner function that is inside its outer function’s scope and has access to its variables:

function makeSum(x){
    return function(y) {
        return x + y;
    };
};

let suma5 = makeSum(5); //suma5 = return x + y;
console.log(suma5(5)); // resultado 10 (recuerda el primer valor de la linea anterior y suma este) 

let suma10 = makeSum(10); 
console.log(suma10(10)); // resultado 20 (recuerda el 10 de antes y suma este)