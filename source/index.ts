import http from 'http'
import app from './startup/app';
import config from './config/config'
import logging from './config/logging'

const NAMESPACE = 'Server';

/**Initializing the server */
const server = http.createServer(app)

/**Starting server */
server.listen(config.server.port, () => {
    logging.info(NAMESPACE, `Server is running ${config.server.hostname}: ${config.server.port}`);
})