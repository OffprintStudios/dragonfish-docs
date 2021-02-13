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
    }

    :global(a) {
        color: var(--accent);
        text-decoration: none;
    }

    :global(.container) {
        max-width: var(--max-width);
        margin: 0 auto;
    }

    @media(max-width: 900px) {
        :global(.container) {
            max-width: var(--max-width-mobile);
        }
    }
</style>