const salaries = {
    John: "4300.00",
    Ann: "5700.40",
    Pete: "4900.95",
};


const getSumSalaries = (obj) => {
    let result = 0;

    for (let key in obj) {
        result += parseFloat(obj[key]);
    }

    return result.toFixed(2);
}

console.log(getSumSalaries(salaries));