const http=require('http');
const fs=require('fs').promises;
const port=3001;
const server=http.createServer((req,res)=>{
// res.end("welcome to the node server");
if(req.url=='/register' &&req.method=="POST"){
   
    let body='';
    let arr=[];
    req.on('data',chunk=>{
        body+=chunk;
    })

req.on('end',async()=>{
    const {name,email,password}=JSON.parse(body);
   console.log(name);

   const fdata=await fs.readFile('student.json',{encoding:'utf-8'});
   arr=JSON.parse(fdata);
   console.log(arr);
   const result=arr.find(ele=>ele.email==email);
   if(result){
    res.setHeader('Content-Type','application/json');
    res.end(JSON.stringify({"message":"This email is already registered plzz try again with a new email ....."}))
   }else{
    arr.push({name,email,password});
    await fs.writeFile('student.json',JSON.stringify(arr,null,2));
    res.end(JSON.stringify({"message":"registered successfully !!"}));
   }
   

})}
//  res.end(JSON.stringify({"message":"/register api hit successfully !!"}));
if(req.url=='/login'&&req.method=='POST'){
    let body='';
    let arr=[];
    req.on('data',chunk=>{
        body+=chunk;
    })
    req.on('end',async()=>{
        const {email,password}=JSON.parse(body);
        const fdata=await fs.readFile('student.json',{encoding:'utf-8'});
   arr=JSON.parse(fdata);
   console.log(arr);
   const result=arr.find(ele=>ele.email==email&&ele.password==password);
   if(result){
    res.setHeader('Content-Type','application/json');
    res.end(JSON.stringify({"message":"Valid user"}));
   }
   else{
    res.end(JSON.stringify({"message": "Invalid user"})); 
   }
       
    })
}

})
server.listen(port,()=>{
    console.log("server is running on port "+port)
})
