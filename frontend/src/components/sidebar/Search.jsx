import React, { useState } from 'react'
import SearchBar from '../home/SearchBar'
import Player from '../musicplayer/Player'


const Search = () => {
    const [song, setSong] = useState(null);
  return (
    <div className=' rounded-lg bg-[#0F0F0F] ml-2 p-2'>
        <SearchBar onSearch={setSong} />
        <Player song={song} />
    </div>
  )
}

export default Search