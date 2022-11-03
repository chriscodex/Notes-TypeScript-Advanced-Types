// TypeScript mode
export const createProductV2 = (
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
