<script lang="ts">
    import { auth, type Auth } from "$lib/stores/app";
    import { onMount } from "svelte";
    let account: Auth = {} as Auth;
    onMount(() => {
        auth.subscribe((value) => {
            console.log(value);
            // account = value;
        });
    });
    // console.log(account);   
</script>

<main>
    <h1>Page</h1>
    <!-- <p>{JSON.stringify(account)}</p> -->
</main>
