// RGB to HEX

const getHexFromRGB = (r, g, b) => {
    return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
}

const resultHex = getHexFromRGB(255, 255, 255);
console.log(resultHex);