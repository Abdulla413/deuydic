const path =require("path")
const express=require("express")
const app = express()
const dotenv =require("dotenv").config()
const connectDB = require("./config/db.js")

const colors=require("colors")

const cors =require("cors") ;

const {errorHandler} = require("./middleware/errorMiddleware")


connectDB()

const port = process.env.PORT || 5000



app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }))


app.use("/api/lughet", require("./routes/lughetRoutes"))

//Serve client

if(process.env.NODE_ENV==="production"){
  app.use(express.static(path.join( __dirname, "../client/build")))
  app.get("*", (req, res)=>res.sendFile(path.resolve( __dirname, "../", "client", "build", "index.html")))
}

app.use(errorHandler)

app.listen(port, () => {

  console.log(`Server is running on port: ${port}`);
});