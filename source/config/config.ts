import dotenv from 'dotenv'

/** Dotenv configuration */
dotenv.config();

/**Mongoose options */
const MONGO_OPTIONS = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    socketTimeoutMS: 30000,
    keepAlive: true,
    poolSize: 50,
    autoIndex: false,
    retryWrites: false
}

/**MonogDB configuration */
const MONGO_USERNAME = process.env.MONGO_USERNAME;
const MONGO_PASSWORD = process.env.MONGO_USERNAME;
const MONGO_URL = process.env.MONGO_URL || 'Undefined';

/**Server configuration */
const SERVER_HOSTNAME: string = process.env.SERVER_HOSTNAME || 'localhost';
const SERVER_PORT: number | string = process.env.SERVER_PORT || 5000;

/**Development configuration */
const NODE_ENV: string = process.env.NODE_ENV || 'development'

/**MongoDB environment */
const Mongo = {
    username: MONGO_USERNAME,
    password: MONGO_PASSWORD,
    url: MONGO_URL,
    option: MONGO_OPTIONS
}

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
    development: Development,
    mongo: Mongo
}

export default config;