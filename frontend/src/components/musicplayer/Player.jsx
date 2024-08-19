import React, { useState, useRef, useEffect } from 'react';

const Player = ({ song }) => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);

    useEffect(() => {
        if (song) {
            setIsPlaying(false);
            audioRef.current.src = song.preview_url;
        }
    }, [song]);

    const handlePlayPause = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleMute = () => {
        if (isMuted) {
            audioRef.current.volume = 1;
        } else {
            audioRef.current.volume = 0;
        }
        setIsMuted(!isMuted);
    };

    return (
        <div className="absolute z-40 bottom-0 w-[98%] pt-2 rounded-lg h-[15vh] bg-[#0F0F0F] flex">
            <audio ref={audioRef} />
            <div className="about w-[25%] flex items-start pl-4 font-semibold  justify-center flex-col h-[100%] ">
                <h2 className='name text-[#fff]'>{song?.name}</h2>
                <p className='art-name text-[#999]'>Artists: {song?.artists.join(', ')}</p>
            </div>
            <div className="side w-[65%] h-[50%] flex flex-col rounded-lg">
                <div className="top flex ml-[30%] gap-4 items-center">
                    <div className="back cursor-pointer">
                        <svg
                            data-encore-id="icon"
                            role="img"
                            aria-hidden="true"
                            viewBox="0 0 16 16"
                            className="Svg-sc-ytk21e-0 dYnaPI"
                            width="24"
                            height="24"
                            fill="#fff"
                        >
                            <path d="M3.3 1a.7.7 0 0 1 .7.7v5.15l9.95-5.744a.7.7 0 0 1 1.05.606v12.575a.7.7 0 0 1-1.05.607L4 9.149V14.3a.7.7 0 0 1-.7.7H1.7a.7.7 0 0 1-.7-.7V1.7a.7.7 0 0 1 .7-.7h1.6z" />
                        </svg>
                    </div>
                    <div className="play cursor-pointer" onClick={handlePlayPause} >
                        {isPlaying ? (
                            <div className='play-cont h-12 w-12 rounded-full flex justify-center items-center bg-[#fff]'>
                                <svg width="25" height="25" fill="black">
                                    <path d="M6 5h2v14H6z" />
                                    <path d="M14 5h2v14h-2z" />
                                </svg>
                            </div>
                        ) : (
                            <div className='play-cont h-12 w-12 rounded-full flex justify-center items-center bg-[#fff]'>
                                <svg width="25" height="25" fill="black">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>
                        )}
                    </div>
                    <div className="forward cursor-pointer">
                        <svg
                            data-encore-id="icon"
                            role="img"
                            aria-hidden="true"
                            viewBox="0 0 16 16"
                            className="Svg-sc-ytk21e-0 dYnaPI"
                            width="24"
                            height="24"
                            fill="#fff"
                        >
                            <path
                                d="M12.7 1a.7.7 0 0 0-.7.7v5.15L2.05 1.107A.7.7 0 0 0 1 1.712v12.575a.7.7 0 0 0 1.05.607L12 9.149V14.3a.7.7 0 0 0 .7.7h1.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-1.6z"
                            />
                        </svg>
                    </div>
                    <div className="loop cursor-pointer"></div>
                </div>
                <div className="bottom flex ml-[20%] items-center">
                    <div className="bar mt-6 rounded-full border-2 border-white w-[45%] "></div>
                </div>
            </div>
            <div onClick={handleMute} className="side2  w-[10%]  h-[100%] flex gap-2 justify-center items-center rounded-lg">
            <div className="audio-icon cursor-pointer">
                <svg
                    width="20"
                    height="20"
                    fill="#fff"
                    viewBox="0 0 16 16"
                    className="volume-icon"
                >
                    {isMuted ? (
                        <path d="M11.5 13.614a5.752 5.752 0 0 0 0-11.228v1.55a4.252 4.252 0 0 1 0 8.127v1.55z" />
                    ) : (
                        <path d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 0 1 0 4.88z" />
                    )}
                </svg>
            </div>
            <div className="sound border-4 rounded-full border-white w-[50%]">
            </div>
        </div>
        </div>
    );
};

export default Player;