
const test1 = fitsInOneBox([
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 }
]) // true

const test2 = fitsInOneBox([
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 },
    { l: 3, w: 1, h: 3 }
]) // false

const test3 = fitsInOneBox([
    { l: 1, w: 1, h: 1 },
    { l: 3, w: 3, h: 3 },
    { l: 2, w: 2, h: 2 }
]) // false

const test4 = fitsInOneBox([
    { l: 1, w: 1, h: 10 },
    { l: 3, w: 3, h: 12 },
    { l: 2, w: 2, h: 1 },
]);

console.log({
    test1,
    test2,
    test3,
    test4
});

/**
 * Cosas a tener en cuenta:
 * Las cajas no se pueden rotar ya que los elfos nos han dicho que la máquina no está preparada.
 * Las cajas pueden venir desordenadas de tamaño.
 * Las cajas no son siempre cuadradas, pueden ser rectangulares.
 */

/**
 * Puntos conseguidos: 170
 * 2607 ops/s
 * Complejidad ciclomática: 1
 * Mantenibilidad: 158%
 * @param {Array} boxes 
 * @returns {boolean}
 */
function fitsInOneBox(boxes) {
    return boxes.sort((a, b) => a.l - b.l)
        .every((box, index) => index === boxes.length - 1 || (boxes[index + 1].l > box.l && boxes[index + 1].w > box.w && boxes[index + 1].h > box.h))
}