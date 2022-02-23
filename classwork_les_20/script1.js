// Constructor functions, new

function Person (name, age) {
  // this = {}
  this.name = name;
  this.age = age;
  this.isActive = true;
  // return this
}

const person = new Person ('Nikita', 28);

console.log (person);

console.log ('===================================================');

function User (name, role = null) {
  this.name = name;
  this.role = role;
}

const userAdmin = new User ('Peter', 'admin');
const userClient = new User ('Jack', 'client');
const userGuest = new User ('Sam');

console.log (userAdmin);
console.log (userClient);
console.log (userGuest);

console.log ('===================================================');

console.log ("Creating constructors' methods");

function Animal (name) {
  this.name = name;
  this.sayHi = () => {
    console.log (`Hello! I'm ${this.name}`);
  };
}

const rabbit = new Animal ('Rabbit');
const cow = new Animal ('Cow');

rabbit.sayHi ();
cow.sayHi ();

console.log ('===================================================');

function DumbCalc (num1, num2) {
  this.a = num1;
  this.b = num2;

  this.add = () => {
    return this.a + this.b;
  };
}

const calc = new DumbCalc (1, 2);
const result = calc.add ();
console.log ('result', result);

console.log ('===================================================');

// Advanced this

const user = {
  age: 25,
  login: 'user1',
};

function greeting () {
  console.log ('this', this);
  console.log (`Hello, ${this.login}, You are ${this.age} years old`);
}

// greeting();

// user.greet = greeting;
// user.greet();

const userGreeting = greeting.bind (user);

console.log (user.greet);
userGreeting ();

function countBirthYear (currentYear) {
  console.log (`Your birth year is approximately ${currentYear - this.age}`);
}

countBirthYear.call (user, 2022);
countBirthYear.apply (user, [2022]);

console.log ('===================================================');

// Practice

const inputA = document.getElementById ('num1');
const inputB = document.getElementById ('num2');
const resultElement = document.getElementById ('result');
const getResultBtn = document.getElementById ('get-result');

function Calculator (options) {
  const {inputA, inputB, resultElement} = options;
  this.inputA = inputA;
  this.inputB = inputB;
  this.resultElement = resultElement;
  this.sum = 0;
  this.handleInput = handleInput.bind(this);

  this.calculate = function () {
      this.sum = Number(this.inputA.value) + Number(this.inputB.value);
  };

  this.renderSum = function () {
      this.resultElement.innerText = this.sum;
  };

  this.getSum = function () {
      return `Current sum is: ${this.sum}`;
  };

  this.inputA.addEventListener("input", this.handleInput);
  this.inputB.addEventListener("input", this.handleInput);

  function handleInput() {
      console.log("this", this);
      this.calculate();
      this.renderSum();
  }
}

const calculator = new Calculator({
    inputA, inputB, resultElement
});