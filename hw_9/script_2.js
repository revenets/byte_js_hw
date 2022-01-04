const isNegative = (number) => number < 0;
const increment = (number) => number + 1;
const logger = (element, index, array) => {
  console.log(`In array [${array}] on position ${index}: ${element}`);
};


const ownForEach = (array, callback) => {
    for (let element of array) {
        callback(element, array.indexOf(element), array);
    }
}

const ownMap = (array, callback) => {
    let newArr = [];
    for (let element of array) {
        newArr.push(callback(element));
    }
    console.log(newArr);
    // return newArr;
}

const ownFilter = (array, callback) => {
    let newArr = [];
    for (let element of array) {
        if (callback(element)) {
            newArr.push(element);
        }
    }
    console.log(newArr);
    // return newArr;
}

ownForEach([1, 2, 3], logger);
ownMap([1, 2, 3], increment); // [2, 3, 4]
ownFilter([-2, 4, -1], isNegative); // [-2, -1]