const http=require('http');
const port=2527;
const server=http.createServer((req,res)=>{
    console.log("inside server body");
    if(req.url=='/'&&req.method=='GET'){
    res.setHeader('Content-Type',"text/html");
    console.log(Object.keys(req));
    console.log(req.url+" "+req.method);
    res.write("<div style='background:green'>")
res.write("<h2 style='color:cyan'>welcome to node server</h2>");
res.write("</div>")
res.end("<h2>Server has ended </h2>");}

if(req.url=='/show' &&req.method=='GET'){
    res.setHeader('Content-Type','application/json');
    res.end(JSON.stringify({
   msg:"successfully host the api"
    }))
}


if(req.url=='/show' &&req.method=='POST'){
    res.setHeader('Content-Type','application/json');
    res.end(JSON.stringify({
   msg:"successfully host the post api @ /show"
    }))
}

})



server.listen(port,()=>{
    console.log("Server is running on : "+port);
})
