<script>
    import { createEventDispatcher } from 'svelte';
    import Button from '../Components/CreateTask/Button.svelte'
    export let description;
    
    const disptach=createEventDispatcher();

    const handleDelete=()=>{
        console.log("At single todo")
        disptach('toParentForDeletion',{
            todoToDelete:description
        })
    }

</script>

<div class="single-todo-container">
    <h3>{description}</h3>
    <Button text="+" handleOnClick={handleDelete} />
</div>

<style>
    .single-todo-container{
        background-color: aqua;
    }
</style>