const withoudEnd = () => {
    while (true) {
        console.log('hello everybody')
    }
}

const fail = (message: string) => {
    throw new Error(message);
}

const example = (input: unknown) => {
    if (input === 'string') {
        return 'It is a string'
    }
}
