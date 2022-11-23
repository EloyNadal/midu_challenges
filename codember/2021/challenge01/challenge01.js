const input = `
usr:@midudev eme:mi@gmail.com psw:123456 age:22 loc:bcn fll:82

fll:111 eme:yrfa@gmail.com usr:@codember psw:123456 age:21 loc:World

psw:11133 loc:Canary fll:333 usr:@pheralb eme:pheralb@gmail.com

usr:@itziar age:19 loc:isle psw:aaa fll:222 eme:itzi@gmail.com

usr:@itziar age:19 loc:isle psw:aaa fll:222 
eme:itzi@gmail.com
`;

function validUsers(input) {
    const VALID_KEYS = ["usr", "eme", "psw", "age", "loc", "fll"];
    const EMPTY_LINE = "";
    const isValidUser = (user) => VALID_KEYS.every((key) => user.includes(key));

    const users = [];
    let user = "";
    input.split('\n').forEach((line) => {

        if (line !== EMPTY_LINE) {
            user += line;
        } else {
            if (isValidUser(user)) {
                users.push(user);
            }
            user = "";
        }
    });

    return users;
}

const result = validUsers(input);
console.log(result);
console.log(result.length);

