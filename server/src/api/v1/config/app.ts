import * as dotenv from 'dotenv';
dotenv.config();

export const config = {
    jwt: {
        secret: process.env.JWT_SECRET || 'secret',
        expiresIn: process.env.JWT_EXPIRES_IN || '1h'
    },
    prefix: process.env.API_PREFIX ||'api',
    port: process.env.PORT || 3000,
 
}