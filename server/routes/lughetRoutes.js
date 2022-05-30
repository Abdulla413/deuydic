const { query } = require("express");
const  express = require("express");
const router =express.Router()

const {getLughets, addLughets} = require("../controllers/lughetController")



router.route("/").get(getLughets).post(addLughets)





module.exports=router;
