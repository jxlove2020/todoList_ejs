const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));

// static 적용
app.use(express.static("public"));

let items = ["Buy Food","Cook Food","Eat Food"];

app.get("/", (req, res) => {
  const today = new Date();
  
  const options = { 
    weekday: "long",
    day: "numeric",
    month: "long"
  }
  let day = today.toLocaleDateString("en-US", options);

  res.render("list", { kindOfDay: day, newListItems: items })
})

app.post("/", (req, res) => {
  let item = req.body.newItem
  
  items.push(item);
  
  // 서버 콘솔에 찍힘
  console.log(item);

  res.redirect("/");
})

app.listen(3030, function(){
  console.log("Server started on port 3030");
})