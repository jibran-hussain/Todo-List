const {Pool}= require('pg');

const pool=new Pool({
    user:"postgres",
    host:'localhost',
    database:'School',
    password:"postgres",
    port:5432,
})

const createQuery=`CREATE TABLE TODOLIST(Description Varchar(1000))`;

const executeQuery=async ()=>{
    try{
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
listAllTodos()
module.exports={insertData,listAllTodos};