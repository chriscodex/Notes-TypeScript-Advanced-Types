import { faker } from '@faker-js/faker'
import { Product} from './product.model'
import { CreateProductDto } from './product.dto'

export const product: Product[] = []

export const addProduct = (data: CreateProductDto) => {
    const newProduct = {
        ...data,
        id:
    }
    product.push(data)
}

export const updateProduct = (id: string, changes: Product) => {
    //code
}
