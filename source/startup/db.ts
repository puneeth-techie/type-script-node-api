import config from '../config/config'
import logging from '../config/logging'
import mongoose from 'mongoose'

/** Namespace */
const NAMESPACE = 'MongoDB'

/** Connect to Monog */
const connectDB = async () => {
    try{
        const conn = await mongoose.connect(config.mongo.url, config.mongo.option)
        if(conn){
            logging.info(NAMESPACE, `Connected to the DB: ${conn.connection.host}`)
        }
    }catch(error){
        logging.error(NAMESPACE, `${error.message}`, error)
    }
}

export default connectDB;
