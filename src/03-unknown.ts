// Any Type
let anyVar: any;
anyVar = 1;
anyVar = 'str';
anyVar = true;
anyVar = null;
anyVar = [];
anyVar = {};

let isNew : boolean = anyVar;

anyVar.doSomething();
anyVar.asdf();

// Unknown Type
let unknownVar : unknown;
unknownVar = true;
unknownVar = 1;
unknownVar = 'hello';
unknownVar = null;
unknownVar = [];
unknownVar = {};
