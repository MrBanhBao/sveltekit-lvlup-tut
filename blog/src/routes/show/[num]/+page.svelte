<script>
    export let data;
     $: ({episode, user} = data);
</script>

<h1>{episode.title}</h1>
<p>{user.email}</p>
{@html episode.html}
<a href="{episode.url}">Listen</a>