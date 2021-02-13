<script lang="ts">
    import { BookOpenIcon, CloudIcon, GlobeIcon } from 'svelte-feather-icons';
</script>

<div class="container mx-auto">
    <h1 class="title text-6xl tracking-widest text-center">DRAGONFISH</h1>
    <h2 class="subtitle text-3xl tracking-wide text-center left-16 relative">それなりに火をつける</h2>
</div>

<div class="container grid grid-cols-3 mx-auto mt-20 border rounded-md p-4 border-gray-500 shadow-2xl info-row">
    <div class="flex flex-col text-white border-r border-white pr-4">
        <h3 class="text-2xl mb-3 text-center">
            <span class="inline-block relative top-1">
                <BookOpenIcon size="24" />
            </span>
            For Readers, By Readers
        </h3>
        <p class="text-lg text-justify flex-1">
            Dragonfish is an open source project built by a dedicated team of authors, readers, and everything in between.
        </p>
        <div class="text-center w-full">
            <button class="mt-5 p-3 uppercase text-xs border border-orange-50 rounded-md font-bold tracking-wider"> Learn More </button>
        </div>
    </div>
    <div class="flex flex-col text-white border-r border-white pl-4 pr-4">
        <h3 class="text-center text-2xl mb-3">
            <span class="inline-block relative top-1">
                <CloudIcon size="24" />
            </span>
            A Flexible API
        </h3>
        <p class="text-lg text-justify flex-1">
            Fast, flexible, and most importantly <i>free</i>, Dragonfish aims to make finding the content you want easy and intuitive.
        </p>
        <div class="text-center w-full">
            <button class="mt-5 p-3 uppercase text-xs border border-orange-50 rounded-md font-bold tracking-wider"> Learn More </button>
        </div>
    </div>
    <div class="flex flex-col text-white pl-4">
        <h3 class="text-center text-2xl mb-3">
            <span class="inline-block relative top-1">
                <GlobeIcon size="24" />
            </span>
            All Things Offprint
        </h3>
        <p class="text-lg text-justify flex-1">Dragonfish is the backbone of Offprint, and is plugged into the entire Offprint experience.</p>
        <div class="text-center w-full">
            <button class="mt-5 p-3 uppercase text-xs border border-orange-50 rounded-md font-bold tracking-wider"> Learn More </button>
        </div>
    </div>
</div>

<style lang="less">
    div.info-row {
        background: var(--accent-hover);
    }

    h1.title {
        color: black;
    }

    h2.subtitle {
        color: black;
    }
</style>
