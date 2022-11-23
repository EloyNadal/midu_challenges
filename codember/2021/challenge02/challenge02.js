const encryptMessage = "11610497110107115 102111114 11210897121105110103 9911110010110998101114 11210810197115101 11510497114101";
const encrypt2 = "115111109111115 108101103105111110";
const encript3 = "83101 113117105101110 101114101115 84101 9911111011112299111 84117 110111 109101 9911111011199101115 97 109105 84101 101115116111121 1119811510111411897110100111 84101 101115116111121 115105103117105101110100111 81117105101114101115 10611710397114 7411710110397 99111110109105103111 8697108101 8697109111115 97 10611710397114 691061019911711697 101115116101 9911110997110100111 101110 10897 11610111410910511097108 11511798109105116 116561181061045651505752561029911097108";

const docodeWords = encript3
    .split(" ")
    .map((word) => decodeAsciiWord(word))
    .join(" ");

console.log(docodeWords);

/**
 * 
 * @param {string} word
 * @returns {array} 
 */
function decodeAsciiWord(word) {

    const MAX_ASCII_CODE = 122;
    const asciiCodes = [];
    let ascii = '';

    [...word].forEach((char, index, array) => {
        const concat = ascii.concat(char);

        if (parseInt(concat) > MAX_ASCII_CODE) {
            asciiCodes.push(ascii);
            ascii = char;
        }
        else {
            ascii = concat;
        }

        if (index === array.length - 1) {
            asciiCodes.push(ascii);
        }
    });

    return String.fromCharCode(...asciiCodes);
}