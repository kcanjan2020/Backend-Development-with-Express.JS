import e from "express";
import { Webuser } from "../model/model.js";
import bcrypt from "bcrypt";
import { sendMail } from "../utils/sendMail.js";

export let createWebuser = async (req, res) => {
  let data = req.body;
  // console.log(data);
  //console.log(data); // {ame: 'Anjan',age: 24 email: 'kcanjan2020@gmail.com',password: 'Password@123',phoneNumber: 9866904450, } => object
  try {
    let password = data.password;
    // console.log(password);
    let hasPassword = await bcrypt.hash(password, 10); // 10 means String hashing 2^10 times
    //console.log(hasPassword);
    data = {
      ...data,
      password: hasPassword,
    };
    let result = await Webuser.create(data);
    //Send mail from google smtp
    await sendMail({
      from: '"Hello Display" <kcanjan2020@gmail.com>', //it is used to display text before email address
      to: [req.body.email], //=>send to specific mail
      subject: "My first system email",
      html: `<h1>Hello world!</h1>`,
    });
    res.json({
      success: true,
      message: "Webuser Created successfully",
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export let readWebuser = async (req, res) => {
  let query = req.query;
  //   console.log(query);
  //   console.log(query.name)
  try {
    //let result = await Webuser.find({}); // Read all data from model Webuser

    // let result = await Webuser.find({ name: query.name });
    let result = await Webuser.find(query);
    res.json({
      success: true,
      message: "Webuser read successfully",
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export let updateWebuser = async (req, res) => {
  let webuserId = req.params.webuserId;
  //console.log(webuserId);
  let data = req.body;
  //console.log(data);
  try {
    let result = await Webuser.findByIdAndUpdate(webuserId, data);
    res.json({
      success: true,
      message: "Webuser updated successfully",
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export let readWebuserDetails = async (req, res) => {
  let webuserId = req.params.webuserId;
  try {
    let result = await Webuser.findById(webuserId);
    res.json({
      success: true,
      message: "Webuser read successfully",
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export let deleteWebuserDetails = async (req, res) => {
  let webuserId = req.params.webuserId;
  try {
    let result = await Webuser.findByIdAndDelete(webuserId);
    res.json({
      success: true,
      message: "Webuser deleted successfully",
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

//=>How to create Login page
/*
->1.email,password
->2. get email and password
->3. if email exist
->4. if exist we check password match
-->5. if match res=> login successfully
-> else Email and password  does not match
 */

export let loginWebuser = async (req, res) => {
  let password = req.body.password;
  let email = req.body.email;
  try {
    let user = await Webuser.findOne({ email: email });
    // console.log(user);
    if (user == null) {
      res.json({
        success: false,
        message: "Email and Password do not match",
      });
    } else {
      let databasePassword = user.password;
      let isValidPassword = await bcrypt.compare(password, databasePassword);
      // console.log(isValidPassword)
      if (isValidPassword) {
        res.json({
          success: true,
          message: "Login Successfully",
        });
      } else {
        res.json({
          success: false,
          message: "Email and Password do not match",
        });
      }
    }
  } catch (error) {
    res.json({
      success: false,
      message: "Email and Password do not match",
    });
  }
};
