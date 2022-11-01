// Any Type
let anyVar: any;
anyVar = 1;
anyVar = 'str';
anyVar = true;
anyVar = null;
anyVar = [];
anyVar = {};

/* It is possible to invoke inexistent functions */
// let isNew : boolean = anyVar;

// anyVar.doSomething();
// anyVar.asdf();

// Unknown Type
let unknownVar : unknown;
unknownVar = true;
unknownVar = 1;
unknownVar = 'hello';
unknownVar = null;
unknownVar = [];
unknownVar = {};

// Unknown type needs to verify the type
unknownVar = 'Hello friends'
if (typeof unknownVar === 'string') {
    console.log(unknownVar.toLowerCase());
}

// For assignament the unknown variable needs to be verified
if (typeof unknownVar === 'string') {
    let isNewV2 = unknownVar;
}

const parse = (str: string) => {
    return JSON.parse(str);
}

// If i dont know what will be returned
// Not recomendable but if i want to use any, i should prefer to user unknows

const parseV2 = (str: string): unknown => {
    return JSON.parse(str);
}
