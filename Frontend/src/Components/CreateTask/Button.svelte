<script>
    export let text;
    export let handleOnClick;
</script>

<button on:click={handleOnClick}>{text}</button>

<style>
    button{
        background-color: #2c974b;
        color: white;
        margin:0.7em;
        padding: 0.5em;
        border-radius: 10%;
    }
</style>