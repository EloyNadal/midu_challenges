

console.log(wrapGifts(["📷", "⚽️"]));
console.log(wrapGifts(["🏈🎸", "🎮🧸"]));
console.log(wrapGifts(["📷"]));
console.log(wrapGifts(["🏀"]));

 


function wrapGifts(gifts) {

  if(gifts.length == 0) return [];

  const longLine = gifts[0].length + 2;
  const wrappedGift = gifts.map((gift) => `*${gift}*`);

  return [
    ''.padStart(longLine, '*'),
    ...wrappedGift,
    ''.padStart(longLine, '*'),
  ];
}