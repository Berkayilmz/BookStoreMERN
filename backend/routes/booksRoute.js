import express from "express";
import { Book } from "../models/bookModel.js";

const router=express.Router();

//Route for Save a Book
router.post('/', async (req, res) => {
    try {
        if (!req.body.title || !req.body.author || !req.body.publishYear) {
            return res.status(400).send({
                message: 'Send all required fields!'
            })
        }
        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear,
        };

        const book = await Book.create(newBook);
        return res.status(201).send(book);

    } catch (error) {
        console.log(error.message);
        res.status(500).send({ err: error.message });
    }
})

router.delete('/:id', async (req,res)=>{
    try {
        const {id}=req.params;
        const deletedBook= await Book.findById(id);
        const result=await Book.findByIdAndDelete(id);
        if(!result){
            return res.status(404).json({message: 'Book is not found!'});
        }
        res.status(200).json(deletedBook);
    } catch (error) {
        res.status(404).json({error:error.message})
    }
})

//Route for Get all books from db
router.get('/', async (req, res) => {
    try {
        const books = await Book.find({});
        return res.status(200).json({
            data: books
        });
    } catch (error) {
        res.status(404).send({ error: error.message })
    }
})

//Route for get book from db by id
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findById(id);
        return res.status(200).send(book);
    } catch (error) {
        res.status(404).send({ message: 'Book is not found!' });
    }
})

//Route for update a book 
router.put('/:id', async (req, res) => {
    try {
        if (!req.body.title || !req.body.author || !req.body.publishYear) {
            return res.status(400).send({
                message: 'Send all required fields!'
            })
        }
        const {id}=req.params;
        const result=await Book.findByIdAndUpdate(id,req.body);
        if(!result){
            return res.status(404).json({message:'Book is not found!'});
        }else{
            return res.status(200).send({message:'Book updated succesfully'});
        }
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
})

export default router;