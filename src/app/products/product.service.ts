import { Product} from './product.model'

export const product: Product[] = []

export const addProduct = (data: Product) => {
    product.push(data)
}
