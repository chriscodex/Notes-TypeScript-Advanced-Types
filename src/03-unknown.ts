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

const parse = (str: string) => {
    return JSON.parse(str);
}
