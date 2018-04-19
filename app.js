// // primitive data types
//
// // string
//
// const name = 'houssein abil';
// console.log(typeof name);
//
// // number
// const number = 42;
// console.log(typeof number);
//
// // boolean
// const married = true;
// console.log(typeof married);
//
// //null
// const playing = null;
// console.log(typeof playing);
//
// //undefined
// let eating;
// console.log(typeof eating);
//
// //symbol
// const sym = Symbol();
// console.log(typeof sym);
//
// // REFERENCE TYPE - return all objects
//
// // array
// const hobbies = ['coding', 'eating', 'sleeping'];
// console.log(typeof hobbies);
//
// //object literals
// const address = {
//     city: 'Fremont',
//     state: 'California'
// };
// console.log(typeof address);
//
// //date
// const today = new Date();
// console.log(typeof today);
//
// // converting number to string
// let val;
//
// val = String(42);
// console.log(val);
//
// //converting boolean to string
// val = String(true);
// console.log(val);
//
// //converting date to string
// val = String(new Date());
// console.log(val);
//
// //we also have the toString() method
// // converting array to string
// val = ([1, 2, 3, 4]).toString();
// console.log(val);
//
// //NOW LETS CONVERT STRING TO NUMBER
// val = Number('5');
// console.log(val);
//
// // or we can use the parseInt() method. works only on nombre entier
// val = parseInt('42');
// console.log(val);
//
// //transform decimal string to Number
// val = parseFloat('42.43');
// console.log(val);

// Math Object
let val;
val = Math.PI;
console.log(val);

//arrondir un nombre
val = Math.round(4.2);
console.log(val);

//arrondir a la valeur superieur
val = Math.ceil(4.2);
console.log(val);

// arrondir a la valeur inferieur
val = Math.floor(4.6);
console.log(val);

// pour faire un carre
val = Math.sqrt(18);
console.log(val);

// valeur absolue
val = Math.abs(-42);
console.log(val);

// exposant
val = Math.pow(8, 2);
console.log(val);

//la valeur minimum
val = Math.min(1, 3, 55, 0, 55);
console.log(val);
//valeur maximale
val = Math.max(334, 66, 8, 66,09, 99);
console.log(val);

//generer un random number entre 1 et 10
val = Math.floor(Math.random() * 10 + 1);
console.log(val);

