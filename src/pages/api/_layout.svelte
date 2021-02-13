<script>
    import ApiNav from '../../components/ApiNav.svelte';
</script>

<div class="container">
    <div class="row">
        <div class="three columns">
            <ApiNav />
        </div>
        <div class="nine columns">
            <slot />
        </div>
    </div>
</div>
