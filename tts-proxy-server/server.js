const express = require('express');
const rp = require('request-promise');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/tts', async (req, res) => {
    const text = req.query.text;
    if (!text) {
        return res.status(400).json({ error: 'Text parameter is required' });
    }

    try {
        const response = await rp({
            uri: 'https://translate.googleapis.com/translate_tts',
            qs: {
                ie: 'UTF-8',
                q: text,
                tl: 'zh-CN',
                client: 'tw-ob',
            },
            encoding: null,  // Return binary data
        });

        res.set('Content-Type', 'audio/mpeg');
        res.send(response);
    } catch (err) {
        console.error('Error fetching TTS:', err);
        res.status(500).json({ error: 'Failed to fetch TTS' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
