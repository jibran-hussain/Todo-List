<script>
    import {createEventDispatcher} from 'svelte';
    const dispatch=createEventDispatcher();
    let task='';
    

    const sendToParent=()=>{
        dispatch("taskInput",{
             text:task
        })
    }

</script>

<form method="POST">
<label>Enter the Task
    <input on:keyup={sendToParent} type="text" placeholder="Task" bind:value={task}>
</label>
</form> 
