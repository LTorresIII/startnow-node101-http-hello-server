*Hello HTTP Server*

Intro-
	One of the popular use cases for NodeJS is to use it to build web servers. 
	The ability for NodeJS to handle a high volume of visitors with very little resources makes it an ideal technology stack for many websites.
	In this project you will build a very simple web server that will only respond to a basic request for http://localhost:8080/.
	Your server should also log each request to the console (on the server side). As the "webmaster" you will then be able to see all the visits your site generates.
	As is customary when learning a new technology: your first server will respond with "Hello World".

Setup-
	Open up a terminal
	Open the project folder in VS Code using the following command: code ~/oca/startnow-node101-hello-http-server
	Run: npm install.

Instruction-
	Require the dependency (the http module from Node)
	Create a server object and make sure it can:
	send headers
	send body response
	Add a listener so that your server will have a way to handle incoming connections.
	Commonly devlopers use 3030, 3333, 8080, or 8000 as port numbers. 
