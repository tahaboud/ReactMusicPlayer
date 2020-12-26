import React, { useState, useRef } from "react";
// Import Style
import "./styles/app.scss";
// Adding components
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
import Nav from "./components/Nav"
// Import util
import data from "./data"

function App() {
  // Ref
  const audioRef = useRef(null);
  // State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  });
  const [libraryStatus, setLibraryStatus] = useState(false)
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    // Calculate Percentage
    const roundedCurrent = Math.round(current)
    const roundedDuration = Math.round(duration)
    const animationPercentage = Math.round((roundedCurrent / roundedDuration) * 100)
    setSongInfo({
      ...songInfo,
      currentTime: current,
      duration,
      animationPercentage,
    })
  };
  const songEndHandler = async () => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id)
    await setCurrentSong(songs[(currentIndex + 1) % songs.length])
    if (isPlaying) audioRef.current.play();
  }
  return (
    <div className={`app ${libraryStatus ? "library-active" : ""}`}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} />
      <Player setCurrentSong={setCurrentSong} setSongs={setSongs} songs={songs} songInfo={songInfo} setSongInfo={setSongInfo} audioRef={audioRef} isPlaying={isPlaying} setIsPlaying={setIsPlaying} currentSong={currentSong} />
      <Library libraryStatus={libraryStatus} isPlaying={isPlaying} audioRef={audioRef} songs={songs} setSongs={setSongs} setCurrentSong={setCurrentSong} />
      <audio onEnded={songEndHandler} onTimeUpdate={timeUpdateHandler} onLoadedMetadata={timeUpdateHandler} src={currentSong.audio} ref={audioRef}></audio>
    </div>
  );
}

export default App;
