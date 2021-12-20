const getMinMax = (arr) => {
    // if (arr.length === 1) {
    //     return [arr[0], arr[0]];
    // }

    const res = {
        min: arr[0],
        max: arr[0],
    };

    for (let num of arr) {
        if (num < res.min) {
            res.min = num;
        }

        if (num > res.max) {
            res.max = num;
        }
    }

    return res;
};

const minAndMaxArray = getMinMax([2]);
console.log(minAndMaxArray);
