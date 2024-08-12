import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const SPOTIFY_CLIENT_ID = 'f0a1b1d2d1744359ae43141bd612c181';  // Replace with your Spotify Client ID
const SPOTIFY_CLIENT_SECRET = '85cd2f0935ee4a7b8bf0c45713432813'; // Replace with your Spotify Client Secret

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

app.get('/api/songs', async (req, res) => {
    try {
        const {query} = req.query;
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

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
});
