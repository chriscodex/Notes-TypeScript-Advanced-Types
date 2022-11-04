
export type customType = string | string[]

function parseStr(input: string): string[];
function parseStr(input: string[]): string;

function parseStr(input: unknown) : unknown {
    if (typeof input === 'string') {
        return input.split('')
    } else if (Array.isArray(input)){
        input.join('')
    }
}

const rta = parseStr('christ');
console.log(rta);

const rta2 = parseStr(['c','h','r','i','s']);
console.log(rta2);

// Other way using type
function parseStrV2(input: string | string[]) : unknown {
    if (typeof input === 'string') {
        return input.split('')
    }
    return input.join('')
}

