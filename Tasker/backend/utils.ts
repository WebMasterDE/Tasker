import dotenv from 'dotenv';




export const isValidDotEnv = (dotEnv: dotenv.DotenvConfigOutput): boolean => {
    if (dotEnv.error) {
        console.log('\x1b[31m%s\x1b[0m', "Unable to load \".env\" file. Please provide one to store the JWT secret key");//red
        return false;
    }
    if (!process.env.JWT_SECRET) {
        console.log('\x1b[31m%s\x1b[0m', "\".env\" file loaded but JWT_SECRET=<secret> key-value pair was not found");//red
        return false;
    }
    if (!process.env.DB_NAME_PORTALE_CONDOMINIO && !process.env.USERNAME_DB && !process.env.PW_DB && !process.env.DB_HOST) {
        console.log('\x1b[31m%s\x1b[0m', "\".env\" file loaded but DB_NAME_PORTALE_CONDOMINIO=<db_name>, USERNAME_DB=<db_username>, PW_DB=<password>, DB_HOST=<db_host> key-value pair was not found");//red
        return false;
    }
    return true;
};