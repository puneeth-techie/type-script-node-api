import express from 'express'
import bookController from '../controllers/book'

/** init express router */
const router = express.Router();

/**
 * @method      POST /api/book
 * @access      Public
 * @desc        Adding a new book
 */
router.route('/').post(bookController.createBook)

/**
 * @method      GET /api/book
 * @access      Public
 * @desc        Fetching all books
 */
router.route('/').post(bookController.getAllBook)

export default router;