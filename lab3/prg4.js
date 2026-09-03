import http from 'http';

 const server = http.createServer((req,res) => {
     res.writeHead(200,{'conttent-type': 'apllication/json'});
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
    ];

     res.end(JSON.stringify(product));
 });


 server.listen(3000,() => console.log("server is runnig at 3000...."));