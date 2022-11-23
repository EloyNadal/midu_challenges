import { readFileSync } from 'fs';

const tests = {
    array1: ['red', 'blue', 'red', 'blue', 'green'],// -> 4, blue
    array2: ['green', 'red', 'blue', 'gray'],// -> 2, gray
    array3: ['blue', 'blue', 'blue', 'blue'],// -> 1, blue
    array4: ['red', 'green', 'red', 'green', 'red', 'green'],// -> 6, green
    array5: ['red', 'red', 'blue', 'red', 'red', 'red', 'green'],// -> 3, red
}

//Object.values(tests).forEach(test => checkLongZebra(test));


const data = readFileSync('colors.txt', { encoding: 'utf8', flag: 'r' });
let lines = "";
data.split(/\r?\n/).forEach((line) => {
    lines += line;
});
const values = lines.split(',').map(value => value.trim().replaceAll("'", ""));

checkLongZebra(values);

function checkLongZebra(colors) {
    let values = [];
    let result = [];

    colors.forEach((currentColor, index, array) => {

        const isCorrectColor = values.at(-1) !== currentColor && ([undefined, currentColor].includes(values.at(-2)));

        if (!isCorrectColor) {
            values = [];
            values.push(array[index - 1]);
        }

        values.push(currentColor);

        if (values.length >= result.length) {
            result = values;
        }
    })

    console.log({ result, size: result.length });
}
