type Sizes = 'S' | 'M' | 'L' | 'XL'

type Products = {
    id: string | number
    title: string
    createdAt: Date
    stock: number
    size: Sizes
}
