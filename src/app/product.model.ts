export type Sizes = 'S' | 'M' | 'L' | 'XL'

export interface Product {
    id: userId
    title: string
    createdAt: Date
    stock: number
    size: Sizes
}
