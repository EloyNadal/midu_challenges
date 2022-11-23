/** 
 * reamos un triángulo de asteríscos * con la altura proporcionada y, a los lados, usamos el guión bajo _ para los espacios.
 *  Es muy importante que nuestro árbol siempre tenga la misma longitud por cada lado.
 * Todos los árboles, por pequeños o grandes que sean, tienen un tronco de dos líneas de #.
 * */


console.log(createXmasTree(90));

function createXmasTree(height) {

    const LINE = '_';
    const TRUNK = '#';
    const LEAVES = '*';

    const longBase = 2 * (height - 1) + 1;
    const half = longBase / 2;
    let numberOfLeaves = 1;
    let tree = '';

    for (let index = 0; index < height; index++) {

        let lines = ''.padStart(half - index, LINE);
    
        tree += lines + ''.padStart(numberOfLeaves, LEAVES) + lines + '\n'

        numberOfLeaves = numberOfLeaves + 2;
    }

    tree += ''.padStart(half, LINE) + TRUNK + ''.padStart(half, LINE) + '\n';
    tree += ''.padStart(half, LINE) + TRUNK + ''.padStart(half, LINE);

    return tree;
}



