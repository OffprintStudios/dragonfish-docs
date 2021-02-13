<script lang="ts">
    import { url, isActive } from '@roxi/routify';
    import { InfoIcon, ChevronRightIcon } from 'svelte-feather-icons';
</script>

<ul class="nav">
    <li>
        <a href={$url('./introduction')} class:active={$isActive('./introduction')}>
            <span class="link-icon"><InfoIcon size="18" /></span>
            <span class="link-name">Introduction</span>
            <span class="end-point"><ChevronRightIcon size="18" /></span>
        </a>
    </li>
</ul>

<style lang="less">
    ul.nav {
        margin: 0 auto;
        list-style-type: none;
        width: 100%;

        li {
            text-align: left;
            width: 100%;
            margin-bottom: 0;
            border-bottom: 1px solid var(--borders);

            a {
                color: var(--text-color);
                display: flex;
                flex-direction: row;
                align-items: center;
                width: 100%;
                box-sizing: border-box;
                padding: 10px;
                margin-bottom: 0;
                font-size: 0;

                span.link-icon {
                    position: relative;
                }

                span.link-name {
                    position: relative;
                    top: 0.01rem;
                    margin-left: 0.5rem;
                    font-size: 16px;
                    flex: 1;
                }

                span.end-point {
                    position: relative;
                }

                &:hover {
                    background-color: var(--accent-hover);
                    color: whitesmoke;
                }

                &.active {
                    border-left: 5px solid var(--accent);
                }
            }

            &:first-child {
                border-top-left-radius: 4px;
                border-top-right-radius: 4px;
            }

            &:last-child {
                border-bottom: none;
                border-bottom-left-radius: 4px;
                border-bottom-right-radius: 4px;
            }
        }
    }
</style>
