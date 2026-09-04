# HTTP Module

It is buile in Node.js

## NPM : Node Package Manager
- Manager Install, Unistall

npm nodemon 

npm init -y :Project , biolerplate
npm i <packagename> :install any package
npm unistall <package> :unistall

npm start : node & program

npm run dev : nodemon & program

## http status codes -> res.WriteHead( ) , res.StatusCode( )

- 200 -> Ok
- 201 -> Created
- 400 -> Bad Request
- 401 -> Unautharized
- 403 -> forbidden
- 404 -> Not Found
- 500 -> Internal Server Error

### Server can send to the clint 
0. HTML contents -> Prg2, Prg3
1. HTML file -> prg5
2. Json data -> prg4
3. plain file 
4. js file
5. any file to download
6. etc

### Type of information -> res.writeHead( ), res.setHeader( )
1. text/html -> for html file contents
2. text/json , application/json -> for json data
3. text/css -> css file/contents
4. application -> for file
5. text/plai -> for plain text file 

### Note: .gitignore -> this file contains the list of files or folder that is not added to git, these files/folder will not push on GitHub