const http = require('http');
const os = require('os');
const persMod = require('./personalModule');
const port = 5000;

const userInfo = os.userInfo().username;
const currentDate = persMod.getDate();

const responseBody = `
  <h1>Task 1</h1>
  <h2>System information</h2>
  <p>Current User Name: ${userInfo}</p>
  <p>OS Type: ${os.type}</p>
  <p>System Work Time: ${(os.uptime() / 60).toFixed(2)} mins</p>
  <p>Current work directory: ${__dirname}</p>
  <p>Server filename: ${__filename}</p>
  <br></br>
  <h1>Task 2</h1>
  <p>Date of request is ${currentDate}</p>
  <p>${persMod.greetUserByDayTime(userInfo, currentDate)}</p>
`;

http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(responseBody);
  response.end('Node JS Test');
}).listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
