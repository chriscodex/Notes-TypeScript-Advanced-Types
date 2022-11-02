export const createProduct = (
    id: string | number,
    isNew?: boolean,
    stock?: number,
) => {
    return {
        id,
        stock: stock ?? 0,
        isNew: isNew ?? true
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

/* Problems can happen if we use | instead of ?
export const createProduct = (
    id: string | number,
    isNew?: boolean,
    stock?: number,
) => {
    return {
        id,
        stock: stock || 0,
        isNew: isNew || true
    }
}

Is js we have this behaviors
0 = false
'' = false
false = false
 */

const p1 = createProduct(1,true);
console.log(p1);

const p2 = createProduct(2);
console.log(p2);

const createProductV2 = (
    id: number | string,
    stock: number = 0,
    isNew: boolean = true
) => {
    return {
        id,
        stock,
        isNew
    }
}

const p3 = createProductV2(3);
console.log(p3);
