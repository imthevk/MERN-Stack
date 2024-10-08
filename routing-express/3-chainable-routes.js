const express = require("express");
const app = express();

//Route methods can be chainable using app.route(path),it makes the code more readable and less prone to typos and redundancy
app
  .route("/home")
  .get((request, response, nextHandler) => {
    response.type("text/html");
    response.write("<!DOCTYPE html>");
    nextHandler();
  })
  .get((request, response, nextHandler) => {
    response.end(`
    <html lang="en"> 
    <head> 
    <meta charset="utf-8"> 
    <title>WebApp powered by ExpressJS</title> 
    </head> 
        <body role="application"> 
        <form method="post" action="/home"> 
            <input type="text" /> 
            <button type="submit">Send</button> 
        </form> 
        </body> 
    </html> 
    `);
  })
  .post((request, response, nextHandler) => {
    response.send("Got it!");
  });
app.listen(1338, () => console.log(`Web Server running on port 1338`));
