<script>
 import axios from 'axios'
 import CreateTaskInput from "./CreateTaskInput.svelte";
 import Button from "./Button.svelte";
    import ListTodos from '../ListTodos.svelte';

 let taskInput="";
 


</script>
<h1>The text is {taskInput}</h1>

<CreateTaskInput on:taskInput={handleInput}/>
{#if result.length > 0}
   {console.log(result,"hi")}
   <ListTodos info={result} fromButton={true}/>
   {:else}
   {console.log("bye")}
{/if}