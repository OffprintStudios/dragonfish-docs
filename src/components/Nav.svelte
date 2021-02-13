<script lang="ts">
    import { getContext } from 'svelte';
    import { url, isActive } from '@roxi/routify';
    import { GithubIcon } from 'svelte-feather-icons';

    const version = getContext('version');
    const links = [
        ['./index', 'home'],
        ['./api/introduction', 'api'],
        ['./about', 'about'],
    ];
</script>

<nav>
    <div class="nav-box">
        <h3>DRAGONFISH</h3>
        <h4>&mdash; ver. { version }</h4>
        <div class="nav-list">
            <a class="nav-item" href="https://github.com/OffprintStudios/dragonfish"><GithubIcon color="whitesmoke" size="18" /></a>
            {#each links.reverse() as [path, name]}
                <a class="nav-item" href={$url(path)} class:selected={$isActive(path)}>{name}</a>
            {/each}
        </div>
    </div>
</nav>

<style lang="less">
    nav {
        width: 100%;
        background: linear-gradient(90deg, var(--accent), var(--accent-hover));
        box-shadow: var(--dropshadow);
        margin-bottom: 2.5rem;

        div.nav-box {
            display: flex;
            flex-direction: row;
            align-items: center;
            color: whitesmoke;
            max-width: var(--max-width);
            margin: 0 auto;
            font-size: 0;

            h3 {
                font-size: 32px;
                margin: 0;
                font-weight: 400;
                letter-spacing: var(--title-spacing);
            }

            h4 {
                font-size: 18px;
                font-weight: 300;
                font-style: italic;
                margin: 0;
            }

            div.nav-list {
                flex: 1;
                text-align: right;

                a.nav-item {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    float: right;
                    height: 65px;
                    padding-left: 10px;
                    padding-right: 10px;
                    color: whitesmoke;
                    font-size: 18px;
                    line-height: 32px;

                    &.selected {
                        background: var(--accent);

                        &:hover {
                            text-decoration: none;
                            cursor: default;
                        }
                    }

                    &:hover {
                        text-decoration: none;
                        background: var(--accent);
                    }
                }
            }
        }

        @media (max-width: 900px) {
            div.nav-box {
                max-width: var(--max-width-mobile);
            }
        }
    }
</style>
