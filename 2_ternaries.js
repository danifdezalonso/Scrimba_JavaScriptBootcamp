
/* ---------------  Ternaries ---------------- */
const isAuthenticated = false;
// let cartItemCount = 0;

// if (isAuthenticated) {
//   // add item to cart
//   cartItemCount = 1;
// } else {
//   // tell user to login
// //   console.log("Please log in!");
//   cartItemCount = 0;
// }

const cartItemCount = isAuthenticated ? 1 : 0;
console.log(cartItemCount);

const age = 12;

// let greeting;

// if (age < 10) {
//   greeting = "Hey there"; 
// } else if (age > 18) {
//   greeting = "Greetings";  
// } else if (age > 10) {
//   greeting = "What's up?";  
// } else {
//   greeting = "That's an interesting age!";  
// }
// console.log(greeting);

const greeting = age < 10 ? "Hey there" : age > 18 ? "Greetings" : age > 10 ? "What's up?" : "That's an interesting age!";
console.log(greeting);
