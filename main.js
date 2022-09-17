const loadVideos = async() => {
    const url = await `./data.json`;
    const res = await fetch(url);
    const data = await res.json();
}
