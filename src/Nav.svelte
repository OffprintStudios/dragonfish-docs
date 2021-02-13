<script lang="ts">
    import { url, isActive } from '@roxi/routify';
    import { GithubIcon } from 'svelte-feather-icons';

    const links = [
        ['./index', 'home'],
        ['./api', 'api'],
        ['./about', 'about'],
    ];
</script>

<nav>
    <div class="nav-box">
        <h3>DRAGONFISH</h3>
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
        background: linear-gradient(90deg, rgb(179, 63, 47), rgb(223, 101, 63));
        border-bottom: 1px solid rgba(255, 62, 0, 0.1);
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        margin-bottom: 2.5rem;

        div.nav-box {
            display: flex;
            flex-direction: row;
            align-items: center;
            color: whitesmoke;
            margin: 0 5rem 0 5rem;
            font-size: 0;

            h3 {
                font-size: 32px;
                margin: 0;
                font-weight: 300;
                letter-spacing: 5px;
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
                        background: rgb(179, 63, 47);

                        &:hover {
                            text-decoration: none;
                            cursor: default;
                        }
                    }

                    &:hover {
                        text-decoration: none;
                        background: rgb(179, 63, 47);
                    }
                }
            }
        }
    }
</style>
