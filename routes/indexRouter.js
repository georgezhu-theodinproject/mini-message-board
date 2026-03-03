// routes/indexRouter.js
const { Router } = require("express");

const messages = [
  {
    id: crypto.randomUUID(),
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    id: crypto.randomUUID(),
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

const indexRouter = Router();

indexRouter.get("/", (req, res) => res.render("index", { messages }));

indexRouter.get("/messages/:messageId", (req, res) => {
  const id = req.params.messageId;
  res.render("message", {
    message: messages.find((message) => message.id === id),
  });
});

indexRouter.get("/new", (req, res) => res.render("form"));

indexRouter.post("/new", (req, res) => {
  const messageText = req.body.text;
  const messageUser = req.body.user;
  messages.push({
    id: crypto.randomUUID(),
    text: messageText,
    user: messageUser,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = indexRouter;
