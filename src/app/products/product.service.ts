import { Product} from './product.model'
import { CreateProductDto } from './product.dto'

export const product: Product[] = []

export const addProduct = (data: CreateProductDto) => {
    product.push(data)
}

export const updateProduct = (id: string, changes: Product) => {
    //code
}
