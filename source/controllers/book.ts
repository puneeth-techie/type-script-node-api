import { Request, Response, NextFunction} from 'express'
import createError from 'http-errors'
import Book from '../models/book'

/**
 * @access      Public
 * @description Creating a book.
 */
const createBook = async (req: Request, res: Response, next: NextFunction) => {
    try{
        let {title, author} = req.body;
        const book = new Book({
            title,
            author
        })
        await book.save();
        res.status(200).send(book)
    }catch(error){
        next(error)
    }
}

/**
 * @access      Public
 * @description Fetching all book.
 */
const getAllBook = async (req: Request, res: Response, next: NextFunction) => {
    try{
        const books = await Book.find();
        if(books){
            res.status(200).send(books)
        }else{
            throw new createError.BadRequest('No Books available.')
        }
    }catch(error){
        next(error)
    }
}

export default { createBook, getAllBook}