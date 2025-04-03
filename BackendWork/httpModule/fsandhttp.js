const fs=require('fs').promises;
const http=require('http');
const port=2527;
const server=http.createServer(async (request,response)=>{
    // try{
    // response.setHeader('Content-Type','text/html');
    // response.write("WELCOME TO HTTP AND FS MODULE");
    // const data=await fs.readFile('student.json',{encoding:'utf8'});
    // response.write("<h2 style='color:cyan'> ${data}</h2>");
    // response.write("...............Response ended ..................");
    // response.end(data);}
    // catch(err){
    //     console.log(err);
    // }

    if(request.url=="/home" &&request.method=="GET"){
        response.setHeader('Content-Type','text/html');
        const htmltemplate=await fs.readFile('home.html');
        response.end(htmltemplate);
    }
    else if(request.url=="/textdata" &&request.method=="GET"){
        response.setHeader('Content-Type','text/html');
        const htmltemplate=await fs.readFile('textdata.html');
        response.end(htmltemplate);
    }
    else{
        response.setHeader('Content-Type','text/html');
        const htmltemplate=await fs.readFile('error.html');
        response.end(htmltemplate);
    }
})

server.listen(port,()=>{
    console.log("server is running on your  port");
})