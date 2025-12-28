const express = require('express')
const app = express()
const path = require('path')

const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index", {
    name: "Abhyuday",
    title: ""
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
