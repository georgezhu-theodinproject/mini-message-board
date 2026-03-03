// routes/indexRouter.js
const { Router } = require("express");

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

const indexRouter = Router();

indexRouter.get("/", (req, res) => res.render("index", { messages }));
indexRouter.get("/new", (req, res) => res.render("form"));
indexRouter.post("/new", (req, res) => {
  const messageText = req.body.text;
  const messageUser = req.body.user;
  messages.push({ text: messageText, user: messageUser, added: new Date() });
  res.redirect("/");
});

module.exports = indexRouter;
