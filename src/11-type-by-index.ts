interface PersonExample {
    name: string,
    lastName: string,
    age: number
}

// index of PersonExample interface used as type
const foo1 = (n1: Person['name']) => {
    console.log(typeof n1);
}

foo1('Christian');
