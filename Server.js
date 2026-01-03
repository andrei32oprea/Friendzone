const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const users = [];
const likes = [];
const messages = [];

app.get("/", (req, res) => {
  res.send("Friendzone is LIVE ❤️");
});

app.post("/register", (req, res) => {
  const user = req.body;
  users.push(user);
  res.json({ success: true });
});

app.get("/users", (req, res) => {
  res.json(users);
});

app.post("/like", (req, res) => {
  likes.push(req.body);
  res.json({ match: true });
});

app.post("/message", (req, res) => {
  messages.push(req.body);
  res.json({ sent: true });
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log("Server running on port " + 
