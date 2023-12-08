<script>
	import Header from "../Components/Header.svelte";
	import ListTodos from "../Components/listTodos.svelte";
	import Button from "../Components/CreateTask/Button.svelte";
    import CreateTaskInput from "../Components/CreateTask/CreateTaskInput.svelte";
	export let data;	
	let todo;
    let refreshTodos=false;
	console.log(refreshTodos)
</script>

<Header />
<CreateTaskInput on:taskInput={(event)=>todo=event.detail.text}/>
<Button on:todolist={(event)=>refreshTodos=event.detail.todos} text="Submit" description={todo} />

<ListTodos {refreshTodos} {data} />
