<style lang="less">
    @import (css) url('https://fonts.googleapis.com/css?family=Josefin+Sans:300,400,700');
    @import (css) url('https://fonts.googleapis.com/css?family=Raleway:300,400,500,700');

    :global(:root) {
        /* Colors */
        --accent: rgb(179, 63, 47);
        --accent-hover: rgb(223, 101, 63);
        --background: #fbfbfb;
        --dropshadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        --text-color: black;
        --borders: grey;
        --code-background: #f0f0f0;

        /* Widths */
        --max-width: 90%;
        --max-width-mobile: 97.5%;
        --title-spacing: 5px;
    }

    :global(html, body) {
        position: relative;
        width: 100%;
        height: 100%;
    }

    :global(body) {
        color: #333;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Raleway', sans-serif;
        background-color: #ffffff;
        background-image: url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23a64837' fill-opacity='0.15'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    }

    :global(a) {
        color: var(--accent);
        text-decoration: none;
    }
</style>
