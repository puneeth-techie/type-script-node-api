import dotenv from 'dotenv'

/** Dotenv configuration */
dotenv.config();

const SERVER_HOSTNAME: string = process.env.SERVER_HOSTNAME || 'localhost';
const SERVER_PORT: number | string = process.env.SERVER_PORT || 5000;
const NODE_ENV: string = process.env.NODE_ENV || 'development'

/** Server environments */
const Server = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT
}

/** Development environments */
const Development = {
    node_env: NODE_ENV
}

// Configuration object
const config = {
    server: Server,
    development: Development
}

export default config;