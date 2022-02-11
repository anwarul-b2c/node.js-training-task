const mongoose = require("mongoose");
const { Schema, ObjectId } = mongoose;

const userSchema = new Schema(
  {
    name: String,

    dob: {
      type: Date,
    },
    city_id: {
      type: String
    },
    state_id: {
      type: String
    },

    country_id: {
      type: String
    },
    area:{
        type:String
    },
    image:{
        type:Object
    },
    about_me:{
        type:String
    }
    
  },
  { timestamps: true }
);


module.exports = mongoose.model("User_crud", userSchema);