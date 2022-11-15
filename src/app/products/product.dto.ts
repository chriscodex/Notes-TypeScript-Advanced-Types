import { Product } from "./product.model";

export interface CreateProductDto extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
    categoryId: string
}

export interface UpdateProductDto extends Partial<CreateProductDto> {

}

// Readonly case
export interface FindProduct extends Readonly<Partial<Omit<Product, 'tags'>>> {

}
