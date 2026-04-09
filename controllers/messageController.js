const db = require("../db/queries");

async function getMessages(req, res) {
  const messages = await db.getMessages();
  console.log("Messages: ", messages);
  res.render("index", { messages });
}

async function createMessageGet(req, res) {
  res.render("form");
}

async function createMessagePost(req, res) {
  const { text, user } = req.body;
  await db.insertMessage(text, user);
  res.redirect("/");
}

module.exports = {
  getMessages,
  createMessageGet,
  createMessagePost,
};
