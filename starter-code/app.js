// SET UP

const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Our server is ready")
});

app.use(express.static(__dirname + "/public"));

// ROUTES

app.get("/", (request, response, next) => {
  response.sendFile(__dirname + "/views/home-page.html")
})

app.get("/about", (request, response, next) => {
  response.sendFile(__dirname + "/views/about.html")
})

app.get("/gallery", (request, response, next) => {
  response.sendFile(__dirname + "/views/gallery.html")
})
