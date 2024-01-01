import { Student } from "../model/model.js";

export let createStudent = async (req, res) => {
  let data = req.body;
  //console.log(data)
  try {
    //Save data to student
    let result = await Student.create(data);
    res.json({
      success: true,
      message: "Student created Successfully",
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export let readStudent = async (req, res) => {
  try {
    let result = await Student.find({}); //It gives all data
    // let result= await Student.find({name:"Rita"})
    // let result= await Student.find({name:"Anjan",age:24})
    // let result= await Student.find({name:"Anjan",isMarried:true})
    // let result =await Student.find({age:25})
    // let result= await Student.find({age:{$gt:25}}) // age>25
    // let result= await Student.find({age:{$lt:25}})    // age <25
    // let result =await Student.find({age:{$gte:25}})      //age>=25
    // let result =await Student.find({age:{$lte:25}})      //age<=25
    // let result =await Student.find({name:{$ne:"Ram"}})

    //==>Task find age between 15 to 25
    // let result =await Student.find({age:{$gte:15,$lte:25}})

    //=>finding those whose name is Shyam,Anjan,Ram
    //let result =await Student.find({name:{$in:["Shyam","Anjan","Ram"]}})

    // $or
    // $and
    // let result =await Student.find({$or:[{name:"Shyam"},{name:"Ram"}]})
    // let result =await Student.find({$or:[{name:"Shyam",age:17},{name:"Ram"}]})
    // let result =await Student.find({$or:[{name:"Anjan"},{age:25}]})
    // let result =await Student.find({$and:[{name:"Anjan"},{age:24}]})
    // let result =await Student.find({$and:[{age:{$gte:15}},{age:{$lte:25}}]})

    //find those user whose name does not contain is Shyam,Anjan,Ram
    //let result =await Student.find({name:{$nin:["Shyam","Anjan","Ram"]}})

    //In searching type does not matter
    res.json({
      success: true,
      message: "Student Read Successfully",
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export let updateStudent = async (req, res) => {
  //console.log(req.params)
  let studentId = req.params.studentId;
  //console.log(studentId)
  let data = req.body;
  //console.log(data)

  try {
    let result = await Student.findByIdAndUpdate(studentId, data);
    res.json({
      success: true,
      message: "Student updated successfully",
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export let deleteStudentDetails = async (req, res) => {
  let studentId = req.params.studentId;
  try {
    let result = await Student.findByIdAndDelete(studentId);
    res.json({
      success: true,
      message: "Student Deleted successfully",
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export let readStudentDetails = async (req, res) => {
  let studentId = req.params.studentId;
  try {
    let result = await Student.findById(studentId);
    res.json({
      success: true,
      message: "Student Read Successfully",
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
