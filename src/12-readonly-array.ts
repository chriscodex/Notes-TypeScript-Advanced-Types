// Readonly
// No permitir las mutaciones de un array
const numbers: Readonly<number[]> = [1,2,3,4,5]

// Can't use
// numbers.push(9)
// numbers.pop()
// numbers.unshift(1)
