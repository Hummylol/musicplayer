import express from 'express';
import axios from 'axios';
const router = express.Router();

const SPOTIFY_CLIENT_ID = 'f0a1b1d2d1744359ae43141bd612c181'; 
const SPOTIFY_CLIENT_SECRET = '85cd2f0935ee4a7b8bf0c45713432813';
const SPOTIFY_API_URL = 'https://api.spotify.com/v1';

const getAccessToken = async () => {
    try {
        const response = await axios.post('https://accounts.spotify.com/api/token', null, {
            params: {
                grant_type: 'client_credentials'
            },
            headers: {
                'Authorization': `Basic ${Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString('base64')}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        return response.data.access_token;
    } catch (error) {
        console.error('Error getting access token:', error.message);
        throw error;
    }
};

// Fetch songs
router.get('/songs', async (req, res) => {
    try {
        const { query } = req.query;
        const accessToken = await getAccessToken();
        const response = await axios.get(`${SPOTIFY_API_URL}/search`, {
            params: {
                q: query,
                type: 'track',
                limit: 5
            },
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });
        const track = response.data.tracks.items[0];
        if (track) {
            res.json({
                name: track.name,
                artists: track.artists.map(artist => artist.name),
                preview_url: track.preview_url
            });
        } else {
            res.status(404).json({ error: 'Song not found' });
        }
    } catch (error) {
        console.error('Error fetching song:', error.message);
        res.status(500).json({ error: 'Failed to fetch song' });
    }
});

// Fetch popular artists
router.get('/artists/popular', async (req, res) => {
    try {
        const accessToken = await getAccessToken();
        const response = await axios.get(`${SPOTIFY_API_URL}/search`, {
            params: {
                q: 'a', // This is a workaround to get a broad search result
                type: 'artist',
                limit: 10
            },
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });

        const artists = response.data.artists.items
            .sort((a, b) => b.popularity - a.popularity)
            .slice(0, 10);

        if (artists.length > 0) {
            res.json(artists.map(artist => ({
                name: artist.name,
                popularity: artist.popularity,
                genres: artist.genres,
                image: artist.images[0]?.url
            })));
        } else {
            res.status(404).json({ error: 'No popular artists found' });
        }
    } catch (error) {
        console.error('Error fetching popular artists:', error.message);
        res.status(500).json({ error: 'Failed to fetch popular artists' });
    }
});

// Fetch popular playlists
router.get('/playlists/popular', async (req, res) => {
    try {
        const accessToken = await getAccessToken();
        const response = await axios.get(`${SPOTIFY_API_URL}/browse/featured-playlists`,{
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });
        const playlists = response.data.playlists.items
            .map(playlist => ({
                name: playlist.name,
                description: playlist.description,
                image: playlist.images[0]?.url,
                url: playlist.external_urls.spotify,
            }))
            .slice(0, 6); // Return only 5 playlists

        res.json(playlists);
    } catch (error) {
        console.error('Error fetching popular playlists:', error.message);
        res.status(500).json({ error: 'Failed to fetch popular playlists' });
    }
});



export default router;
