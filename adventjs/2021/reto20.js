console.log(pangram('Extraño pan de col y kiwi se quemó bajo fugaz vaho')); // true
console.log(pangram('Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!')); // true);
console.log(pangram('Esto es una frase larga pero no tiene todas las letras del abecedario')); // false
console.log(pangram('De la a a la z, nos faltan letras')); // false

console.log(pangram('aáäàAÁÀÄâÂbBcçÇCdDeéèêëEÉÈÊËfFgGhHiíìïîjklmnÑoóòôöpqrstuúùûüvwxyz')); // true


function pangram(letter) {

  const abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const withoutDiacritics = letter.normalize("NFKC").replace(/\p{Diacritic}/gu, "");

  return abc.every(char => withoutDiacritics.toLowerCase().includes(char));
}