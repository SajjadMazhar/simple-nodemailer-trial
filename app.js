require("dotenv").config()
const nodemailer = require("nodemailer")
const express = require("express")
const app = express()
// console.log(process.env.password)
const port = process.env.port || 3000

app.set("view engine", "ejs")
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/", (req, res)=>{
    res.render("mailer")
})

app.post("/send", (req, res)=>{
    let transport = nodemailer.createTransport({
        service:"gmail", 
        auth:{
            user:process.env.email,
            pass:process.env.password
        }
    })

    let mailOptions =  {
        from:process.env.email,
        to:req.body.mailto,
        subject:req.body.subject,
        text:req.body.mailtext
    }

    transport.sendMail(mailOptions, (err, info)=>{
        if(err){
            console.log(err)
            res.send("error")
        }else{
            console.log("sent "+info.response)
            res.redirect("/")
        }
    })
})

app.listen(port, ()=>{
    console.log("nodemailer connected")
})