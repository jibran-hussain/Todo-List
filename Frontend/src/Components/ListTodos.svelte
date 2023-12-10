<script>
    import { createEventDispatcher } from "svelte";
    import SingleTodo from "./SingleTodo.svelte";

    export let refreshTodos;
    export let data;
    let {rows}=data;

    const dispatch=createEventDispatcher();
    const handleDeletion=(event)=>{
        console.log("now at listtodo")
        dispatch('toParentForDeletion',{
            todoToDelete:event.detail.todoToDelete
        })
    }
  
  
</script>
<table > 
    <tr>
        <th>Description</th>
        <th>Edit</th>
        <th>Delete</th>
    </tr>
    {#if refreshTodos}
    {#each refreshTodos as item}
       <SingleTodo on:toParentForDeletion={handleDeletion}  description={item.description} id={item.id}/>
    {/each}
        

{:else}
        {#each rows as item}
            <SingleTodo on:toParentForDeletion={handleDeletion} description={item.description} id={item.id} />
        {/each}
{/if}
</table>

<style>
    table,th{
        border: 1px solid black;
        border-collapse: collapse;
        padding: 1em;
    }
</style>

