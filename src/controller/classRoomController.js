import { Classroom } from "../model/model.js";

export let createClassRoom = async (req, res) => {
  let data = req.body;
  console.log(data);
  try {
    let result = await Classroom.create(data); // save data to ClassRoom
    res.json({
      success: true,
      message: "Classroom Created Successfully",
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export let readClassRoom = async (req, res) => {
  try {
    // let result = await Classroom.find({}); //Show all data frm Classroom model

    //Read data from specific query
    let query = req.query;
    // console.log(query);
    // console.log(query.name);
    let result = await Classroom.find(query);
    res.json({
      success: true,
      message: "Classroom Read Successfully",
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

//update Specific Item ==>findByIdAndUpdate
export let updateClassRoom = async (req, res) => {
  let classId = req.params.classId;
  //console.log(classId);
  let data = req.body;
  //console.log(data);
  try {
    let result = await Classroom.findByIdAndUpdate(classId, data);
    res.json({
      success: true,
      message: "Classroom Updated successfully",
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

// Read Specific Item by Id
export let readClassRoomDetails = async (req, res) => {
  let classId = req.params.classId;
  // console.log(req.params);
  // console.log(req.params.classId);
  try {
    var result = await Classroom.findById(classId);
    res.json({
      success: true,
      message: "Classroom Read Successfully",
      result: result,
    });
  } catch (error) {
    res.json({
      success: true,
      message: error.message,
    });
  }
};

//Delete Student from specific id
export let deleteClassRoomDetails = async (req, res) => {
  let classId = req.params.classId;
  try {
    let result = await Classroom.findByIdAndDelete(classId);
    res.json({
      success: true,
      message: "Classroom Deleted Successfully",
      result: result,
    });
  } catch (error) {
    res.json({
      success: true,
      message: error.message,
    });
  }
};
