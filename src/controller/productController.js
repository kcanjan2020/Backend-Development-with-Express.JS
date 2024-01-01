import { Product } from "../model/model.js";

export let createProduct=async (req,res)=>{
let data=req.body;
    //console.log(data)
    try {
        //Save data to product
    let result= await Product.create(data)
    res.json({
        success:true,
        message:"Product created Successfully",
        result:result
    })
    } catch (error) {
        res.json({
            success:false,
            message:error.message
        })
          }

}

export let readProduct=async(req,res)=>{
    let query=req.query
        console.log(query)
        console.log(req.query.name)
    try {
        // let result=await Product.find({})
        // let result=await Product.find({name:query.name})
        let result=await Product.find(query)
        
        res.json({
        success:true,
        message:"Product Read Successfully",
        result:result,
    })
        
    } catch (error) {
        res.json({
            success:false,
            message:error.message
        })   
    } 
}


export let updateProduct=(async(req,res)=>{
    //console.log(req.params)
    let productId=req.params.productId
    //console.log(productId)
    let data=req.body
    //console.log(data)

    try {
        let result= await Product.findByIdAndUpdate(productId,data);
        res.json({
            success:true,
            message:"Product updated successfully",
            result:result

        })
        
    } catch (error) {
        res.json({
            success:false,
            message:error.message
        })
        
    }

})

export let deleteProductDetails=(async(req,res)=>{
    let productId=req.params.productId
    try {
        let result= await Product.findByIdAndDelete(productId)
        res.json({
            success:true,
            message:"Product Deleted successfully",
            result:result
        })
    } catch (error) {
        res.json({
            success:false,
            message:error.message
        })
        
    }

})

export let readProductDetails=(async(req,res)=>{
    let productId=req.params.productId
    try {
        let result=await Product.findById(productId)
        res.json({
        success:true,
        message:"Product Read Successfully",
        result:result,
    })
        
    } catch (error) {
        res.json({
            success:false,
            message:error.message

        })     
    } 
})
