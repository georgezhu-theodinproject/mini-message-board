const { Router } = require("express");
const messageController = require("../controllers/messageController");
const messageRouter = Router();

messageRouter.get("/", messageController.getMessages);

messageRouter.get("/new", messageController.createMessageGet);
messageRouter.post("/new", messageController.createMessagePost);

messageRouter.get("/messages/:id", messageController.getMessage);

module.exports = messageRouter;
