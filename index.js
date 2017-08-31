// write your code here

//Importing code from the http module(library)
const http = require('http');
//This will first create a server, Then function will execute for every request sent to this server
http.createServer(function(request, response){
    //create and configure reponse

    //Set status and headers
    response.writeHead(200, {'Content-Type': 'text/plain'});
    //Write body response  
    response.write("Hello World");
    //Send response
    response.end();

    //Make the server listen on port 8080
    //Listen 127.0.0.1
}).listen(8080);
    console.log("Listening on port 8080");
