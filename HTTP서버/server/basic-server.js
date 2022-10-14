// const http = require('http');

// const PORT = 4999;

// const ip = 'localhost';

// const server = http.createServer((request, response) => {

//   const {method, url} = request;

//   if( method === "POST" && url === "/upper" ){
//     let body = [];
//     request.on('data', (chunk) => {
//       body.push(chunk);
//     }).on('end', () => {
//       body = Buffer.concat(body).tocdString().toUpperCase();
//       response.writeHead(200, defaultCorsHeader);
//       response.end(body);
//     });
    
//   } else if( method === "POST" && url === "/lower" ){
//     let body = [];
//     request.on('data', (chunk) => {
//       body.push(chunk);
//     }).on('end', () => {
//       body = Buffer.concat(body).toString().toLowerCase();
//       response.writeHead(200, defaultCorsHeader);
//       response.end(body);
//     });
//   } else{
//     response.statusCode = 404;
    
//   }

//   // CORS 관련헤더
//   if(method === "OPTIONS"){
//     response.writeHead(200, defaultCorsHeader);
//     response.end('hello mini-server sprints');
//   }


//   // request에 적용되는 메서드 및 url
//   console.log(
//     `http request method is ${request.method}, url is ${request.url}`
//   );
  
// });  /////// 서버라인 /////////////

// // 해당서버를 서버를 보여주기 위함
// server.listen(PORT, ip, () => {
//   console.log(`http server listen on ${ip}:${PORT}`);
// });

// //CORS 관련헤더  => preflight request
// const defaultCorsHeader = {
//   'Access-Control-Allow-Origin': '*',
//   'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
//   'Access-Control-Allow-Headers': 'Content-Type, Accept',
//   'Access-Control-Max-Age': 10
// };

const express = require("express");
const app = express();
const port = 4999;
const jsonParser = express.json({ strict: false });
const cors = require("cors");

app.use(jsonParser);
app.use(cors());


const myLogger = function (req, res, next) {
  console.log(req.body);
  next();
};

app.use(myLogger);

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.post('/', function (req, res) {
//   res.send('Got a POST request');
// });

app.post("/upper", function (req, res) {
  // res.json(req.body.toUpperCase());
  
  res.send(JSON.stringify(req.body.toUpperCase()));
  
});

app.post("/lower", function (req, res) {
  res.json(req.body.toLowerCase());
});

app.listen(port, ()=>{
  console.log(`port ${port}`)
});


