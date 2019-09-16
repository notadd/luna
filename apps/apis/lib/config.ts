require('dotenv').config();
export default () => ({
    host: process.env.COMMON_POSTGRES_HOST || 'localhost',
    //host: process.env.COMMON_POSTGRES_HOST || 'localhost',
    port: parseInt(process.env.COMMON_POSTGRES_PORT || '5432', 10),
    database: process.env.COMMON_POSTGRES_DATABASE || 'postgres',
    username: process.env.COMMON_POSTGRES_USER_NAME || 'postgres',
    password: process.env.COMMON_POSTGRES_PASSWORD || 'password',
    synchronize: !!process.env.COMMON_POSTGRES_SYNCHRONIZE || true
});
