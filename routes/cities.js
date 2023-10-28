import express from 'express';
const citiesRouter = express.Router();
import City from '../models/City.js';

citiesRouter.get("/", async (req, res) => {
    try {
      const response = await City.find();
      res.json(response)
    

    } catch(err){
        res.status(500).json(err)
    }
})

citiesRouter.get("/:id", async (req, res) => {
    const {id} = req.params;


    try {
        const response = await City.findById(id);
        if(!response.length){
            res.json({message: `No restaurants found in this city.`})}

        res.status(200).json(response);        
        console.log('nothing')
        

    } catch(err) {
        res.status(404).json(`City not found.`);
        
    } 
})


citiesRouter.post("/", async (req, res) => {

    try {
        const response = await City.create(req.body)
       
        res.status(200).json(response);        
        console.log('response')
        

    } catch(err) {
        res.status(404).json();
        
    } 
})





export default citiesRouter;