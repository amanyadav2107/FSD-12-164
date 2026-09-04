import http from 'http';

 const server = http.createServer((req,res) => {
     res.writeHead(200,{'conttent-type': 'text/json'});
     console.log("Client URL;",req.url);


     const product =[{
        name: "Iphone",
        price: 85000,
        qty:2,
        discount: 15,
     },
     {
      name: "laptop",
      price: 155000,
      qty:1,
      discount: 25,
     },
     {
        name: "Mouse",
        price: 2500,
        qty:2,
        discount: 20,
     },
    ];

     res.end(JSON.stringify(product));
 });


 server.listen(3000,() => console.log("prg4 is runnig at 3000...."));