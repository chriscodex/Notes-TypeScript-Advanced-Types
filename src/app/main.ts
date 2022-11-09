import {faker} from '@faker-js/faker'
import {Product} from './products/product.model'

const p1: Product = {
    id: faker.datatype.uuid(),
    title: 'p1',
    createdAt: new Date(),
    updatedAt: new Date(),
    stock: 4,
    size: 'S',
    category: {
        id: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
        name: 'clothes'
    }
}

console.log(p1)
