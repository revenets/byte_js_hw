const findExcess = (arr) => {
    let evenCounter = 0;
    let oddCounter = 0;

    let evenIndex;
    let oddIndex;

    for (elem of arr) {
        if (elem % 2 === 0) {
            evenCounter++;
            evenIndex = arr.indexOf(elem);
        } else {
            oddCounter++;
            oddIndex = arr.indexOf(elem);
        }
    }

    if (evenCounter === 1) {
        console.log(arr[evenIndex]);
    } else if (oddCounter === 1) {
        console.log(arr[oddIndex]);
    }
};

findExcess([0, 1, 2]); // -> 1
findExcess([1, 2, 3]); // -> 2
findExcess([2, 6, 8, 10, 3]); // -> 3
findExcess([0, 0, 3, 0, 0]); // -> 3
findExcess([1, 1, 0, 1, 1]); // -> 0

