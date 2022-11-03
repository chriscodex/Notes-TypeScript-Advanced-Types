// Javscript mode
export const createProduct = (
    id: string | number,
    isNew?: boolean,
    stock?: number,
) => {
    return {
        // To avoid error we use nullish-coalescing (??) instead of (||)
        id,
        stock: stock ?? 0,
        isNew: isNew ?? true
    }
}

const p1 = createProduct(1,true);
console.log(p1);

const p2 = createProduct(2);
console.log(p2);
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
