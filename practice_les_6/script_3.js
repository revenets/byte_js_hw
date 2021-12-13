const muskCreditCard = (cardNumber) => {
    const MASK = "****";
    let result = "";

    for (i=0, j=1; i<cardNumber.length; i+=4, j++) {
        const numbers = cardNumber.slice(i, i+4);

        if (j === 2 || j === 3) {
            result += MASK + " ";
        } else if (j === 1) {
            result += numbers + " ";
        } else {
            result += numbers;
        }
    }

    return result;
}

const res = muskCreditCard("5168345678902345");
console.log(res);