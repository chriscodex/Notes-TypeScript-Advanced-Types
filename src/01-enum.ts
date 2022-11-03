// Enum goes with capital letter
export enum ROLES {
    ADMIN = 'admin',
    SELLER = 'seller',
    COSTUMER = 'costumer'
}

export type User = {
    username: string;
    role: ROLES;
}

const christUser : User = {
    username: 'chriscodex',
    role: ROLES.ADMIN
}
