checkSledJump([1, 2, 3, 2, 1]) // true: sube y baja de forma estricta
checkSledJump([0, 1, 0]) // -> true: sube y baja de forma estricta
checkSledJump([0, 3, 2, 1]) // -> true: sube y baja de forma estricta
checkSledJump([0, 1000, 1]) // -> true: sube y baja de forma estricta

checkSledJump([2, 4, 4, 6, 2]) // false: no sube de forma estricta
checkSledJump([1, 2, 3]) // false: sólo sube
checkSledJump([1, 2, 3, 2, 1, 2, 3]) // false: sube y baja y sube... ¡no vale!

function checkSledJump(heights) {

  const maxPosition = heights.indexOf(Math.max(...heights));

  let savePosition = -1;
  let position = 0;

  while (position <= maxPosition) {

    if (heights[position] <= savePosition) return false;

    savePosition = heights[position];
    position++;
  }

  if (position === heights.length) return false;

  while (position < heights.length) {

    if (heights[position] >= savePosition) return false;

    savePosition = heights[position];
    position++;

  }

  return true;
}