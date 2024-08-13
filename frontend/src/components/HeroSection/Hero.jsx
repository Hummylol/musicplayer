import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import MoreArtists from './MoreArtists';

const Hero = () => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    axios.get('https://musicplayer-6hmo.onrender.com/api/artists/popular')
      .then(response => {
        setArtists(response.data.slice(0, 6)); 
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <BrowserRouter>
      <nav className='flex w-[97%] ml-4 justify-between bg-[#0F0F0F] rounded-t-lg items-center h-[10%]'>
        <div className="arrow flex gap-2 ml-3">
          <div className="icon-container">
            <svg
              viewBox="0 0 16 16"
              fill="currentColor"
              className="icon"
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
              className="icon"
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
          <div className='h-[90%] w-[97%] ml-4 text-white  bg-gradient-to-b from-[#1F1F1F] to-[#121212]'>
            <div className="popular-artists relative">
              <h1 className='text-2xl pt-12 ml-4 font-semibold'>Popular artists</h1>
              <p className='absolute right-0 pt-12 top-0 text-[#AAAAAA]' ><Link to="/Artists">show more</Link></p>
              <div className='flex justify-center gap-8 p-8 -mt-2 -ml-2'>
                {artists.map((artist, index) => (
                  <div key={index} className='flex flex-col relative items-center gap-2'>
                    <img src={artist.image} alt={artist.name} className=' rounded-full' />
                    <div className='text-m absolute left-0 -bottom-12'>{artist.name}
                      <div className='text-sm text-gray-500'>{artist.genres[0]}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Outlet />
          </div>
        } />
        <Route path="/Artists" element={<MoreArtists />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Hero;