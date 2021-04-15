import { Document } from 'mongoose'

interface IBook extends Document {
    title: string;
    author: string
}

export default IBook;