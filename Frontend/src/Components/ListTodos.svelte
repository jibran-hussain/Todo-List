<script>
    import axios from "axios";
    import SingleTodo from "./SingleTodo.svelte";

    export let refreshTodos;
    export let data;
    let {rows}=data;
  
</script>

{#if refreshTodos}
    {#each refreshTodos as item}
       <SingleTodo description={item.description} />
    {/each}
        

{:else}
        {#each rows as item}
            <SingleTodo description={item.description} />
        {/each}
{/if}
