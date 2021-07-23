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