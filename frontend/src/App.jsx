import React, { useState } from 'react';
import Home from './components/home/Home';
import Player from './components/musicplayer/Player';
import RealHome from './components/home/RealHome';

const App = () => {
    const [song, setSong] = useState(null);

    return (
        <>
            <RealHome/>
            {/* <Home onSearch={setSong} />
            <Player song={song} /> */}
        </>
    );
};

export default App;

