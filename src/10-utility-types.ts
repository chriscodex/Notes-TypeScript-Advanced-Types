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
