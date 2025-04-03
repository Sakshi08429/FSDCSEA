const promise=require('fs').promises;
const fsp=promise.writeFile('data.txt',"Hello using  fs promises");
console.log(fsp)
fsp.then(()=>{
    console.log("Data Written");
}).catch((err)=>{
console.log("Error while writing the data "+err);
}
).finally(()=>{
    console.log("Finally close all resources automatically");
})


async function readFileAsync(){
const data= await promise.readFile('data.txt');
console.log(data.toString());
}


readFileAsync();