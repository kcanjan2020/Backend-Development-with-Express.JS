import { Teacher } from "../model/model.js";

export let createTeacher=async (req,res)=>{
let data=req.body;
    //console.log(data)
    try {
        //Save data to teacher
    let result= await Teacher.create(data)
    res.json({
        success:true,
        message:"Teacher created Successfully",
        result:result
    })
    } catch (error) {
        res.json({
            success:false,
            message:error.message
        })
          }

}

export let readTeacher=async(req,res)=>{
    try {
        let result=await Teacher.find({})
        res.json({
        success:true,
        message:"Teacher Read Successfully",
        result:result,
    })
        
    } catch (error) {
        res.json({
            success:false,
            message:error.message
        })   
    } 
}


export let updateTeacher=(async(req,res)=>{
    //console.log(req.params)
    let teacherId=req.params.teacherId
    //console.log(teacherId)
    let data=req.body
    //console.log(data)

    try {
        let result= await Teacher.findByIdAndUpdate(teacherId,data);
        res.json({
            success:true,
            message:"Teacher updated successfully",
            result:result

        })
        
    } catch (error) {
        res.json({
            success:false,
            message:error.message
        })
        
    }

})

export let deleteTeacherDetails=(async(req,res)=>{
    let teacherId=req.params.teacherId
    try {
        let result= await Teacher.findByIdAndDelete(teacherId)
        res.json({
            success:true,
            message:"Teacher Deleted successfully",
            result:result
        })
    } catch (error) {
        res.json({
            success:false,
            message:error.message
        })
        
    }

})

export let readTeacherDetails=(async(req,res)=>{
    let teacherId=req.params.teacherId
    try {
        let result=await Teacher.findById(teacherId)
        res.json({
        success:true,
        message:"Teacher Read Successfully",
        result:result,
    })
        
    } catch (error) {
        res.json({
            success:false,
            message:error.message

        })     
    } 
})
