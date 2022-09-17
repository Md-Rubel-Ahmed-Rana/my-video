// load all the videos from json file
const loadVideos = async() => {
    const url = await `./data.json`;
    const res = await fetch(url);
    const data = await res.json();
    showVideos(data.videos)
}

// display videos one by one to the UI
const showVideos = (videos) => {
    let videoNumber = 0;
    const videoFile = document.getElementById("video-file");
    videoFile.src = videos[videoNumber].videoFile;

    const songName = document.getElementById("song-name");
    songName.innerText = videos[videoNumber].videoName

    const singerName = document.getElementById("singer-name");
    singerName.innerText = videos[videoNumber].singer
    const developer = document.getElementById("developer");
    developer.innerText = videos[videoNumber].developer
    const playNext = () => {

    }
}

loadVideos()
