// Enum goes with capital letter
enum ROLES {
    ADMIN = 'admin',
    SELLER = 'seller',
    COSTUMER = 'costumer'
}

type User = {
    username: string;
    role: ROLES;
}

const christUser : User = {
    username: 'chriscodex',
    role: ROLES.ADMIN
}
