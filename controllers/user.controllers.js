const bcrypt = require('bcryptjs')
const User = require('../db/models/user')

const registerController = async (req,res)=>{
    const email = req.body.email
    const user = await User.findOne({email})
    if(user){
        res.send("User Already Exist")
    }
    else{
        const password = await bcrypt.hash(req.body.password,12)
        const subscription = req.body.subscription
        const userreg = new User({
            email,
            password,
            subscription,
        })  
    const resp = await userreg.save()

    res.send(resp)
    }
}

const loginController = async(req, res)=>{
    const password = req.body.loginpassword
    const email = req.body.loginemail
    const user = await User.findOne({email})
    if(user){
        const match =await bcrypt.compare(password,user.password)
        if(match){
            res.send(user)
        }
        else{
            res.send("Invalid password");
        }
    }
    else{
        res.send("user not found");
    }
}

module.exports = { loginController, registerController }