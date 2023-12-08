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

{#if refreshTodos}
    {#each refreshTodos as item}
       <SingleTodo on:toParentForDeletion={handleDeletion} description={item.description} />
    {/each}
        

{:else}
        {#each rows as item}
            <SingleTodo on:toParentForDeletion={handleDeletion} description={item.description} />
        {/each}
{/if}
