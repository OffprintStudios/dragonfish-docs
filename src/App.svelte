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
