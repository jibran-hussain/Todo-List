const express=require('express')
const router=express.Router();
const {createTodo,listTodo } =require('../controller/createTodo.js')

router.post('/createTodo',createTodo);
router.get('/list',listTodo);

module.exports=router