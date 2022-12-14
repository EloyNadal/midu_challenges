const files = ['photo', 'postcard', 'photo', 'photo', 'video']
console.log(fixFiles(files)); // ['photo', 'postcard', 'photo(1)', 'photo(2)', 'video']

const files2 = ['file', 'file', 'file', 'game', 'game']
console.log(fixFiles(files2)); // ['file', 'file(1)', 'file(2)', 'game', 'game(1)']

// ojo que los elfos ya tenían archivos con (1)... ¡y pueden estar repetidos!
const files3 = ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)']
console.log(fixFiles(files3)) // ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)(1)']

function fixFiles(files) {

  let newArray = [];
  files.forEach((file, index) => {

    let add = '';
    if (newArray.includes(file)) {
      add = `(${files.filter((newFile, indexFilter) => newFile == file && indexFilter < index).length})`;
    }

    newArray.push(file+add);
  });

  return newArray;
}