// const flat = (arr) => {
//     const res = [];

//     for (let el of arr) {
//         if (Array.isArray(el)) {
//             for (nestedEl of el) {
//                 res.push(nestedEl);
//             }
//         } else {
//             res.push(el)
//         }
//     }

//     return res;
// }

const flat = (arr, res = []) => {
    for (let el of arr) {
        if (Array.isArray(el)) {
            flat(el, res);
        } else {
            res.push(el);
        }
    }
    return res;
};

const flatArray = flat([[1, 2], [3, 4, [11, 12]], 5, [6, 7, 8]]);
console.log(flatArray);
