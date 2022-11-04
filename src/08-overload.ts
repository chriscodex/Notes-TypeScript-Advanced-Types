
export type customType = string | string[]

function parseStr(input: string): string[];
function parseStr(input: string[]): string;

function parseStr(input: unknown) : unknown {
    if (typeof input === 'string') {
        return input.split('')
    } else if (Array.isArray(input)){
        return input.join('')
    }
}

const rta = parseStr('christ');
console.log(rta);

const rta2 = parseStr(['c','h','r','i','s']);
console.log(rta2);

// Other way using type
function parseStrV2(input: customType) : customType {
    if (typeof input === 'string') {
        return input.split('')
    }
    return input.join('')
}
const rta3 = parseStrV2('christ');
console.log(rta3);

const rta4 = parseStrV2(['c','h','r','i','s']);
console.log(rta4);

