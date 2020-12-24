// Arrays are data structures for managing collections of data where order is important.
// There are a number of bulit-in methods which enable us to manage the data in an array, 
// for example .push(), which adds an element to the end of an array 
//and .pop, which removes an array's last element.
const todos = [];
todos.push(todo1, todo2);
todos.pop();

// Challenge: 
// 1. Create an array - favouriteSongs[] -  and add your 3 favourite songs using push()
// 2. Log out the last song in the array, and make it so that your solution will log out the last one regardless of how many items there are in the array
// 3. Invoke the pop method on your created array. What values do you have left in the array? 

const favouriteSongs = [];

favouriteSongs.push("Like a rolling stone"); //añade al final del array
favouriteSongs.push("Blowing in the wind");
favouriteSongs.push("Mr Tambourine man");
favouriteSongs.push("It aint me");

console.log(favouriteSongs);

console.log(favouriteSongs[favouriteSongs.length - 1]) // enseña la ultima

favouriteSongs.pop(); //elimina la ultima
console.log(favouriteSongs[favouriteSongs.length - 1])
