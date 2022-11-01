const withoudEnd = () => {
    while (true) {
        console.log('hello everybody')
    }
}

// Throw an error
const fail = (message: string) => {
    throw new Error(message);
}

// Check if a type is an array
const example = (input: unknown) => {
    if (typeof input === 'string') {
        return 'It is a string'
    } else if (Array.isArray(input)) {
        return 'It is an array'
    }
    return fail('not match');
}

console.log(example('hello'))
console.log(example([1,2,3]));
console.log(example(4));
console.log(example('hello again'));
