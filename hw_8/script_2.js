const getOccurrencesCount = (arr) => {
    const result = {};

    for (let elem of arr) {
        if (!result[elem]) {
            result[elem] = 1;
        } else {
            result[elem] += 1;
        }
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
