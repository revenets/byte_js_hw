const data = [{
        name: "John",
        age: 24,
        position: "senior",
        isActive: false,
    },
    {
        name: "Peter",
        age: 33,
        position: "middle",
        isActive: false,
    },
    {
        name: "Sam",
        age: 29,
        position: "junior",
        isActive: true,
    },
    {
        name: "Mary",
        age: 24,
        position: "middle",
        isActive: false,
    },
    {
        name: "Steve",
        age: 23,
        position: "middle",
        isActive: true,
    },
    {
        name: "Kate",
        age: 31,
        position: "middle",
        isActive: false,
    },
    {
        name: "Sally",
        age: 19,
        position: "junior",
        isActive: false,
    },
    {
        name: "Jack",
        age: 19,
        position: "middle",
        isActive: true,
    },
];

const filterData = (arr, obj) => {
    let keys = Object.keys(obj);

    while (keys.length > 0) {
        arr = arr.filter((item) => item[keys[0]] === obj[keys[0]]);
        keys.shift();
    }

    return arr;
}
    
console.log(filterData(data, { age: 23 }));
console.log(filterData(data, { age: 24 }));
console.log(filterData(data, {
    age: 19,
    position: "junior"
}));
