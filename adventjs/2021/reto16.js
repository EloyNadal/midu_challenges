

decodeNumbers('...') // 3
decodeNumbers('.,') // 4 (5 - 1)
decodeNumbers(',.') // 6 (5 + 1)
decodeNumbers(',...') // 8 (5 + 3)
decodeNumbers('.........!') // 107 (1 + 1 + 1 + 1 + 1 + 1 + 1 - 1 + 100)
decodeNumbers('.;') // 49 (50 - 1)
decodeNumbers('..,') // 5 (-1 + 1 + 5)
decodeNumbers('..,!') // 95 (1 - 1 - 5 + 100)
decodeNumbers('.;!') // 49 (-1 -50 + 100)
decodeNumbers('!!!') // 300
decodeNumbers(';!') // 50
decodeNumbers(';.W') // NaN

function decodeNumbers(symbols) {

  const codification = {
    '.': 1,
    ',': 5,
    ':': 10,
    ';': 50,
    '!': 100,
  }

  const regex = new RegExp(Object.keys(codification).join('|'), 'gi');

  return symbols.split('')
    .map(symbol => symbol.replace(regex, m => codification[m]))
    .reduce((acc, currentValue, currentIndex, array) => {
      
      const nextValue = array[currentIndex + 1] || 0;
      
      if(parseInt(currentValue) >= parseInt(nextValue)){
        return acc + parseInt(currentValue);
      }
      
      return acc - currentValue;

    }, 0);
}