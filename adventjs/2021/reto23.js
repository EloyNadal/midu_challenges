console.log(canReconfigure('BAL', 'LIB')) // true
/* la transformación sería así:
B -> L
A -> I
L -> B
*/

console.log(canReconfigure('CON', 'JUU')) // false
/* no se puede hacer la transformación:
C -> J
O -> U
N -> FALLO
*/

const from = 'MMM'
const to   = 'MID'
console.log(canReconfigure(from, to)) // false
/* no se puede hacer la transformación:
M -> M (BIEN, asigna el mismo carácter a si mismo)
M -> I (FALLO, asigna el mismo carácter a dos letras distintas)
M -> D (FALLO, asigna el mismo carácter a dos letras distintas)
*/
console.log(canReconfigure('AA', 'MID')) // false -> no tiene la misma longitud


/**
 * 
 * @param {string} from 
 * @param {string} to 
 */
function canReconfigure(from, to) {
  
  if(from.length !== to.length) return false;

  const formArray = new Set(from.split(''));
  const toArray = new Set(to.split(''));

  if(formArray.size !== toArray.size) return false;

  return true;
 }