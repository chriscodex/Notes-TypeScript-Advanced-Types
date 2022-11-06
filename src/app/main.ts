import { Product} from './products/product.model'

const p1: Product = {
    id: '1',
    title: 'p1',
    createdAt: new Date(),
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
