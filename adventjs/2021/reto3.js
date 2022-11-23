/** 
 * El Grinch está abriendo las cartas que iban a Santa Claus y las está dejando hechas un lío. 😱
 * Las cartas son una cadena de texto que incluyen regalos y paréntesis ().
 * Para saber si una carta es válida ✅, debes comprobar que los paréntesis cierran correctamente y que, además, no vayan vacíos.
 * ¡Pero ojo! Porque el Grinch ha dejado llaves { y corchetes [ dentro de los paréntesis que hacen que no sean válidas. 
 * Por suerte sólo los ha dejado en medio de los paréntesis...
 * */

/**
 * Crea una función que pasándole el texto de la carta, devuelva true si es válida y false si no lo es. ¡Y acaba con la travesura del Grinch! 
 * */

const letters = [
    "bici coche (balón) bici (coche) peluche", //true
    "bici coche (balón) bici )coche peluche",
    "bici (coche (balón) bici coche peluche",
    "(muñeca) consola bici", //true
    "muñeca consola bici", //true
    "(muñeca consola bici)", //true
    ")(muñeca consola bici",
    "(muñeca) )(consola bici",
    "bici coche (balón bici coche",
    "peluche (bici [coche) bici coche balón",
    "(peluche {) bici",
    "() bici",
    "( ) bici",
]


const withValidSemiColons = (letter) => {

    let whitColons = true;

    while(whitColons){

        if(letter.includes('(') && !letter.includes(')')) return false;

        const [firstPos, secodPos] = [letter.indexOf('('), letter.indexOf(')')];

        if(firstPos > secodPos || firstPos < 0 && secodPos > 0) return false;

        letter = letter.slice(secodPos + 1);

        whitColons = letter.includes('(') || letter.includes(')');
    }
    return true;
}

function isValid(letter) {

    const letterWithOutSpaces = letter.split(' ').join('');

    const notValidValues = ['[', ']', '{', '}', '()'];
    const withNotValidValues = notValidValues
        .map(value => letterWithOutSpaces.includes(value))
        .filter(value => value);

    if (withNotValidValues.length) return false;

    //return letter.split(' ').filter(l => l);

    return withValidSemiColons(letter);
}

letters.forEach((x) => console.log(isValid(x)));