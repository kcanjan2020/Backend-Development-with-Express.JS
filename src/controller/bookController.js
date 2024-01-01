import { Book } from "../model/model.js";

export let createBook=async(req,res)=>{
    //console.log(req.body);
    let data=req.body;
    try {
        let result=await Book.create(data)
        res.json({
            success:true,
            message:"Book created successfully",
            result:result

        })
    } catch (error) {
        res.json({
            success:false,
            message:error.message
        })
        
    }

}

export let readBook=async(req,res)=>{
    try {
        let result=await Book.find({})
        res.json({
            success:true,
            message:"Book read Successfully",
            result:result
        })
        
    } catch (error) {
        res.json({
            success:false,
            message:error.message
        })
        
    }

}

//update book by id ==>(findByIdAndUpdate)
export let updateBook=async(req,res)=>{
    let bookId=req.params.bookId;
    let data=req.body;
    //console.log(bookId)
    //console.log(data)
   try {
    let result= await Book.findByIdAndUpdate(bookId,data)
    res.json({
        success:true,
        message:"Book updated successfully",
        result:result
    })
   } catch (error) {
    res.json({
        success:false,
        message:error.message
    })
    
   }

}

//delete book by id ==>(findByIdAndDelete)
export  let deleteBookDetails=async (req,res)=>{
    let bookId=req.params.bookId
    try {
        let result= await Book.findByIdAndDelete(bookId)
        res.json({
            success:true,
            message:"Book deleted successfully",
            result:result
        })
        
    } catch (error) {
        res.json({
            success:false,
            message:error.message
        })
        
    }

}


export let readBookDetails=async(req,res)=>{
    let bookId=req.params.bookId
    try {
        let result=await Book.findById(bookId)
        res.json({
            success:true,
            message:"Book read successfully",
            result:result
        })
    } catch (error) {
        res.json({
            success:false,
            message:error.message
        })
        
    }

}