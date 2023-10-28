import express from 'express';
const commentsRouter = express.Router();
import Comment from '../models/Comment.js';

commentsRouter.get("/", async (req, res) => {
    try {
      const response = await Comment.find();
      res.json(response)

    } catch(err){
        res.status(500).json(err)
    }
})

commentsRouter.get("/:id", async (req, res) => {
    const {id} = req.params;

    try {
        const response = await Comment.find({restaurantId:id});
        if(!response.length){
            res.json({message: `This restaurants has no comments yet`})}
        res.json(response);

    } catch(err) {
        res.status(404).json(`Comment not found.`);
        
    } 
})


commentsRouter.post("/", async (req, res) => {

    try {
        const response = await Comment.create(req.body)
       
        res.status(200).json(response);        
        console.log('Comment added')
        
    } catch(err) {
        res.status(404).json();
        
    } 
})



export default commentsRouter;