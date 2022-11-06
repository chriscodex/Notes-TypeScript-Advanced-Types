import { Product } from "../products/product.model";
import { User } from "../../01-enum";

export interface Order {
    id: string | number
    createdAt: Date
    products: Product[]
    user: User
}
