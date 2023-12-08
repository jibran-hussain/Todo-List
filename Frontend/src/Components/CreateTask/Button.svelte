<script>
    export let text;
    export let handleOnClick;
    console.log('hi')
</script>

<button on:click={handleOnClick}>{text}</button>