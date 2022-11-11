interface EmployeeInterface {
    name: string,
    lastName: string,
    age: number,
    company: string
}

// Utility type Omit
// Permite omitir propiedades a las interfaces
type Person123 = Omit<EmployeeInterface,'company' | 'age'>

const ppp: Person123 = {
    name: 'Christian',
    lastName: 'Espinoza',
}

console.log(ppp);

// Utility type Pick
// Permite elegir propiedades de las interfaces
type Person321 = Pick<EmployeeInterface,'name' | 'age'>

const ppp2: Person321 = {
    name: 'Leonardo',
    age: 19
}

console.log(ppp2);
