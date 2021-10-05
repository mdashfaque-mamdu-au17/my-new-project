const express = require("express");

const app = express();

app.use(express.static("public"));

console.log(`server started at ${process.env.PORT}`);

const prt = process.env.PORT || 3000;
app.listen(prt, () => {
  console.log(`server started at ${prt}`);
});
