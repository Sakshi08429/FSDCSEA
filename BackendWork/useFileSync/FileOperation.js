const fs=require('fs');
function dataWrite(){
    try{
fs.writeFileSync("data.txt","Hello node js using fs module");
console.log("data written successfully");}
catch(err){
    console.log("Error while  writing the data "+err);
}
}

function dataRead(){
    try{
const rf=fs.readFileSync('data.txt',{encoding:'utf-8'});
console.log(rf);}
catch(err){
    console.log("Error while  reading the file "+err);
}}


function dataAppend(){
fs.appendFileSync('data.txt',"appending using fs module");
console.log("data append successfully");
}

// to delete the data
function dataUnlink(){
fs.unlinkSync('data.txt');
console.log("file deleted")
}

const obj={
dataWrite,
dataRead,
dataAppend,
dataUnlink

}
module.exports=obj;