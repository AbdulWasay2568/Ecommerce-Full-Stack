import React, { useState, useEffect, useRef } from 'react';

const Songs = [
    { songName: "Mrama de tande na", artist: "Wajid Layaq", filepath: "./Songs/Mrama.mp3", coverPath: "./Cover/1.jpg", description: "Some description 1" },
    { songName: "Zama Khkulay janaana", artist: "Bilal Khatak, Ali Shah", filepath: "./Songs/zama khkulay janaana.mp3", coverPath: "./Cover/1.jpg", description: "Some description 2" },
    { songName: "Khanda Rata Kawi", artist: "Wajid Layaq", filepath: "./Songs/Khanda Rata Kawi.mp3", coverPath: "./Cover/2.jpg", description: "Some description 3" },
    { songName: "Wo De Sedge Wazirey", artist: "Artist 4", filepath: "./Songs/Wo De Sedge Wazirey.mp3", coverPath: "./Cover/3.jpg", description: "Some description 4" },
    { songName: "Hayye Oye", artist: "Artist 5", filepath: "./Songs/4.mp3", coverPath: "./Cover/4.jpg", description: "Some description 5" },
    { songName: "Dheere Dheere", artist: "Artist 6", filepath: "./Songs/5.mp3", coverPath: "./Cover/5.jpg", description: "Some description 6" },
    { songName: "Bekhayali", artist: "Artist 7", filepath: "./Songs/6.mp3", coverPath: "./Cover/6.jpg", description: "Some description 7" },
    { songName: "Fakira By Sanam", artist: "Artist 8", filepath: "./Songs/7.mp3", coverPath: "./Cover/7.jpg", description: "Some description 8" },
    { songName: "Jeene Laga Hu", artist: "Artist 9", filepath: "./Songs/8.mp3", coverPath: "./Cover/8.jpg", description: "Some description 9" },
    { songName: "Zara Zara By Jalraj", artist: "Artist 10", filepath: "./Songs/9.m4a", coverPath: "./Cover/9.jpg", description: "Some description 10" },
    { songName: "O Mere Sona re", artist: "Artist 11", filepath: "./Songs/10.mp3", coverPath: "./Cover/10.jpg", description: "Some description 11" }
];

export default function LeftBar() {
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const audioElement = useRef(new Audio(Songs[0].filepath));

    useEffect(() => {
        const audio = audioElement.current;

        // Event listeners for the audio element
        const updateTime = () => setCurrentTime(audio.currentTime);
        const updateDuration = () => setDuration(audio.duration);

        audio.addEventListener('timeupdate', updateTime);
        audio.addEventListener('loadedmetadata', updateDuration);

        return () => {
            audio.removeEventListener('timeupdate', updateTime);
            audio.removeEventListener('loadedmetadata', updateDuration);
        };
    }, []);

    useEffect(() => {
        audioElement.current.src = Songs[currentSongIndex].filepath;
        if (isPlaying) {
            audioElement.current.play();
        }
    }, [currentSongIndex, isPlaying]);

    const togglePlayPause = () => {
        if (isPlaying) {
            audioElement.current.pause();
        } else {
            audioElement.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const changeSong = (index: number) => {
        setCurrentSongIndex(index);
        setCurrentTime(0);
        setIsPlaying(true);
    };

    const handleProgressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newTime = (parseInt(event.target.value) / 100) * duration;
        audioElement.current.currentTime = newTime;
        setCurrentTime(newTime);
    };

    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    };

    return (
        <div className="leftBar">
            <div className="navBar">
                <div id="home">Home</div>
                <div id="search">Search</div>
            </div>

            <div className="library">
                <div className="songLibrary">
                    <div id="yourLibrary">Your Library</div>
                    <button id="plus">+</button>
                </div>

                <div className="artistsButton">
                    <button id="playLists">Playlists</button>
                    <button id="artists">Artists</button>
                </div>

                <div className="recents">
                    <div id="search">Search</div>
                    <div id="recents">Recents</div>
                </div>

                <div className="songsPlayListContainer">
                    {Songs.map((song, index) => (
                        <div
                            key={index}
                            id="songsPlayList"
                            onClick={() => changeSong(index)}
                        >
                            <img src={song.coverPath} alt={song.songName} />
                            <div className="songPlayListDescription">
                                <p id="playListName">{song.songName}</p>
                                <p id="playListDescription">{song.artist}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="playerControls">
                <div id="songPic">
                    <img src={Songs[currentSongIndex].coverPath} alt="current song" />
                </div>
                <div>
                    <p id="masterSongName">{Songs[currentSongIndex].songName}</p>
                    <p id="masterArtists">{Songs[currentSongIndex].artist}</p>
                </div>
                <div>
                    <button id="previous" onClick={() => changeSong((currentSongIndex - 1 + Songs.length) % Songs.length)}>
                        Previous
                    </button>
                    <button id="masterPlay" onClick={togglePlayPause}>
                        {isPlaying ? 'Pause' : 'Play'}
                    </button>
                    <button id="next" onClick={() => changeSong((currentSongIndex + 1) % Songs.length)}>
                        Next
                    </button>
                </div>
                <div id="gif" style={{ opacity: isPlaying ? 1 : 0 }}>
                    {/* Add gif image or animation here */}
                </div>
                <input
                    id="Progressbar"
                    type="range"
                    value={(currentTime / duration) * 100 || 0}
                    onChange={handleProgressChange}
                />
                <div id="currentTime">{formatTime(currentTime)}</div>
                <div id="duration">{formatTime(duration)}</div>
            </div>
        </div>
    );
}
