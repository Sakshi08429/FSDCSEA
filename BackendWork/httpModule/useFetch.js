const http = require("http");
const port = 2527;
const server = http.createServer(async (req, res) => {
  res.setHeader("Content-Type", "text/html");
  const data = await fetch("https://fakestoreapi.com/products");
  const jsondata = await data.json();
  console.log(jsondata);
  console.log(jsondata[0].category);
//   res.end(jsondata[0].category);
  const htmltemplate = `<html>
    <head><title>Online Clothes Shop</title>
    <style>
        </style>
        </head>
        <body>
            <div>
                ${
                    jsondata.map((ele) => {
                  return ` <div>
                         
                            <div><img src="${ele.image}" height="200px" width="200px"/></div>
                            <div>${ele.category}
                                ${ele.id}</div>
                            <div>${ele.description}  </div> 
                            <div>Rs.${ele.price}</div> 

                            </div>`
                })}

            </div>
        </body>
</html>`

  res.end(htmltemplate)
});

server.listen(port, () => {
  console.log("server is running on the port");
});
