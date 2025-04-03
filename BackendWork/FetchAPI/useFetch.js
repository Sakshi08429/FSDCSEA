const http=require('http');
const port=2527;
const server=http.createServer((req,res)=>{
res.end("HIIIIII");
})
server.listen(port,()=>{
console.log("server is running on the port");
})