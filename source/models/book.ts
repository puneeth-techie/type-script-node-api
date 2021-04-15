import mongoose, { Schema } from 'mongoose'
import IBook from '../interfaces/book';

const BookSchema: Schema = new Schema({
    title: {type: String, minlength: 5, maxlength: 20, required: true},
    author: {type: String, minlength: 5, maxlength: 20, required: true}
}, { timestamps: true})

export default mongoose.model<IBook>('Book', BookSchema);