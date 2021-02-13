<script lang="ts">
    import { getContext } from 'svelte';

    const version = getContext('version');
</script>

<div class="container">
    <h1>Welcome to the Dragonfish Docs!</h1>
    { version }
</div>

