const cube = {
    color: "black",
    dimensions: {
        height: 100,
        width: 200,
    },
};

const user = {
    name: "John",
};

// const userClone = {};
// userClone.name = user.name;

// userClone.name = "Peter";

// console.log(user);
// console.log(userClone);

const car = {
    name: "BMW",
    year: 2020,
    price: 30000,
};

const makeClone = (obj) => {
    const clone = {};

    for (let key in obj) {
        clone[key] = obj[key];
    }

    return clone;
};

const carClone = makeClone(car);

carClone.year = 2021;

// console.log("carClone", carClone);
// console.log("car", car);

const cubeClone = makeClone(cube);

cubeClone.color = "white";
cubeClone.dimensions.height = 1000;

// console.log("cube", cube);
// console.log("cubeClone", cubeClone);

// Recursion

const loopFactorial = (n) => {
    let result = 1;

    for (let i = 0; i < n; i++) {
        result *= n - i;
    }

    return result;
};

const factorial = loopFactorial(5);
// console.log("factorial", factorial);

const recursiveFactorial = (n) => {
    if (n === 1) {
        return n;
    }
    return n * recursiveFactorial(n - 1);
};

// console.log("recursiveFactorial", recursiveFactorial(5));


const makeDeepClone = (obj) => {
    const clone = {};

    for (let key in obj) {
        if (typeof obj[key] !== "object") {
            clone[key] = obj[key];
        } else {
            clone[key] = makeDeepClone(obj[key])
        }
    }

    return clone;
}

const cubeDeepClone = makeDeepClone(cube);

cubeDeepClone.dimensions.width = 800;
console.log("cubeDeepCopy", cubeDeepClone);