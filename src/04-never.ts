const withoudEnd = () => {
    while (true) {
        console.log('hello everybody')
    }
}

const fail = (message: string) => {
    throw new Error(message);
}

// Check if a type is an array
const example = (input: unknown) => {
    if (input === 'string') {
        return 'It is a string'
    } else if (Array.isArray(input)) {
        return 'It is an array'
    }
    fail('Not match');
}

example('hello');
