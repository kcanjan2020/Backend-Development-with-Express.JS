import { Schema } from "mongoose";

let bookSchema=Schema({
    name:{
        type:String,
        required:[true,"book name field is required"]
    },
    author:{
        type:String,
        required:[true,"author field is required"]
    },
    price:{
        type:Number,
        required:[true,"price field is required"]
    },
    isAvailable:{
        type:Boolean,
        required:[true,"isAvailable field is required"]
    }
});
export default  bookSchema;