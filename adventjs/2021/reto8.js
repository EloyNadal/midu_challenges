const pricesBtc = [39, 18, 29, 25, 34, 32, 5]

//maxProfit(pricesBtc) // -> 16 (compra a 18, vende a 34)

const pricesEth = [10, 20, 30, 40, 50, 60, 70]  
//maxProfit(pricesEth) // -> 60 (compra a 10, vende a 70)

const goodPrice = (prices) => {
  return prices.reduce((previusValue, currentValue, currentIndex, array) => {

    let temporal = previusValue;
    if(previusValue > currentValue){
      temporal = currentValue;
    }

    if(Math.max(...array.slice(currentIndex)) > temporal){
      return temporal
    }

    return previusValue;
  })
}

function maxProfit(prices) {

  const minValue = goodPrice(prices);
  
  const dayPosition = prices.indexOf(minValue);

  const maxValue = Math.max(...prices.slice(dayPosition));

  const result =  maxValue - minValue;

  if(result > 0){
    return result;  
  }

  return -1;
}

console.log(maxProfit(pricesBtc), maxProfit(pricesEth))
console.log(maxProfit([3, 3, 3]), maxProfit([18, 15, 12, 11, 9, 7]))