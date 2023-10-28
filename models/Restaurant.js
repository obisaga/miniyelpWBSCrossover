import mongoose from "mongoose";

const RestaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
   
    },  
    
    tags: [{
        type: String
    }],

    img: {
        type: String,
       
    },
    
    cityId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'City'
    }, 
    
    location: {
        lat: { type: Number},
        lng: { type: Number},
        address: { type: String}
      },
     
    
})

const Restaurant = mongoose.model("Restaurant", RestaurantSchema)

export default Restaurant

