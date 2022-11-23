/** 
 * Con la emoción, ya estamos empezando a contar los días del calendario hasta el 25 de diciembre 📆.
 * Para ayudar a esto, vamos a crear una función que pasándole una instancia de Date nos diga el número de días que faltan.
 * */

 /**
  * El resultado tiene que ser un número entero y, como ves, aunque falte un segundo hasta el siguiente día, se entiende que todavía falta un día.
  * ¡Pero ojo! También hay que indicar si la fecha es del mismo día (devolveríamos 0) o si es una fecha futura (devolveríamos el número de días en negativo -): */


console.log(daysToXmas(new Date('Dec 25, 2021'))) // 0
console.log(daysToXmas(new Date('Dec 23, 2021'))) // 2
console.log(daysToXmas(new Date('Dec 26, 2021'))) // -1
console.log(daysToXmas(new Date('Dec 31, 2021'))) // -6
console.log(daysToXmas(new Date('Jan 1, 2022 00:00:01'))) // -7
console.log(daysToXmas(new Date('Jan 1, 2022 23:59:59'))) // -7
console.log(daysToXmas(new Date('Dec 1, 2021'))) // 24
console.log(daysToXmas(new Date('Dec 24, 2021 00:00:01'))) // 1
console.log(daysToXmas(new Date('Dec 24, 2021 23:59:59'))) // 1
console.log(daysToXmas(new Date('December 20, 2021 03:24:00'))) // 5

function daysToXmas(date) {

    const referenceDate = 'Dec 25, 2021';

    const dateFormat = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;

    const differenceInMs   = new Date(referenceDate) - new Date(dateFormat)
    
    return (differenceInMs / (1000 * 60 * 60 * 24));
  }



