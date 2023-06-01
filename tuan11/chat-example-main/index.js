const express = require("express");

const app = require("express")();
app.use(express.static("public"));

const http = require("http").Server(app);
const io = require("socket.io")(http);

const { faker } = require("@faker-js/faker");

const port = 3000;

app.get("/", (_req, res) => {
  res.sendFile(__dirname + "public/index.html");
});

const users = ["general"];
const general_chat_msgs = []
const private_chat_msgs = []

io.on("connection", (socket) => {
  // generate a fake name
  const username = faker.person.firstName();
  users.push(username);
  
  // When a new user joins
  // server emit event to only one client to set name
  socket.emit("welcome", username);
  // update users list for all users
  io.emit("updateUsers", users);
  // server notifies all clients that there is a new user
  io.emit("join", username);
  // char room initalization for the user
  socket.emit("init", general_chat_msgs)

  
  // When an user send a message
  // each client send a message
  socket.on("chat", (to, message) => {
    if (to == "general") {
      general_chat_msgs.push({from: username, message: message})
      io.emit("msg", username, to, message);
    } else {
      private_chat_msgs.push({from: username, to: to, message: message})
      io.emit("msg", username, to, message);
    }
  });

  // When an user change chat room
  socket.on("changeRoom", (to, user) => {
    if (to == "general") {
      socket.emit("init", general_chat_msgs)
    } else {
      let private_msgs = []
      private_chat_msgs.forEach(msg => {
        if (msg.from == user && msg.to == to || msg.from == to && msg.to == user) {
          private_msgs.push({from: msg.from, message: msg.message})
        }
      })
      socket.emit("init", private_msgs)
    }
  })
  socket.on("disconnect", (reason) => {

    io.emit("leave", username, reason);

    // remove user from users array
    users.splice(users.indexOf(username), 1);
    io.emit("updateUsers", users);
  
  });
});

http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});
