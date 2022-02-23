// Prototypes

const str = new String ('test');
const num = new Number (42);

// console.log(str);
// console.log(num);

// __proto__ - своеобразный getter u setter for Prototype
//
// console.log(str.__proto__);

// const user = {
// isOnline: true,
// };

// const admin = {
// hasPermissions: true,
// };

// admin.__proto__ = user;

// console.log (admin);
// console.log (admin.isOnline)

const animal = {
  eat () {
    this.isHungry = false;
  },
};

const rabbit = {
  isHungry: true,
  __proto__: animal,
};

// console.log(rabbit);
// rabbit.eat();
// console.log(rabbit);

// console.log(rabbit.hasOwnProperty('isHungry'));
// console.log(rabbit.hasOwnProperty('eat'));

// for (let key in rabbit) {
//     const isOwn = rabbit.hasOwnProperty(key);
//     if(isOwn){
//         console.log ("property is own", key)
//     } else {
//         console.log("property is inherited", key)
//     }

// }

// Object.keys (rabbit).forEach (key => {
//   console.log (key); // returns only own keys
// });

// Function.prototype

// function A () {}

// console.log (A.prototype);

// A.prototype.number = 1;

// const a = new A();
// console.log (a)

// A.prototype.sayHi = function () {
//     console.log ("Hi! I am a function from [[Prototype]]");
// };

// a.sayHi();

// const b = new A();
// console.log ("b.number", b.number);
// b.__proto__.number = 2;
// // b.constructor.prototype.number = 21
// console.log ("b.number", b.number);

function User (name) {
    this.name = name;
};

User.prototype.sayHello = function () {
    console.log(`Hello! My name is ${this.name}`);
};

const person1 = new User("Pablo");
const person2 = new User("Sam");

// person1.sayHello();
// person2.sayHello();

// Встроенные прототипы

Array.prototype.shuffle = function () {
    // console.log (this);
    for (let i = 0; i < this.length; i++) {
        const newIndex = Math.floor(Math.random() * (i + 1));
        const temp = this[i];
        this[i] = this[newIndex];
        this[newIndex] = temp;
    }
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.shuffle();
console.log (arr)
