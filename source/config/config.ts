import dotenv from 'dotenv'

// init config
dotenv.config();

const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
const SERVER_PORT = process.env.SERVER_PORT || 5000;

// Server Object
const Server = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT
}

// Configuration object
const config = {
    server: Server
}

export default config;