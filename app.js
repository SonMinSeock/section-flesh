const express = require("express");
const session = require("express-session");

const app = express();
const PORT = 3000;

app.use(session({ secret: "thisisnotgoodsecret" }));

app.get("/viewcount", (req, res) => {
  if (req.session.count) {
    req.session.count += 1;
  } else {
    req.session.count = 1;
  }
  res.send(`You Have viewed this page ${req.session.count} times`);
});

app.listen(PORT, () => console.log(`Server Listen on Port ${PORT}`));
