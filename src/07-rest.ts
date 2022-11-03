import {ROLES, User} from './01-enum'

const currentUser: User = {
    username: 'chriscodex',
    role: ROLES.COSTUMER
}

// This function can receive multiple
export const checkRoles = (...roles: string[]) => {
    if (roles.includes(currentUser.role)) {
        return true;
    }
    return false
}

console.log(checkRoles(ROLES.ADMIN, ROLES.SELLER, ROLES.COSTUMER));
