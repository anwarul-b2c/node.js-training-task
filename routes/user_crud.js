const express = require("express");
const router = express.Router();
const user_crud = require("../controller/user_crud");
const multer  = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      let extArr = file.originalname.split('.');
     
      let ext = extArr[extArr.length-1];
      cb(null, file.fieldname + '-' + uniqueSuffix+'.'+ext)
    }
  })
  
const upload = multer({ storage: storage })


router.post("/users", upload.single('image'), user_crud.create);
router.get("/users", user_crud.findAll);
router.get("/users/:id", user_crud.findOne);
router.put("/users/:id", upload.single('image'), user_crud.update);
router.delete("/users/:id", user_crud.delete);


module.exports = router;