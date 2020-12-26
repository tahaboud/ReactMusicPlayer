import React from "react";
import LibrarySong from "./LibrarySong";


const Library = ({ songs, setCurrentSong, audioRef, isPlaying, setSongs, libraryStatus }) => {
    return (
        <div className={`library ${libraryStatus ? 'active-library' : ''}`}>
            <h2>Library</h2>
            <div className="library-songs">
                {songs.map((song) => (
                    <LibrarySong key={song.id} id={song.id} setSongs={setSongs} isPlaying={isPlaying} audioRef={audioRef} songs={songs} song={song} setCurrentSong={setCurrentSong} />
                ))}
            </div>
        </div>
    )
}

export default Library;
