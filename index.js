console.log("I am Hassan Ali")

console.log("I am a student")

const a=5
const b=5
const sum=a+b
console.log(sum)

const weight=60
const height=1.75
const BMI=weight/height**2
console.log(BMI)

const obtMarks=858
const totalMarks=1200
const percentage=obtMarks/totalMarks*100
console.log(percentage)

//----------------------------------------//

import express from "express"

const app=express()

app.get("/working",(req,res)=>{
    res.send("I am working")
})

app.get("/profile",(req,res)=>{
    res.status(200).json({
        name: "Hassan Ali",
        userId: "123"
    })
})

const PORT=5050

app.listen(PORT,()=>{
    console.log("Server is running on PORT 5050")
})