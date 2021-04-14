import { Request, Response, NextFunction} from 'express'
import logging from '../config/logging'
import createError from 'http-errors'
import config from '../config/config'

const NAMESPACE: string = 'development'

/** Page Not Found handler */
const notFound = (req: Request, res: Response, next: NextFunction) => {
    const error = new createError.NotFound('Page not found.')
    next(error); 
}

/** All request pipeline error handler */
const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    const statusCode = res.statusCode | 500;
    res.status(statusCode).json({
        Error: {
            message: err.message,
            stack: config.development.node_env === 'development' ? err.stack : null 
        }
    })
    logging.error(NAMESPACE, `METHOD: [${req.method}] - URL: [${req.url}] - STATUS: [${req.statusCode}] - IP: [${req.socket.remoteAddress}]`)
}

export {notFound, errorHandler}