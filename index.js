require("dotenv").config({path:"./.env"})
const nodemailer = require("nodemailer")
let transport = nodemailer.createTransport({
    service:"gmail", 
    auth:{
        user:process.env.email,
        pass:process.env.password
    }
})

// sending options
let mailOptions = {
    from:"sajjadthedevil123@gmail.com",
    to:"vikash21@navgurukul.org",
    subject:"nodemailer",
    text:"This is an email from nodemailer"
}

transport.sendMail(mailOptions, (err, info)=>{
    if(err){
        console.log(err)
    }else{
        console.log("sent "+info.response)
    }
})