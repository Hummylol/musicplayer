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
        <div className='search flex items-center mt-1 mb-1'>
            <input className='search-box p-2 ml-4 text-white rounded-full bg-[#242424] text-sm active:border-white outline-none'
                type="text"
                value={query}
                onKeyPress={handleKeyPress}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="what do you want to play?"
            />
            <button className='search-button invert ml-3' onClick={handleSearch}><img src="https://img.icons8.com/?size=100&id=59878&format=png&color=000000" height={"25px"} width={"25px"} alt="" /></button>
        </div>
    );
};

export default SearchBar;