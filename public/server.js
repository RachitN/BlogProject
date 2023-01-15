import http from 'http-server';
import fs from 'fs';

const server = http.createServer((req, res) => {
    res.setHeader('Allow', 'POST, GET, PUT, DELETE');
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
//   if (req.method === 'POST') {

//       const data = JSON.parse(req.body);
//       if (req.postData =="signUp") {
//         fs.writeFile(
//           "/src/Data/signUpData.json",
//           data,
//           (err) => {
//             if (err) throw err;
//             console.log("Data written to file");
//           }
//         );
//       }

//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('Data received\n');
//   } else {
//     res.writeHead(405, { 'Content-Type': 'text/plain' });
//     res.end('Method not allowed\n');
//   }
});

server.listen(3000, 'localhost');