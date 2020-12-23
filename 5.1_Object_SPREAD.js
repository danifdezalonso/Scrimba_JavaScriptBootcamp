
//------------ MERGE OBJECTS WITH OBJECT SPREAD
const user = {
    name: "",
    username: "",
    phoneNumber: "",
    email: "",
    password: ""  
  };
  
  const newUser = {
    username: "ReedBarger",
    email: "reed@gmail.com",
    password: "mypassword"  
  };
  
console.log(Object.assign(user, newUser)); // object user original ha mutado
console.log(Object.assign({}, user, newUser)); // crea nuevo objecto
console.log(Object.assign({}, user, newUser, { verified: false })); // nuevo dato a ingresar verified se puede hacer creando otro igual que el anterior o en linea como este si es simple


// CREAR UN USUARIO NUEVO SIN MUTAR EL PRIMIGENIO *********************** SPREADING****** => ...antes del objecto
const createdUser = { ...user, ...newUser, verified: false };
console.log(createdUser);