const express = require("express");
const app = express();
const port = 5000;
const file = "/Users/lukelin/Lulu/Sky/dist/index.html";

app.use(express.static("/Users/lukelin/Lulu/Sky/dist"));
app.get("/", (req, res) => {
  res.sendfile(__dirname + "/index.html", function(err) {
    if (err) res.send("404");
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
