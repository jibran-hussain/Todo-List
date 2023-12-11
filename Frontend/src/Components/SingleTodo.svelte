<script>
    import { createEventDispatcher } from 'svelte';
    import axios from 'axios'
    import Button from '../Components/CreateTask/Button.svelte'
    export let description;
    export let id;
    let newTodo="";
    let isEditable=false;

    
    const disptach=createEventDispatcher();

    const handleDelete=()=>{
        console.log("At single todo")
        disptach('toParentForDeletion',{
            todoToDelete:description
        })
        
    }


    const handleUpdate=async ()=>{
       try{
            const options={
                method:"PUT",
                url:`http://localhost:8000/api/update`,
                data:{
                    id,
                    newDescription:newTodo
                }                      
            }
            await axios.request(options); 
            isEditable=false;
            description=newTodo;
            
       }catch(error){
            console.log(error)
       } 
    }
</script>

    <tr>
    {#if isEditable}
         <td class="update-field">
            <form>
                <input type="text" bind:value={newTodo} />
             </form>
         </td>
         <td><Button text="UPDATE" handleOnClick={handleUpdate} /></td>
    {:else}
        <td class="description"><h3>{description}</h3></td>
        <td><Button text="DELETE" handleOnClick={handleDelete} /></td>
        <td><Button text="EDIT" handleOnClick={()=>isEditable=true} /></td>
    {/if}

</tr>


<style>
    /* .single-todo-container{
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-color: aqua;
        padding: 1px 25px;
        margin: 10px;
        width: 70%;
        margin: auto;
    } */
    td{
        border: 1px solid black;
        border-collapse: collapse;
       
    }
    .description{
        padding-left: 20px;
    }
    .update-field{
        padding:1em;
    }
   
</style>