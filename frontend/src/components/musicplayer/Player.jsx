import React, { useEffect, useState } from 'react';

const Player = ({ song }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [audio, setAudio] = useState(null);

    useEffect(() => {
        if (song) {
            setIsPlaying(false);
            setAudio(new Audio(song.preview_url));
        }
    }, [song]);


    return (
        <div className='player-cont'>
            {song ? (
                <div>
                    <h2 className='name'>{song.name}</h2>
                    <p className='art-name'>Artists: {song.artists.join(', ')}</p>
                    {song.preview_url ? (
                        <div>
                            <audio className='player'
                                src={song.preview_url}
                                type="audio/mpeg"
                                controls
                                autoPlay
                            />
                        </div>
                    ) : (
                        <p>No preview available</p>
                    )}
                </div>
            ) : (
                <p>No song selected</p>
            )}
        </div>
    );
};

export default Player;