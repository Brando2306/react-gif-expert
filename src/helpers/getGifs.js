
export const getGifs = async (category) => {
    const url = `http://api.giphy.com/v1/stickers/search?api_key=67gv4TdJTIxqHk9Snd8PSgvGAnpCsB4m&q=${category}&limit=20`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(item => ({
        id: item.id,
        title: item.title,
        url: item.images.downsized_medium.url,
    }))

    return gifs;
}