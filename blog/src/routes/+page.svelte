<script>
    import Test from '$lib/Test.svelte';
    import '$db/start'
    export let data;

    $: ({ latest_episode } = data);
</script>

<h3>Latest Episode: {latest_episode.title}</h3>