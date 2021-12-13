// HEX to rgb

const getRGBFromHEX = (hexCode) => {
    // const red = hexCode.slice(1, 3);
    // const green = hexCode.slice(3, 5);
    // const blue = hexCode.slice(5, 7);

    // const decimalRed = parseInt(red, 16);
    // const decimalGreen = parseInt(green, 16);
    // const decimalBlue = parseInt(blue, 16);

    // return `rgb(${decimalRed}, ${decimalGreen}, ${decimalBlue})`;

    let codes = "";

    for (let i = 1; i < hexCode.length; i+=2) {
        let color = parseInt(hexCode.slice(i, i+2), 16);

        // if (i !== hexCode.length - 2) {
        //     color = `${color}, `
        // }

        codes += (i !== hexCode.length - 2) ? `${color}, ` : color;
    }
    return `rgb(${codes})`;
}

const rgbResult = getRGBFromHEX("#ffffff");
console.log(rgbResult);