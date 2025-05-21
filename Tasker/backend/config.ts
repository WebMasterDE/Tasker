import dotenv from 'dotenv';


const dotEnv = dotenv.config();


if (!isValidDotEnv(dotEnv)) {
    process.exit(-1);
}
function isValidDotEnv(dotEnv: dotenv.DotenvConfigOutput): boolean {
    if (dotEnv.error) {
        console.log('\x1b[31m%s\x1b[0m', "Unable to load \".env\" file. Please provide one to store the JWT secret key");//red
        return false;
    }
    if (!process.env.JWT_SECRET) {
        console.log('\x1b[31m%s\x1b[0m', "\".env\" file loaded but JWT_SECRET=<jwt_secret> key-value pair was not found");//red
        return false;
    }
    if (!process.env.HOST) {
        console.log('\x1b[31m%s\x1b[0m', "\".env\" file loaded but HOST=<host> key-value pair was not found");//red
        return false;
    }
    if (!process.env.PORT) {
        console.log('\x1b[31m%s\x1b[0m', "\".env\" file loaded but PORT=<port> key-value pair was not found");//red
        return false;
    }
    if (!process.env.USER) {
        console.log('\x1b[31m%s\x1b[0m', "\".env\" file loaded but USER=<user> key-value pair was not found");//red
        return false;
    }
    if (!process.env.PASSWORD) {
        console.log('\x1b[31m%s\x1b[0m', "\".env\" file loaded but PASSWORD=<password> key-value pair was not found");//red
        return false;
    }
    if (!process.env.DB) {
        console.log('\x1b[31m%s\x1b[0m', "\".env\" file loaded but DB=<db> key-value pair was not found");//red
        return false;
    }
    if (!process.env.DBDIVEN) {
        console.log('\x1b[31m%s\x1b[0m', "\".env\" file loaded but DBDIVEN=<dbdiven> key-value pair was not found");//red
        return false;
    }
    return true;
};


interface Config {
    port: number;
    user: string;
    password: string;
    host: string;
    db: string;
    dbDiven: string;
    jwtSecret: string;
}

const config: Config = {
    port: Number(process.env.PORT),
    user: process.env.USER!,
    password: process.env.PASSWORD!,
    host: process.env.HOST!,
    db: process.env.DB!,
    dbDiven: process.env.DBDIVEN!,
    jwtSecret: process.env.JWT_SECRET!,
};//! non-null assertion operator

export default config;