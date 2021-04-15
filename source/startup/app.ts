import express from 'express'
import logging from '../config/logging';
import {notFound, errorHandler} from '../middlewares/errorHandler'
import bookRoute from '../routes/book'

/** Init express */
const app = express()
const NAMESPACE = 'Server'

/** Log the request handler info */
app.use((req, res, next) => {
    /** Log the req */
    logging.info(NAMESPACE, `METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`);
    res.on('finish', () => {
        /**Log the res */
        logging.info(NAMESPACE, `METHOD: [${req.method}] - URL: [${req.url}] - STATUS: [${req.statusCode}] - IP: [${req.socket.remoteAddress}]`)
    })
    next()
})

/** Parse the body of the request */
app.use(express.urlencoded({extended: true}))
app.use(express.json())

/** Rules of our API */
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    if (req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }

    next();
});


/** Routes handler */
app.use('/api/book', bookRoute);


/** Error handler */
app.use(notFound)
app.use(errorHandler)

export default app;