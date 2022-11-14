import { Product } from "./product.model";

export interface CreateProductDto extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
    categoryId: string
}

export interface UpdateProductDto extends Partial<CreateProductDto> {

}

export interface FindProduct extends Partial<Product> {

}
