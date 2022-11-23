const coins = [1, 2, 5, 10, 20, 50];


console.log(getCoins(51));
console.log(getCoins(3));
console.log(getCoins(5));
console.log(getCoins(16));
console.log(getCoins(100));

function getCoins(change) {

  let acumulate = 0;
  let moneyQunatity = [0, 0, 0, 0, 0, 0];
  
  for (let index = coins.length -1; index >= 0 ; index) {
    
    if (acumulate + coins[index] === change) {
      moneyQunatity[index]++;
      return moneyQunatity;
    } 
    
    if(acumulate + coins[index] < change) {  
      acumulate += coins[index];
      moneyQunatity[index]++;

    } else if(acumulate + coins[index] > change){
      index--;
    }

  }

  return moneyQunatity;

}