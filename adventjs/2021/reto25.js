const room = [
  [' ', ' ', ' '],
  [' ', ' ', 'm'],
  [' ', ' ', '*']
]

console.log(canMouseEat('up', room)) // false
console.log(canMouseEat('down', room)) // true
console.log(canMouseEat('right', room)) // false
console.log(canMouseEat('left', room)) // false

const room2 = [
  ['*', 'm', ' ', ' '],
  /* [' ', 'm', '*', ' '],
  [' ', ' ', ' ', ' '],
  [' ', ' ', ' ', '*'] */
]

console.log(canMouseEat('up', room2)) // false
console.log(canMouseEat('down', room2)) // false
console.log(canMouseEat('right', room2)) // true
console.log(canMouseEat('left', room2)) // false


/**
 * 
 * @param {string} direction 
 * @param {Array} game 
 */
function canMouseEat(direction, game) {

  const directions = {
    up: (array, x, y) => array[y - 1] && array[y - 1][x] === '*' || false,
    down: (array, x, y) => array[y + 1] && array[y + 1][x] === '*' || false,
    left: (array, x, y) => array[y][x - 1] === '*' || false,
    right: (array, x, y) => array[y][x + 1] === '*' || false
  }

  for (let y = 0; y < game.length; y++) {

    for (let x = 0; x < game[y].length; x++) {

      if (game[y][x] === 'm') {

        return directions[direction](game, x, y);

      }

    }

  }



}