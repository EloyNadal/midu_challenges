const tree = {
  value: 1,
  left: { value: 2, left: null, right: null },
  right: { value: 3, left: null, right: null }
}

console.log(checkIsSameTree(tree, tree)) // true

const tree2 = {
  value: 1,
  left: { value: 3, left: { value: 2, left: null, right: null }, right: null },
  right: { value: 5, left: null, right: { value: 4, left: null, right: null } }
}

console.log(checkIsSameTree(tree, tree2)) // false
console.log(checkIsSameTree(tree2, tree2)) // true

function checkIsSameTree(treeA, treeB) {

  const { value: valueA, left: leftA, right: rightA } = treeA;
  const { value: valueB, left: leftB, right: rightB } = treeB;

  if (valueA !== valueB) return false;

  let result = true;
  if (leftA !== null && leftB !== null) {
    result = checkIsSameTree(leftA, leftB);
  }

  if(!result) return false;

  if (rightA !== null && rightB != null) {
    result = checkIsSameTree(rightA, rightB);
  }

  return result;
}
