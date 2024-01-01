import { Schema } from "mongoose";

//Defining object is call schema
//eg. let studentSchema=Schema({object of objects})
let studentSchema=Schema({
    name:{
        type:String,
        required:[true, "name field is required"]
    },
    age:{
        type:Number,
        required:[true,"age field is required"]
    },
    isMarried:{
        type:Boolean,
        required:[true,"isMarried field is required"]
    }
});
export default studentSchema;