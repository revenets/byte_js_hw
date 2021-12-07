let numberOne = Number(prompt("Введите первое число"));
let numberTwo = Number(prompt("Введите второе число"));

if (numberOne > numberTwo) {
    alert(`Число ${numberOne} больше, чем ${numberTwo}`);
} else if (numberOne < numberTwo) {
    alert(`Число ${numberOne} меньше, чем ${numberTwo}`);
} else {
    alert("Числа равны");
}

let argumentOne = Number(prompt("Введите первое число"));
let operationSymbol = prompt("Введите оператор (+, -, *, /)");
let argumentTwo = Number(prompt("Введите второе число"));
let result;

switch (operationSymbol) {
    case "+":
        result = argumentOne + argumentTwo;
        alert(`${argumentOne} ${operationSymbol} ${argumentTwo} = ${result}`);
        break;
    case "-":
        result = argumentOne - argumentTwo;
        alert(`${argumentOne} ${operationSymbol} ${argumentTwo} = ${result}`);
        break;
    case "*":
        result = argumentOne * argumentTwo;
        alert(`${argumentOne} ${operationSymbol} ${argumentTwo} = ${result}`);
        break;
    case "/":
        result = argumentOne / argumentTwo;
        alert(`${argumentOne} ${operationSymbol} ${argumentTwo} = ${result}`);
        break;
}

let visitorAge = Number(prompt("Укажите Ваш возраст"));

if (
    (visitorAge >= 12 && visitorAge <= 18) ||
    (visitorAge >= 60 && visitorAge <= 80)
) {
    let isPermission = confirm("Имеется ли у Вас разрешение на посещение?");
    isPermission ? alert("Вход разрешен") : alert("Вход запрещен!");
} else if (visitorAge < 12 || visitorAge > 80) {
    alert("Вход запрещен!");
} else {
    alert("Вход разрешен");
}
