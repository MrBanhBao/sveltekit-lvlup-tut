export async function load({ fetch, parent }) {
    const parent_data = await parent();
    console.log('latest ep: parent_data: ', parent_data);

    const res = await fetch('https://syntax.fm/api/shows/latest');
    const data = await res.json();
    console.log(data);
    return {
        latest_episode: data,
    }
}