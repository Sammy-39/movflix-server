const mongoose = require("mongoose")
require("dotenv").config()
const DB = process.env.MONGODB_URI
mongoose.connect(DB,{
    useCreateIndex:true,
    useFindAndModify:false,
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("Db Connected")
}).catch((e)=>{
    console.log(e)
})


