import React, { useState } from 'react';
import axios from 'axios';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSearch = async () => {
        try {
            const response = await axios.get('https://musicplayer-6hmo.onrender.com/api/songs', {
                params: { query }
            });
            onSearch(response.data);
        } catch (error) {
            console.error('Error fetching song:', error.message);
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className='search flex items-center'>
            <input className='search-box p-2 text-white rounded-full bg-[#242424] text-sm focus:border-2 active:border-white outline-none'
                type="text"
                value={query}
                onKeyPress={handleKeyPress}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="what do you want to play?"
            />
            <button className='search-button' onClick={handleSearch}><img src="https://img.icons8.com/?size=100&id=59878&format=png&color=000000" height={"30px"} width={"30px"} alt="" /></button>
        </div>
    );
};

export default SearchBar;