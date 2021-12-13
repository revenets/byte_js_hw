// Генератор случайных чисел на промежутке

const getIntervalRandomNum = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.round(Math.random() * (max - min + 1)) + min;
}

console.log(getIntervalRandomNum(4, 23));
console.log(getIntervalRandomNum(324, 2341));
console.log(getIntervalRandomNum(100, 999));
