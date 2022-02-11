const express = require("express");
const app = express();

const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();


//Route import
const user = require("./routes/user");
const user_crud = require("./routes/user_crud");

// Using middle ware
app.use(cors());
app.use(
  express.urlencoded({
    extended: true
  })
);

app.use(express.json());

app.use("/", user);
app.use("/crud", user_crud);

let port = process.env.PORT || 4000;

app.listen(port, async () => {
  console.log(`server running on http://localhost:${port}`);

  try {
    await mongoose.connect(process.env.DB_URL);
    console.log(`DB Connection success:${port}`);
  } catch (error) {
    handleError(error);
  }
});