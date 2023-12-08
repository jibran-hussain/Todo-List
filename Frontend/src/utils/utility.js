const getTodos=async()=>{
    try{
          const response=await axios.get(`http://localhost:8000/api/list`);
          result= response.data.rows;
          // console.log(reslult,'hhhhhhhhhhhh')
    }catch(e){
       console.log(e);
    }
  }

const addTodoHandler=async ()=>{
    try{
     console.log(`the description is ${description}`)
      const options={
      method:"POST",
      url:`http://localhost:8000/api/createTodo`,
      headers:{
         "Content-Type":"application/json",
         Accept:"application/json"
      },
      data:{
         text:description
      }
    }
    await axios.request(options);
    console.log('post request done successfully');
      await getTodos();
      sendToParent()
    }catch(e){
      console.log(e)
    }
 }

 module.exports=addTodoHandler;