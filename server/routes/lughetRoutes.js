const { query } = require("express");
const  express = require("express");
const router =express.Router()

const {getLughets, addLughets} = require("../controllers/lughetController")



router.get("/", getLughets )
router.post("/", addLughets) 




module.exports=router;
