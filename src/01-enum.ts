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
