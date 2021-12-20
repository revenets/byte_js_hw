const countTrue = (arr) => {
    let counter = 0;

    for (let elem of arr) {
        if (elem) {
            counter++;
        } else {
            continue;
        }
    }

    return counter;
};

console.log(countTrue([true, false, false, true, false]));
console.log(countTrue([false, false, false, false]));
console.log(countTrue([]));
