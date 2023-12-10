const express = require("express");
const router = express.Router();
const {
  createTodo,
  listTodo,
  deleteTodo,
  updateTodo,
} = require("../controller/createTodo.js");

router.post("/createTodo", createTodo);
router.get("/list", listTodo);
router.delete("/removeTodo", deleteTodo);
router.put("/update", updateTodo);

module.exports = router;
