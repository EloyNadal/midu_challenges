
const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]

// el pack de regalos pesa 4 + 4 + 4 = 12
// los renos pueden llevar (2 * 6) + (2 * 6) = 24
// por lo tanto, Santa Claus puede entregar 2 cajas de regalos


/**
 * Cosas a tener en cuenta:
 * Las cajas de regalos no se pueden dividir.
 * Los nombres de los regalos y los renos siempre serán mayores que 0.
 */
 const result = distributeGifts(packOfGifts, reindeers) // 2
 console.log({ result });

/**
 * Puntos conseguidos: 171
 * 3477 ops/s
 * Complejidad ciclomática: 1
 * Mantenibilidad: 153%
 * 
 * @param {string[]} packOfGifts
 * @param {string[]}  reindeers
 * @return {Number}
 */
function distributeGifts(packOfGifts, reindeers) {
    return Math.floor(reindeers.reduce((prev, current) => prev + (current.length * 2), 0) / packOfGifts.reduce((prev, current) => prev + current.length, 0));
}