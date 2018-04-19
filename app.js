// primitive data types

// string

const name = 'houssein abil';
console.log(typeof name);

// number
const number = 42;
console.log(typeof number);

// boolean
const married = true;
console.log(typeof married);

//null
const playing = null;
console.log(typeof playing);

//undefined
let eating;
console.log(typeof eating);

//symbol
const sym = Symbol();
console.log(typeof sym);

// REFERENCE TYPE - return all objects

// array
const hobbies = ['coding', 'eating', 'sleeping'];
console.log(typeof hobbies);

//object literals
const address = {
    city: 'Fremont',
    state: 'California'
};
console.log(typeof address);

//date
const today = new Date();
console.log(typeof today);

// converting number to string
let val;

val = String(42);
console.log(val);

//converting boolean to string
val = String(true);
console.log(val);

//converting date to string
val = String(new Date());
console.log(val);

//we also have the toString() method
// converting array to string
val = ([1, 2, 3, 4]).toString();
console.log(val);

//NOW LETS CONVERT STRING TO NUMBER
val = Number('5');
console.log(val);

// or we can use the parseInt() method. works only on nombre entier
val = parseInt('42');
console.log(val);

//transform decimal string to Number
val = parseFloat('42.43');
console.log(val);