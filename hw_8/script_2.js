const getOccurrencesCount = (arr) => {
    const result = {};

    for (let elem of arr) {
        let counter = 0;

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === elem) {
                counter++;
            }
        }

        result[elem] = counter;
    }
    console.log(result);
};

getOccurrencesCount(["a", "v", "a", "b", "b"]);
getOccurrencesCount([
    "apples",
    "oranges",
    "pears",
    "pears",
    "apples",
    "oranges",
    "oranges",
    "pears",
]);
