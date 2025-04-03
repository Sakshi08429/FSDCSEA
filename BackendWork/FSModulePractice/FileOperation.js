const promise=require('fs').promises;
async function dataCopy(){
    const data= await promise.readFile('studentData.json',{encoding:"utf-8"});
   
     await promise.writeFile('updatedData.json',data);
     console.log("data written successfully")
   
     const newData=await promise.readFile('updatedData.json',{encoding:"utf-8"});
     console.log(newData)

    }

    async function dataRead(){
        await promise.readFile('updatedData.json');
    }








    const obj={
       dataCopy,
        dataRead
        
        }

   module.exports=obj;     