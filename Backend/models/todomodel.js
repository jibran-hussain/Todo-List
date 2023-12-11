const pool = require("../config/db");

const executeQuery = async () => {
  try {
    const createQuery = `CREATE TABLE TODOLIST(id SERIAL PRIMARY KEY ,Description Varchar(1000))`;
    await pool.query(createQuery);
    console.log("done successfully");
  } catch (error) {
    console.log(error);
  }
};
// executeQuery();

const insertData = async (text) => {
  try {
    const insertQuery = `INSERT INTO todolist (description) VALUES ($1)`;
    await pool.query(insertQuery, [text]);
    console.log("executed successfully");
  } catch (error) {
    console.log(error);
  }
};

const listAllTodos = async () => {
  try {
    const listQuery = `SELECT * FROM todolist`;
    const { rows } = await pool.query(listQuery);
    return rows;
  } catch (e) {
    console.log(e);
  }
};

const deleteSingleTodo = async (description) => {
  try {
    const deleteQuery = `DELETE FROM todolist WHERE description=$1`;
    await pool.query(deleteQuery, [description]);
  } catch (error) {
    console.log(error);
  }
};

const updateSingleTodo = async (id, newDescription) => {
  try {
    const updateQuery = `UPDATE todolist SET description=$1 WHERE id=$2`;
    await pool.query(updateQuery, [newDescription, id]);
    console.log("updated Successfully");
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  insertData,
  listAllTodos,
  deleteSingleTodo,
  updateSingleTodo,
};
