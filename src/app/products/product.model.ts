import { Category } from '../categories/category.model'
import { BaseModel } from '../base.model'

export type Sizes = 'S' | 'M' | 'L' | 'XL'

export interface Product {
    id: string | number
    title: string
    createdAt: Date
    stock: number
    size: Sizes
    category: Category
}
