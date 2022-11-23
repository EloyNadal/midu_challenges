canCarry(4, [[2, 5, 8], [3, 6, 10]]) // false
// En el punto 5 recoge 2 regalos...
// En el punto 6 recoge 3 regalos...
// Del punto 6 al 8 tendría 5 regalos en total
// Y su capacidad es 4... así que ¡no podría!

canCarry(3, [[1, 1, 5], [2, 2, 10]]) // true
// En el punto 1 recoge 1 regalo...
// En el punto 2 recoge 2 regalos...
// En el punto 5 entrega 1 regalo...
// En el punto 10 entrega 2 regalos...
// ¡Sí puede! Nunca superó la carga máxima de 3 regalos

canCarry(3, [[2, 1, 5],[3, 5, 7]]) // true -> nunca supera el máximo de capacidad
canCarry(4, [[2, 3, 8],[2, 5, 7]]) // true -> del punto 5 al 7 lleva 4 regalos y no supera el máximo

canCarry(1, [[2, 3, 8]]) // false -> no podría ni con el primer viaje
canCarry(2, [[1, 2, 4], [2, 3, 8]]) // false -> del punto 3 al 4 supera la capacidad máxima porque llevaría 3 regalo
/* trip[0] = número de regalos a transportar
trip[1] = punto de recogida de los regalos
trip[2] = punto de entrega de los regalos */

/**
 * 
 * @param {Number} capacity 
 * @param {Array} trip 
 * @returns 
 */
function canCarry(capacity, trip) {

  const initialPosition = trip[0][1];
  const finalPosition = trip[trip.length -1][2];
  let actualPosition = initialPosition;
  let saca = 0;
  let tempTrip = [];

  while (actualPosition <= finalPosition && saca <= capacity) {

    tempTrip = trip.filter(([, recogidas]) => recogidas === actualPosition)[0];

    saca += (tempTrip && tempTrip[0]) ?? 0;

    tempTrip = trip.filter(([, , entregas]) => entregas === actualPosition)[0];

    saca -= (tempTrip && tempTrip[0]) ?? 0;

    actualPosition++;
  }

  if(saca <= capacity){
    return true;
  } 
  
  return false;

}