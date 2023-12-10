const {
  insertData,
  listAllTodos,
  deleteSingleTodo,
  updateSingleTodo,
} = require("../models/todomodel.js");

const createTodo = async (req, res) => {
  try {
    const text = req.body.text;
    await insertData(text);
    res.status(201).json({
      message: `Todo added successfully`,
    });
  } catch (error) {
    console.log(error);
  }
};

const listTodo = async (req, res) => {
  try {
    const rows = await listAllTodos();
    res.json({ rows });
  } catch (error) {
    console.log(error);
  }
};

const deleteTodo = async (req, res) => {
  try {
    const todoDescription = req.body.todo;
    await deleteSingleTodo(todoDescription);
    res.json({ message: "This todo has been deleted successfully" });
  } catch (error) {
    console.log(error);
  }
};

const updateTodo = async (req, res) => {
  try {
    const { id, newDescription } = req.body;
    await updateSingleTodo(id, newDescription);
    res.json({
      message: "Todo Updated Successfully",
    });
  } catch (e) {
    console.log(e);
  }
};

module.exports = { createTodo, listTodo, deleteTodo, updateTodo };
