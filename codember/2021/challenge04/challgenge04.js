const min = 11098;
const max = 98123;

const isValid = (number) => {

    const stringNumbers = number.toString();
    if(stringNumbers.split('5').length < 3){
        return false;
    }

    let isValidNumber = true;
    [...stringNumbers].forEach((stringNumber, index, array) => {
        if(stringNumber < array[index-1]){
            isValidNumber = false
        }
    });

    return isValidNumber;
}

const results = [];
for (let index = min; index <= max ; index++) {
    if(isValid(index)){
        results.push(index);
    }
}

console.log(results);
console.log(results.length);
console.log(results[55]);