import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true   
    },  
    
    commentText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 1000,       
    },
    restaurantId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurant'
    }, 
    
}, {timestamps: true})

const Comment = mongoose.model("Comment", CommentSchema)

export default Comment