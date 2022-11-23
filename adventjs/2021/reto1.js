/**
 * Considera una lista/array de ovejas. Cada oveja tiene un nombre y un color. 
 * Haz una función que devuelva una lista con todas las ovejas que sean de color rojo 
 * y que además su nombre contenga tanto las letras n Y a, 
 * sin importar el orden, las mayúsculas o espacios.
 */

const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo'}
];

function contarOvejas(ovejas) {
    return ovejas.filter(filtroOvejas)
}

const filtroOvejas = ({name, color}) => {
    return color.trim().toLowerCase() == 'rojo' 
        && name.trim().toLowerCase().includes('n')
        && name.trim().toLowerCase().includes('a')
}


const ovejasFiltradas = contarOvejas(ovejas)

console.log(ovejasFiltradas)

// [{ name: 'Navidad', color: 'rojo' },
//  { name: 'Ki Na Ma', color: 'rojo' }]