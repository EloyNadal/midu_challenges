
const gifts = ['book', 'game', 'socks']
const wrapped = wrapping(gifts)
console.log(wrapped)

/* [
     "******\n*book*\n******",
     "******\n*game*\n******",
     "*******\n*socks*\n*******"
   ] */


function wrapping(gifts) {
    return gifts.map(gift => {
        const wrapp = "".padStart(gift.length + 2, "*")
        return `${wrapp}\n*${gift}*\n${wrapp}`
    })
}