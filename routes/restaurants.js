import express from 'express';
const restaurantsRouter = express.Router();
import Restaurant from '../models/Restaurant.js';
import City from '../models/City.js';


restaurantsRouter.get("/", async (req, res) => {
    try {
      const response = await Restaurant.find();
      res.json(response)
     

    } catch(err){
        res.status(500).json(err)
    }
})

restaurantsRouter.get("/:id", async (req, res) => {
    const {id} = req.params;


    try {
        const response = await Restaurant.findById(id);
        if(!response.length){
            res.json({message: `No restaurants matching ${id} ID found.`})}

        res.status(200).json(response);        
        
        

    } catch(err) {
        res.status(404).json(`Restaurant with ID: ${id} not found.`);
        
    } 
})

restaurantsRouter.get("/tag/:tag", async (req, res) => {
    const {tag} = req.params;

    try {
      const response = await Restaurant.find({tags: tag});
      if(!response.length){
        res.json({message: `No restaurants matching ${tag} tag criteria found.`})

      }
      res.json(response)
     

    } catch(err){
        res.status(500).json(err)
    }
})

//FIND RESTAURANT BY TAG AND CITY at the same time
// restaurantsRouter.get("/tag/:tag/:city", async (req, res) => {
//     const {tag, city} = req.params;

// //asian, berlin
//     try {
//         const findCity = await City.find({name: city});
//         console.log(findCity[0]._id);



//         const response = await Restaurant.find({tags: tag, cityId: findCity[0]._id});
//             //   if(!response.length){
//                 return res.json({message: `No restaurants in ${city} with the tag ${tag} found.`})
        
              
//       res.json(response)
     

//     } catch(err){
//         res.status(500).json(err)
//     }
// })


restaurantsRouter.post("/", async (req, res) => {

    try {
        const response = await Restaurant.create(req.body)
       
        res.status(200).json(response);        
        console.log('nothing')
        
    } catch(err) {
        res.status(404).json();
        
    } 
})




export default restaurantsRouter;