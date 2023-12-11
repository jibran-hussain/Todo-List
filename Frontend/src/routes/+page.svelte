<script>
  import '../global.css'
	import axios from "axios";
	import Header from "../Components/Header.svelte";
  import ListTodos from "../Components/ListTodos.svelte";
	import Button from "../Components/CreateTask/Button.svelte";
  import CreateTaskInput from "../Components/CreateTask/CreateTaskInput.svelte";
	export let data;	
	let todo;
  let refreshTodos=false;

	const getTodos=async()=>{
  try{
        const response=await axios.get(`http://localhost:8000/api/list`);
        refreshTodos= response.data.rows;
  }catch(e){
     console.log(e);
  }
}


const addTodoHandler=async ()=>{
   try{
     const options={
     method:"POST",
     url:`http://localhost:8000/api/createTodo`,
     headers:{
        "Content-Type":"application/json",
        Accept:"application/json"
     },
     data:{
        text:todo
     }
   }
   await axios.request(options);
   console.log('post request done successfully');
     await getTodos();
   }catch(e){
     console.log(e)
   }
}


const deleteTodo=async (event)=>{
        try{
			console.log('hi there from you grandparent')
            const options={
                method:"DELETE",
                url:`http://localhost:8000/api/removeTodo`,
                data:{
                    todo:event.detail.todoToDelete
                }
            }

           await axios.request(options);
		   await getTodos();
        }catch(error){
            console.log(error);
        }
    }
</script>

<Header />

<div class="todo-container">
    <div class="create-todo">
      <CreateTaskInput on:taskInput={(event)=>todo=event.detail.text} />
      <Button text="Submit"  handleOnClick={addTodoHandler} />
    </div>
    <div class="list-todos">
       <ListTodos on:toParentForDeletion={deleteTodo}  {refreshTodos} {data}  />
    </div>
</div>


<style>
  .todo-container{
      
  }
  .create-todo{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .list-todos{
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style> 
