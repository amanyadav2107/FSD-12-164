import http from 'http';

const server = http.createServer(req, res =>{
    console.log("server hit by client");
    // req.write("<h1>Hello client</h1>"");
    res.end("<h1>Hello client</h1>");
});

server.listen(4444, () =>  console.log("Server is running ..."));