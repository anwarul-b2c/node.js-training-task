const user_crud = require("../models/user_crud");
const User_crud = require("../models/user_crud");



exports.create = async (req, res) => {
  try {
    let data = req.body;
    data.image = req.file
    let user = await user_crud.create(data);
    return res.status(200).json({ success: true, message:"User Created Successfully", user });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, error, message: error.message });
  }
};

exports.findAll = async (req, res) => {
    try {
      let user = await User_crud.find({}).exec();
  
      return res.status(200).json({ success: true, message:"User Fetched Successfully", user });
    } catch (error) {
      return res
        .status(500)
        .json({ success: false, error, message: error.message });
    }
  };

exports.findOne = async (req, res) => {
    try {

      // console.log(req.params.id);
      let user = await User_crud.findOne({_id:req.params.id}).exec();
  
      return res.status(200).json({ success: true, message:"User Fetched Successfully", user });
    } catch (error) {
      return res
        .status(500)
        .json({ success: false, error, message: error.message });
    }
  };

exports.update = async (req, res) => {
    try {

      // console.log(req.params.id);

      let data = req.body;
      data.image = req.file

      let user = await User_crud.findOneAndUpdate({_id:req.params.id}, data).exec();
  
      return res.status(200).json({ success: true,message:"User Modified Successfully" });
    } catch (error) {
      return res
        .status(500)
        .json({ success: false, error, message: error.message });
    }
  };

exports.delete = async (req, res) => {
    try {

      // console.log(req.params.id);

      let data = req.body;
      data.image = req.file
     
      let user = await User_crud.findByIdAndDelete(req.params.id).exec();
  
      return res.status(200).json({ success: true,message:"User Deleted Successfully"});
    } catch (error) {
      return res
        .status(500)
        .json({ success: false, error, message: error.message });
    }
  };

