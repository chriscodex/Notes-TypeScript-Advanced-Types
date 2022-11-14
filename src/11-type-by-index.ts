interface PersonExample {
    name: string,
    lastName: string,
    age: number
}

const foo1 = (n1: Person['name']) => {
    console.log(typeof n1);
}
