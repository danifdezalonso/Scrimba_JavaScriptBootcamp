// Primitive data types (undefined, null, boolean, number, string and symbol) are passed by value, i.e. data is passed into a copy of the original value, meaning that the following code returns true:
// const num = "hello world";
// const anotherNum = "hello world";
// console.log(num === anotherNum);

// Objects are data structures which can hold any number of primitives. They do not return equal even if they are the same. This is because they are passed by reference. Whenever we pass an object to a variable or a function, either one just holds a reference to it.
// This means that the following code updates both obj and anotherObj at once:
// const obj = {};
// const anotherObj = obj;
// anotherObj.a = 1;

// Note: Although this behaviour allows us to dynamically add properties to objects, it can cause problems. We will learn how to fix these in the following screencasts.

// Object destructuring allows us to pull properties from an object and make them into variables:
// const { username, email } = user;
// We destructure nested objects as follows:
// const { name, details: { title} } = user;
// const user = {
//     name: "Reed",
//     username: "Reedbarger",
//     email: "reed@gmail.com",
//     details: {
//       title: "Programmer"  
//     }  
//   };
  
//   const { title } = user.details
//   const { name } = user;
// //   const { name, details: { title} } = user;  <= FORMA PERFECTA EN 1 LINEA, 2 NIVELES DE DESTRUCTURING

//   function displayUserBio() {
//     console.log(`${name} is a ${title}`); 
//   }
  
//   displayUserBio()

  
// // function displayUserBio({ name, details: { title} }) { <= form CON ARGUMENTOS
// //     console.log(`${name} is a ${title}`); 
// //   }
  

// Challenge: The recommendations object contains a set of of nice places to visit in Brighton, UK,
// organized by what you'd like to do (eat pancakes, drink coffee etc).

// 1. Destructure the places to drink (coffee and beer) from recommendations
// 2. Destructure the places to listen to music
// 3. Write a function that takes the recommendations object as an argument and that
//      a) Logs out the music venues in recommendations when invoked 
//      b) Uses object descructuring to get the "traditional" and "jazz" keys from the argument

const recommendations = {
    pancakes: 'Nowhere Man',
    riceBowls: 'Pompoko',
    beer: 'The Craft Beer Co.',
    coffee: 'Coffee Roasters',
    small_plates: 'Venetian Plates',
    music: { 
        traditional: 'Fiddler\'s Elbow', 
        jazz: 'The Paris House'
    }
}

const { beer, coffe } = recommendations;

const { music: { traditional, jazz } } = recommendations;

console.log(jazz)

function displayMusicPlaces({ music: { traditional, jazz } }) {
    console.log(`Head to ${traditional} or ${jazz} to listen to great music!`)
}

displayMusicPlaces(recommendations);
