
type customType = string | string[]

function parseStr(input: string): string[];
function parseStr(input: string[]): string;

function parseStr(input: string | string[]) : unknown {
    if (typeof input === 'string') {
        return input.split('')
    }
    return input.join('')
}

const rta = parseStr('christ');
console.log(rta);

const rta2 = parseStr(['c','h','r','i','s']);
console.log(rta2);

