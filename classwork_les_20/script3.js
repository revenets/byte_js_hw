function Human(options) {
    const {name, age, gender} = options;
    this.name = name;
    this.age = age;
};

Human.prototype.sayHello = function() {
    console.log (`Hello, my name is ${this.name}. I am ${this.age} y.o.`);
};

const human = new Human({name: "Peter", age: 42});
// console.log (human);

// human.sayHello();

// Extending class

function Citizen(options) {
    const {homeTown, ...humanOptions} = options;
    Human.call(this, humanOptions);
    this.homeTown = homeTown;
    this.location = homeTown;
};

// Citizen.prototype.__proto__ = Human.prototype;
Citizen.prototype = Object.create(Human.prototype);
Citizen.prototype.travel = function (city) {
    this.location = city;
}
Citizen.prototype.sayHello = function () {
    console.log (`Hello! Now my location is ${this.location}`)
}

const citizen = new Citizen({homeTown: "London", age: 27, name: "John"});
// console.log (citizen);

// citizen.sayHello();
// citizen.travel("Paris");
// console.log (citizen);
// citizen.sayHello();
// human.sayHello();


// Super class = parent class

function Car({make, model}) {
    this.make = make;
    this.model = model;
    this.distance = 0;
    this.isStarted = false;
};

Car.prototype.start = function () {
    this.isStarted = true;
};

Car.prototype.move = function () {
    if (!this.isStarted) {
        throw new Error(`Start ${this.make} ${this.model} before move!`)
    }

    this.distance++;
};

const car = new Car({make: "VW", model: "Golf"});
console.log (car);
car.start();
car.move();
car.move();
car.move();
car.move();
console.log (car);

function RacingCar(options) {
    Car.call(this, options);
};

// Наследуем прототип
RacingCar.prototype = Object.create(Car.prototype);
RacingCar.prototype.move = function () {
    Car.prototype.move.call(this);
    this.distance ++
};

const racingCar = new RacingCar({make: "Porsche", model: "911"});
racingCar.start();
racingCar.move();
racingCar.move();
console.log (racingCar)