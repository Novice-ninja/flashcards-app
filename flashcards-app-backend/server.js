const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/flashcards', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const cardSchema = new mongoose.Schema({
    pinyin: String,
    english: String,
});

const Card = mongoose.model('Card', cardSchema);

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Routes
app.get('/cards', async (req, res) => {
    const cards = await Card.find();
    res.json(cards);
});

app.post('/cards', async (req, res) => {
    const { pinyin, english } = req.body;
    const newCard = new Card({ pinyin, english });
    await newCard.save();
    res.json(newCard);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
