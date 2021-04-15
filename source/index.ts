import http from 'http'
import app from './startup/app';
import config from './config/config'
import logging from './config/logging'
import connectDB from './startup/db'

const NAMESPACE = 'Server';

/**Initializing the server */
const server = http.createServer(app)

/** Starting DB */
connectDB();

/**Starting server */
server.listen(config.server.port, () => {
    logging.info(NAMESPACE, `Server is running ${config.server.hostname}: ${config.server.port}`);
})