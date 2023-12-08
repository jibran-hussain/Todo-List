const express=require('express')
const router=express.Router();
const {createTodo,listTodo,deleteTodo } =require('../controller/createTodo.js')

router.post('/createTodo',createTodo);
router.get('/list',listTodo);
router.delete('/removeTodo',deleteTodo);

module.exports=router