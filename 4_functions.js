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