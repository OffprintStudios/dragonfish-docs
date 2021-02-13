<script lang="ts">
    import { url, isActive } from '@roxi/routify';

    const links = [
        ['./index', 'Home'],
        ['./about', 'About'],
    ];
</script>

<style lang="less">
    nav {
        border-bottom: 1px solid rgba(255, 62, 0, 0.1);
        font-weight: 300;
        padding: 0 1em;
    }
  
    ul {
        margin: 0;
        padding: 0;

        &::after {
            content: "";
            display: block;
            clear: both;
        }
    }
  
    li {
        display: block;
        float: left;
    }
  
    .selected {
        position: relative;
        display: inline-block;

        &::after {
            position: absolute;
            content: "";
            width: calc(100% - 1em);
            height: 2px;
            background-color: rgb(255, 62, 0);
            display: block;
            bottom: -1px;
        }
    }
  
    a {
        text-decoration: none;
        padding: 1em 0.5em;
        display: block;
    }
  </style>

<ul>
    {#each links as [path, name]}
        <li><a href={$url(path)} class:selected={$isActive(path)}>{name}</a></li>
    {/each}
</ul>