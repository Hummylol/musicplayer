import React, { useState } from 'react';
import Home from './components/home/Home';
import Player from './components/musicplayer/Player';

const App = () => {
    const [song, setSong] = useState(null);

    return (
        <>
            <Home onSearch={setSong} />
            <Player song={song} />
        </>
    );
};

export default App;
``
