<script lang="ts">
    import { setContext } from 'svelte';
    import { Router } from '@roxi/routify';
    import { routes } from '../.routify/routes';

    import Global from './Global.svelte';

    export let version: string;
    setContext('version', version);
</script>

<Global />
<Router {routes} />

<style global lang="postcss">
    /* purgecss start ignore */
    @tailwind base;
    @tailwind components;
    /* purgecss end ignore */
    
    @tailwind utilities;
</style>
