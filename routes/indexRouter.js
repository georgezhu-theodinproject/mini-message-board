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
indexRouter.get("/new", (req, res) => res.render("new"));

module.exports = indexRouter;
