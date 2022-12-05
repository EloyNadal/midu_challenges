const year = 2022
const holidays = ['01/06', '04/01', '12/25'] // formato MM/DD
/* Cosas a tener en cuenta y consejos:
El año puede ser bisiesto. Haz las comprobaciones que necesitas para ello, si fuese necesario.
Aunque el 31 de diciembre sea festivo, las horas extra se harán el mismo año y no el siguiente.
El método Date.getDay() te devuelve el día de la semana de una fecha. El 0 es domingo, el 1 es lunes, etc.
 */

// 01/06 es el 6 de enero, jueves. Cuenta.
// 04/01 es el 1 de abril, un viernes. Cuenta.
// 12/25 es el 25 de diciembre, un domingo. No cuenta.

//sabado y domingo: 6 y 0
console.log(countHours(year, holidays)) // 2 días -> 4 horas extra en el año

function countHours(year, holidays) {
    return holidays.reduce((a, b) => new Date(`${b} ${year}`).getDay() % 6 ? a + 2 : a, 0)
}

