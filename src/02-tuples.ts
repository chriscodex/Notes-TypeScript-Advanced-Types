// Array
const prices : (number | string)[] = [1,2,3, 'four'];
prices.push(5);

// Tuple
let user : [string, number, boolean];
user = ['christian', 1, true];

/* Invalid Options */
// user = [];
// user = ['christ'];
// user = ['christ',2, true, 2]

const user2: [string] = ['hi']

/* Destructuración de una tupla */
// Asignación de variables
const [username, age] = user;
console.log(username);
console.log(age);
