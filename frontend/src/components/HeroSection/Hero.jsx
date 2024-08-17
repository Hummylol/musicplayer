import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import MoreArtists from './MoreArtists';

const Hero = () => {
  const [artists, setArtists] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const [charts, setCharts] = useState([]);

  useEffect(() => {
    // Fetch popular artists
    axios.get('https://musicplayer-6hmo.onrender.com/api/artists/popular')
      .then(response => {
        setArtists(response.data.slice(0, 6));
      })
      .catch(error => {
        console.error('Error fetching artists:', error);
      });

    // Fetch popular playlists
    axios.get('https://musicplayer-6hmo.onrender.com/api/playlists/popular') // Update this URL to your backend URL
      .then(response => {
        setPlaylists(response.data);
      })
      .catch(error => {
        console.error('Error fetching playlists:', error);
      });



  }, []);

  return (
    <BrowserRouter>

      <nav className='flex w-[97%]  ml-4 justify-between bg-[#0F0F0F] rounded-t-lg items-center h-[10%]'>
        <div className="arrow flex gap-2 ml-3 opacity-100">
          <div className="icon-container">
            <svg
              viewBox="0 0 16 16"
              fill="currentColor"
              className="icon cursor-pointer"
            >
              <path d="M11.03.47a.75.75 0 0 1 0 1.06L4.56 8l6.47 6.47a.75.75 0 1 1-1.06 1.06L2.44 8 9.97.47a.75.75 0 0 1 1.06 0z"></path>
            </svg>
          </div>

          <div className="icon-container">
            <svg
              data-encore-id="icon"
              role="img"
              aria-hidden="true"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="icon cursor-pointer"
            >
              <path d="M4.97.47a.75.75 0 0 0 0 1.06L11.44 8l-6.47 6.47a.75.75 0 1 0 1.06 1.06L13.56 8 6.03.47a.75.75 0 0 0-1.06 0z"></path>
            </svg>
          </div>

        </div>
        <div className="auth flex gap-8 mr-5">
          <button className='border-white-2 text-[#afafaf] font-bold text-[14px] ' >Sign up</button>
          <button className='bg-white text-black p-3.5 rounded-full px-8 font-bold text-sm' >Log in</button>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={
          <div className='h-[90%] w-[97%] ml-4 overflow-scroll overflow-x-hidden text-white bg-gradient-to-b from-[#1F1F1F] to-[#121212]'>
            <div className="popular-artists relative">
              <h1 className='text-2xl pt-12 ml-4 font-semibold'>Popular artists</h1>
              <p className='absolute right-0 pt-12 top-0 text-[#AAAAAA]'><Link to="/Artists">show more</Link></p>
              <div className='flex justify-center gap-8 p-8 -mt-2 -ml-2 '>
                {artists.map((artist, index) => (
                  <div className='artist-container h-[35vh] hover:bg-gray-400 hover:scale-[1.03] hover:rounded-md hover:bg-clip-padding hover:backdrop-filter hover:backdrop-blur-sm hover:bg-opacity-10  transition-all ease width-[30vh]'>
                    <div key={index} className='flex flex-col relative items-center gap-2 '>
                      <img src={artist.image} alt={artist.name} className='rounded-full ' />
                      <p className='text-m absolute left-0 -bottom-12'>{artist.name}
                        <p className='text-sm text-gray-500'>{artist.genres[0]}</p>
                      </p>
                      <div className="player absolute bg-green-500 h-[50px] w-[50px] flex items-center justify-center rounded-full">
                        <svg data-encore-id="icon" role="img" aria-hidden="true" height={"24px"} width={"24px"} viewBox="0 0 24 24" class="Svg-sc-ytk21e-0 bneLcE"><path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path></svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="popular-playlists relative mt-8 ">
              <h1 className='text-2xl pt-12 ml-4 font-semibold'>Popular Playlists</h1>
              <p className='absolute right-0 pt-12 top-0 text-[#AAAAAA]'><Link to="/Playlists">show more</Link></p>
              <div className='flex gap-3  p-8 -mt-2 -ml-2'>
                {playlists.map((playlist, index) => (
                  <div className='hover:bg-gray-400 hover:rounded-md hover:bg-clip-padding hover:backdrop-filter hover:backdrop-blur-sm hover:bg-opacity-10  transition-all ease width-[30vh]'>
                    <div key={index} className='flex flex-col items-center gap-1'>
                      <img width={"40vh"} src={playlist.image} alt={playlist.name} className='rounded-lg h-[25vh] w-[40vh]' />
                      <div className='text-sm text-[#fffff] '>{playlist.name}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Outlet />
          </div>

        }
        />
        <Route path="/Artists" element={<MoreArtists />} />
      </Routes>

    </BrowserRouter>
  );
};

export default Hero;









