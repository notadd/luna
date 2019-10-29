require('dotenv').config();
export default () => ({
    host: process.env.COMMON_POSTGRES_HOST || '193.112.55.191',
    //host: process.env.COMMON_POSTGRES_HOST || 'localhost',
    port: parseInt(process.env.COMMON_POSTGRES_PORT || '5432', 10),
    database: process.env.COMMON_POSTGRES_DATABASE || 'zp',
    username: process.env.COMMON_POSTGRES_USER_NAME || 'magnus',
    password: process.env.COMMON_POSTGRES_PASSWORD || 'magnus',
    synchronize: !!process.env.COMMON_POSTGRES_SYNCHRONIZE || true
});
