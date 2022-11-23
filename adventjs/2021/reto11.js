// Entrada normal: 12 * 3 = 36
// Tarjeta fidelidad: 250$ + (12$ * 0.75) +  (12$ * 0.75 * 0.75) + (12$ * 0.75 * 0.75 * 0.75) = 270.8125$

console.log(250 + (12 * 0.75) +  (12 * 0.75 * 0.75) + (12 * 0.75 * 0.75 * 0.75));

console.log(shouldBuyFidelity(1));
console.log(shouldBuyFidelity(3));
console.log(shouldBuyFidelity(100));

function shouldBuyFidelity(times) {

  const ticketPriece = 12;
  const discount = 0.75;
  
  const normal = ticketPriece * times;

  let fidelidad = 250;
  for (let index = 1; index <= times; index++) {
    fidelidad += (ticketPriece * Math.pow(discount, index));  
  }

  //return {fidelidad, normal};
  return fidelidad < normal;
}