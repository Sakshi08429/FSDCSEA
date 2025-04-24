const express=require('express')
const fs=require('fs').promises
const app=express()
port=2527

app.use(express.json())
app.get("/",(req,res)=>{
// res.send("Welcome to expressJs");
try{
res.status(200).json({message:"Hit the get /api"})

}
catch(error){
    res.status(500).json({message:error})}
})

app.get("/data",(req,res)=>{
    res.status(200).json({message:"Hit the post data/api"})
    
    })
app.post("/login",(req,res)=>{
    let arr=[];
    const {name,email,password}=req.body
    console.log(name+"  "+email+" "+password)
res.status(200).json({message:"Successfully logged in"})
})

app.post("/register",async (req,res)=>{
    let arr=[]
    const {name,email,password}=req.body
    console.log(name+"  "+email+" "+password)
    const fdata=await fs.readFile('student.json',{encoding:'utf-8'});
   arr=JSON.parse(fdata);
   console.log(arr);
   const result=arr.find(ele=>ele.email==email);
   if(result){
    res.setHeader('Content-Type','application/json');
   res.status(200).json({message:"Already registered"})
   }else{
    arr.push({name,email,password});
    await fs.writeFile('student.json',JSON.stringify(arr,null,2));
    res.status(200).json({message:"registered successfully !!"});
   }
})

app.get("/admin/show",async(req,res)=>{
    try{

    }
    catch(error){
        console.log(error.message);
    }
})


app.get("/admin/showByEmail/:email",async(req,res)=>{
const emailid=req.params.email;
let arr=[];
// console.log(emailid);
// res.json({message:"Get the data by email id"})

const data=await fs.readFile('student.json',{encoding:'utf-8'})
arr=JSON.parse(data);
const status=arr.find(ele=>ele.email==emailid);
console.log(status)
if(!status){
    res.json({message:"Email not registered"});
}
res.json({message:status})
})


app.delete("/admin/deleteByEmail/:email",async(req,res)=>{
    const emailid=req.params.email;
    let arr=[];
    const data=await fs.readFile('student.json',{encoding:'utf-8'});
    arr=JSON.parse(data);
    const status=arr.find(ele=>ele.email==emailid);
    if(!status){
        res.json({message:"Email not registered"});
    }
    const newarr=arr.filter(ele=>ele.email!=emailid);   
    await fs.writeFile('student.json',JSON.stringify(newarr,null,2));
    res.json({message:"Deleted successfully"});
})


app.patch("/admin/updateByEmail/:email",async(req,res)=>{
    const emailid=req.params.email;
    const{name,password}=req.body;
    let arr=[];
    const data=await fs.readFile('student.json',{encoding:'utf-8'});
    arr=JSON.parse(data);
    const status=arr.find(ele=>ele.email==emailid);
    if(!status){
        res.json({message:"Email not registered"});
    }
    status.name=name;
    status.password=password;
    await fs.writeFile('student.json',JSON.stringify(arr,null,2));
    res.json({message:"Updated successfully"});

})
app.delete("/data",(req,res)=>{
    res.status(200).json({message:"Delete the post data/api"})
})


app.listen(port,()=>{
    console.log(`express Server is running on port ${port}`);
})