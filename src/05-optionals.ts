export const createProduct = (
    id: string | number,
    isNew: boolean,
    stock?: number,
) => {
    return {
        id,
        stock,
        isNew
    }
}

/* Optinals parameters always are the last parameter
This example is not possible
export const createProduct = (
    id: string | number,
    stock?: number,
    isNew: boolean
) => {
    return {
        id,
        stock,
        isNew
    }
}
 */

const p1 = createProduct(1,true);
console.log(p1);
// Output { id: 1, stock: undefined, isNew: true }
