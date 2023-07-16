export async function load({ fetch,setHeaders }) {
    const all_ep_res = await fetch('https://syntax.fm/api/shows');
    const all_ep_data = await all_ep_res.json();
    
    setHeaders({
        'Cache-Control': 'max-age=60'
    })

    return {
        all_episodes: all_ep_data
    }
}