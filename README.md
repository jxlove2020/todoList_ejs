# todoList_ejs

### npm i express body-parser
### npm i -D nodemon

### app.js
```
  const express = require("express");
  const bodyParser = require("body-parser");

  const app = express();

  app.get("/", function(req, res){
    const today = new Date();
    const currentDay = today.getDay();

    if(currentDay === 6 || currentDay === 0) {
      res.write("<h1>Yay it's the weekend!</h1>");
    } else {
      // res.write("<h1>Welcome</h1>");
      // res.send();

      res.sendFile(__dirname + "/index.html");
    }
  });

  app.listen(3030, function(){
    console.log("Server started on port 3030");
  })
```

### index.html
```
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ToDoList</title>
  </head>
  <body>
    <h1>Welcome ~ </h1>
    <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur reprehenderit distinctio magni voluptatum? Corporis accusamus, debitis atque aliquid voluptate mollitia voluptatum modi reiciendis error, ipsam ratione suscipit provident dolor incidunt! </p>
  </body>
  </html>
```

### npm i ejs 설치 후 app.js 코드 변경
```
const app = express();
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const today = new Date();
  const currentDay = today.getDay();
  let day = "";

  switch (currentDay) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    default:
      console.log("Error: current day is equal to " + currentDay);
      break;
  }
  // 이름 생성 후 views 폴더 밑에 이름.ejs 생성
  res.render("list", {kindOfDay: day})
})
```

### views 폴더 생성 > list.ejs 파일 생성
- list.html 에서 했던 작업을 이제는 list.ejs 파일로 하면 됩니다. 
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ToDoList</title>
</head>
<body>
  <% if(kindOfDay === "Saturday" || kindOfDay === "Sunday") { %>
    <h1 style="color: purple">It's a <%= kindOfDay %></h1>
  <% } else { %>
    <h1 style="color: blue">It's a <%= kindOfDay %></h1>
  <% } %>
  
</body>
</html>
```