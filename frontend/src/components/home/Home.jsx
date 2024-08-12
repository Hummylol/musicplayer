import React, { useState } from 'react';
import axios from 'axios';

const Home = ({ onSearch }) => {
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
        <div className='search'>
            <input className='search-box'
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Search for a song"
                style={{ marginRight: '10px' }}
            />
            <button className='search-button' onClick={handleSearch}><img src="https://img.icons8.com/?size=100&id=59878&format=png&color=000000" height={"30px"} width={"30px"} alt="" /></button>
        </div>
    );
};

export default Home;