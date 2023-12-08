const pool=require('../config/db')

const executeQuery=async ()=>{
    try{
        const createQuery=`CREATE TABLE TODOLIST(Description Varchar(1000))`;
        await pool.query(createQuery);
        console.log('done successfully')
        pool.end();
    }catch(error){
        console.log(error)
        pool.end()
    }
}
// executeQuery()

const insertData=async(text)=>{
    try{
        const insertQuery=`INSERT INTO todolist (description) VALUES ($1)`
        await pool.query(insertQuery, [text]);
        console.log('executed successfully')
    }catch(error){
        console.log(error);
    }
}

const listAllTodos=async ()=>{
    try{
        const listQuery=`SELECT * FROM todolist`;
        const {rows}=await pool.query(listQuery);
       return rows;
    }catch(e){
        console.log(e)
    }
}

const deleteSingleTodo=async (description)=>{
    try{
    
        const deleteQuery=`DELETE FROM todolist WHERE description=$1`;
        await pool.query(deleteQuery,[description])
        
    }catch(error){
        console.log(error)
    }
}

module.exports={insertData,listAllTodos,deleteSingleTodo};