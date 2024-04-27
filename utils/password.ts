import bcrypt from 'bcryptjs';

export const saltAndHashPassword = (password: string): string => {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    return hash;
}