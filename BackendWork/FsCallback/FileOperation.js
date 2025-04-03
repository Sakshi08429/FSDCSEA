const fs=require('fs');
fs.writeFile('data.txt',"Welcome to FSD session ",()=>{
    console.log("Data written successfully");
})

fs.readFile('data.txt',(err,data)=>{
    if(err)console.log("Error while reading tha data "+err);
    else 
    // console.log(data);
console.log(data.toString());
})

fs.appendFile('data.txt','appending data',(err)=>{
    if(err)console.log("Error while reading tha data "+err);
    else 
    // console.log(data);
console.log("data has been append successfully");
})

fs.unlink('data.txt',(err)=>{
    if(err)console.log("Error while reading tha data "+err);
    else console.log("file has been deleted")
})