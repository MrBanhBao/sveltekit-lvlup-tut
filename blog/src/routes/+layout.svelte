<script>
    import { goto } from '$app/navigation';
    // lifecycle, afterNavigation, beforeNavigate
    // disableScrollHandling -> disable default scroll handling
    // goto -> change route via code 
    // invalidate -> load function on active page re-run
    // invalidateAll -> all load function to rerun
    // prealoadCode -> load js code for giving route
    // preloadData -> load data fromload function for given routes
    
    import { PUBLIC_API_LUT_KEY } from '$env/static/public';
    console.log('PUBLIC', PUBLIC_API_LUT_KEY);
    import {browser, building, dev, version} from '$app/environment';
    import {navigating} from '$app/stores';
    import Header from './Header.svelte';
    import Footer from './Footer.svelte';
    import './styles.css'
	import Episodes from './Episodes.svelte';

    export let data;
    $: ({ all_episodes } = data)

    console.log(browser, building, dev, version);
    // brwoser -> bool, if app is running in browser
    // building -> bool, true if build for production
    // dev -> bool, if in development
    // version -> config.kit.version.name
</script>

<Header />

{#if !!$navigating}
    <div class="loading">Loading</div>
{/if}

<main>
    <div class="main">
        <slot /> 
        <button on:click={() => goto('/contact')}>Change</button>
    </div>
    <aside>
        <Episodes episodes={all_episodes}></Episodes>
    </aside>
</main>

<Footer />

<style lang="postcss">
    main {
        display: grid;
        grid-template-columns: 300px 1fr;
        gap: 20px;
    }

    aside {
        order: -1;
    }

    .loading {
        position: fixed;
        inset: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: blue;
        color: white;
    }
</style>