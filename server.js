const express = require("express")
const cors = require("cors")
require("./db/conn")

const app = express()

app.use(cors({origin: 'http://localhost:3000/'}))
app.use(express.json());

const userRouter = require("./routes/user.route")
app.use('/api/v1', userRouter)

const port = process.env.PORT||8000;

app.listen(port,()=>{
    console.log(`Listening at : ${port}`)
})