

console.log(getMinJump([5, 3, 6, 7, 9])); //4
console.log(getMinJump([2, 4, 6, 8, 10])); //7
console.log(getMinJump([1, 2, 3, 5])); //4
console.log(getMinJump([3, 7, 5])); //2
console.log(getMinJump([9, 5, 1])); //2

// S es salto, X es obstáculo
/* Así quedaría la representación:
0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
.  .  .  X  .  X  X  X  .  X  . 
S-----------S-----------S-------
*/

/**
 * 
 * @param {Array} obstacles 
 * @returns 
 */
function getMinJump(obstacles) {

    const maxPosition = Math.max(...obstacles);
    
    for (let index = 1; index <= maxPosition; index++) {
      
      let jump = 0;

      do {
        jump += index;
      } while (!obstacles.includes(jump) && jump < maxPosition);
      
      if(jump > maxPosition) return index;
      
    }

}