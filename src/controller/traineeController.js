import { Trainee } from "../model/model.js";

export let createTrainee = async (req, res) => {
  let data = req.body;
  //console.log(data)
  try {
    //Save data to trainee
    let result = await Trainee.create(data);
    res.json({
      success: true,
      message: "Trainee created Successfully",
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export let readTrainee = async (req, res) => {
  let query = req.query;
  console.log(query);
  console.log(req.query.name);
  try {
    // let result=await Trainee.find({})
    // let result=await Trainee.find({name:query.name})
    let result = await Trainee.find(query);

    res.json({
      success: true,
      message: "Trainee Read Successfully",
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export let updateTrainee = async (req, res) => {
  //console.log(req.params)
  let traineeId = req.params.traineeId;
  //console.log(traineeId)
  let data = req.body;
  //console.log(data)

  try {
    let result = await Trainee.findByIdAndUpdate(traineeId, data);
    res.json({
      success: true,
      message: "Trainee updated successfully",
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export let deleteTraineeDetails = async (req, res) => {
  let traineeId = req.params.traineeId;
  try {
    let result = await Trainee.findByIdAndDelete(traineeId);
    res.json({
      success: true,
      message: "Trainee Deleted successfully",
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export let readTraineeDetails = async (req, res) => {
  let traineeId = req.params.traineeId;
  try {
    let result = await Trainee.findById(traineeId);
    res.json({
      success: true,
      message: "Trainee Read Successfully",
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
