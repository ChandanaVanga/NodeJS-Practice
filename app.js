//1)

// const http = require('http');
// function requestListener(request, response){

// }

// http.createServer(requestListener);

//2) Anonymous function
// const http = require('http');
// http.createServer(function(request, response){

// });

//3) 
// const http = require('http');
// const server = http.createServer((request, response) => {
//     console.log(request.url, request.method, request.headers);
//     //process.exit(); exits from server
// });
// server.listen(3000);



//4)
// const http = require('http');
// const server = http.createServer((request, response) => {
//     console.log(request.url, request.method, request.headers);
//     response.setHeader('Content-Type', 'text/html');
//     response.write('<html>');
//     response.write('<head><title>My first Page</title></head>');
//     response.write('<body><h1>Hello!</h1><body>');
//     response.write('</html>');
//     response.end();
// });
// server.listen(3000);

//5)
// const http = require('http');
// const server = http.createServer((request, response) => {
//     const url = request.url;
//     if (url === '/'){
//         response.write('<html>');
//         response.write('<head><title>Entering Message</title></head>');
//         response.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form><body>');
//         response.write('</html>');
//         return response.end();
//     }
//     response.setHeader('Content-Type', 'text/html');
//     response.write('<html>');
//     response.write('<head><title>My first Page</title></head>');
//     response.write('<body><h1>Hello!</h1><body>');
//     response.write('</html>');
//     response.end();
// });
// server.listen(3000);

//6)
// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((request, response) => {
//     const url = request.url;
//     const method = request.method;
//     if (url === '/'){
//         response.write('<html>');
//         response.write('<head><title>Entering Message</title></head>');
//         response.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form><body>');
//         response.write('</html>');
//         return response.end();
//     }
//     if (url === '/message' && method === 'POST') {
//         fs.writeFileSync('message.txt', 'Dummy');
//         response.statusCode = 302;
//         response.setHeader('Location', '/');
//         return response.end();
//     }
//     response.setHeader('Content-Type', 'text/html');
//     response.write('<html>');
//     response.write('<head><title>My first Page</title></head>');
//     response.write('<body><h1>Hello!</h1><body>');
//     response.write('</html>');
//     response.end();
// });
// server.listen(3000);


//7)
// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((request, response) => {
//     const url = request.url;
//     const method = request.method;
//     if (url === '/'){
//         response.write('<html>');
//         response.write('<head><title>Entering Message</title></head>');
//         response.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form><body>');
//         response.write('</html>');
//         return response.end();
//     }
//     if (url === '/message' && method === 'POST') {
//         const body = [];
//         request.on('data', (chunk) => {
//             console.log(chunk);
//             body.push(chunk);
//         });
//         request.on('end', () => {
//             const parsedBody = Buffer.concat(body).toString();
//             const message = parsedBody.split('=')[1];
//             fs.writeFileSync('message.txt', message);
//         });
//         response.statusCode = 302;
//         response.setHeader('Location', '/');
//         return response.end();
//     }
//     response.setHeader('Content-Type', 'text/html');
//     response.write('<html>');
//     response.write('<head><title>My first Page</title></head>');
//     response.write('<body><h1>Hello!</h1><body>');
//     response.write('</html>');
//     response.end();
// });
// server.listen(3000);

//8)
// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((request, response) => {
//     const url = request.url;
//     const method = request.method;
//     if (url === '/'){
//         response.write('<html>');
//         response.write('<head><title>Entering Message</title></head>');
//         response.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form><body>');
//         response.write('</html>');
//         return response.end();
//     }
//     if (url === '/message' && method === 'POST') {
//         const body = [];
//         request.on('data', (chunk) => {
//             console.log(chunk);
//             body.push(chunk);
//         });
//         return request.on('end', () => {
//             const parsedBody = Buffer.concat(body).toString();
//             const message = parsedBody.split('=')[1];
//             fs.writeFileSync('message.txt', message);
//             response.statusCode = 302;
//         response.setHeader('Location', '/');
//         return response.end();
//         });   
//     }
//     response.setHeader('Content-Type', 'text/html');
//     response.write('<html>');
//     response.write('<head><title>My first Page</title></head>');
//     response.write('<body><h1>Hello!</h1><body>');
//     response.write('</html>');
//     response.end();
// });
// server.listen(3000);

//9)
// const http = require('http');

// const express = require('express');

// const app = express();

// app.use((request, response, next) => {
//     console.log('In the middleware!');
//     next(); //Allows the request to continue to the middleware in line
// });

// app.use((request, response, next) => {
//     console.log('In another middleware!');
//     response.send('<h1>Hello!</h1>');
// });
// // const server = http.createServer(app);
// // server.listen(3000);
// app.listen(3000); //works same as above


//10)

// const express = require('express');

// const app = express();

// app.use('/', (request, response, next) => {
//     console.log('They said this runs always!');
//     next();

// });    

// app.use('/add-product', (request, response, next) => {
//     console.log('In another middleware!');
//     response.send('<h1>The "Add Product" Page</h1>');
// });

// app.use('/', (request, response, next) => {
//     console.log('In another middleware!');
//     response.send('<h1>Hello!</h1>');
// });
// app.listen(3000);


//11)

// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();

//  app.use(bodyParser.urlencoded({extended: false}));   

//  app.use('/add-product', (request, response, next) => {
//     response.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
// });

// app.post('/product', (request, response, next) => { //we can place put,patch,post,delete in the place of "use" to do respective works
//     console.log(request.body);
//     response.redirect('/');
// });

// app.use('/', (request, response, next) => {
//     response.send('<h1>Hello!</h1>');
// });
// app.listen(3000);

//12)
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
//const expressHbs = require('express-handlebars');    //(handlebars)

const app = express();
//handlebars
// app.engine(
//     'hbs', 
//     expressHbs({
//         layoutsDir: 'views/layouts/', 
//         defaultLayout: 'main-layout',
//         extname: 'hbs'
//     })
// );
// app.set('view engine', 'hbs');

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminData = require('./routesss/admin');
const shopRoutes = require('./routesss/shop');

 app.use(bodyParser.urlencoded({extended: false})); 
 app.use(express.static(path.join(__dirname, 'public')));
 
 app.use('/admin', adminData.routes);
 app.use(shopRoutes);

app.use((request, response, next) => {
    response.status(404).render('404', {pageTitle: 'Page Not Found'});
});

app.listen(3000);