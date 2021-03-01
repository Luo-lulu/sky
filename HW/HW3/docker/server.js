const express = require("express");
const app = express();
const port = 5001;
const fs = require("fs");
const server = require("http").Server(app);
const docker = fs.readFileSync("./dist/index.html", "utf8");
//const file = "/Users/lukelin/Lulu/Sky/dist/index.html";
//const port = process.env.PORT || 3000;

app.use(express.static("./dist"));
app.get("/", function(req, res) {
  res.send(docker);
});

server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// const express = require("express");
// const app = express();
// const port = 5001;
// const fs = require("fs");
// const docker = fs.readFileSync(
//   "/Users/lukelin/Lulu/Sky/dist/index.html",
//   "utf8"
// );
// const server = require("http").Server(app);
// //app.use(express.static("/Users/lukelin/Lulu/Sky/dist"));
// app.get("/", (req, res) => {
//   res.send(docker);
// });

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });
///

// const express = require("express");
// const app = express();
// const fs = require("fs");
// const docker = fs.readFileSync(
//   "/Users/lukelin/Lulu/Sky/dist/index.html",
//   "utf8"
// );

// //app.use(express.static("/Users/lukelin/Lulu/Sky/dist"));
// app.get("/", (req, res) => {
//   res.send(docker);
// });

// const server = require("http").Server(app);
// const port = 5001;

// server.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });

///
// const fs = require('fs');
// const docker = fs.readFileSync('./docker.html', 'utf8');

// app.get('/', function(req, res) {
//   res.send(docker);
// });
//const server = require('http').Server(app);
//const port = process.env.PORT || 3000;

// server.listen(port, function() {
//   console.log(`listening on port ${port}`);
// });
