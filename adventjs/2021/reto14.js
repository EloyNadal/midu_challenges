
/* console.log(missingReindeer([0, 2, 3])); // -> 1
console.log(missingReindeer([5, 6, 1, 2, 3, 7, 0])) // -> 4
console.log(missingReindeer([0, 1])) // -> 2 (¡es el último el que falta!)
console.log(missingReindeer([3, 0, 1])) // -> 2
console.log(missingReindeer([9, 2, 3, 5, 6, 4, 7, 0, 1])) // -> 8
console.log(missingReindeer([0, 1, 2, 3, 4, 5])) // -> 1 (¡es el último el que falta!) */

let newIds = [];
for (let index = 0; index < 100; index++) {
  newIds[index] = index;
}

console.log(missingReindeer(newIds));

function missingReindeer(ids) {

  const notIncluded = ids.sort((a, b) => a - b).filter((value, index) => value !=index)[0] - 1;

  return isNaN(notIncluded) ? ids.length : notIncluded;
  
}