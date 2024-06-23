const proxyUrl = 'https://mandarin.fly.dev/tts';

let flashcards = JSON.parse(localStorage.getItem('flashcards')) || [
    { pinyin: "nǐ hǎo", english: "Hello", audio: `${proxyUrl}?text=nǐ hǎo` },
    { pinyin: "xiè xiè", english: "Thank you", audio: `${proxyUrl}?text=xiè xiè` },
    // Add more initial cards as needed
];

let currentCardIndex = 0;

function saveFlashcards() {
    localStorage.setItem('flashcards', JSON.stringify(flashcards));
}

function displayCard(index) {
    const pinyinText = document.getElementById('pinyin-text');
    const englishText = document.getElementById('english-text');
    const card = flashcards[index];
    
    pinyinText.textContent = card.pinyin;
    englishText.textContent = card.english;
}

function handleSwipe(event) {
    if (event.direction === Hammer.DIRECTION_LEFT || event.direction === Hammer.DIRECTION_UP) {
        currentCardIndex = (currentCardIndex + 1) % flashcards.length;
    } else if (event.direction === Hammer.DIRECTION_RIGHT || event.direction === Hammer.DIRECTION_DOWN) {
        currentCardIndex = (currentCardIndex - 1 + flashcards.length) % flashcards.length;
    }
    displayCard(currentCardIndex);
}

document.getElementById('add-card-btn').addEventListener('click', async () => {
    const pinyin = document.getElementById('pinyin-input').value;
    const english = document.getElementById('english-input').value;
    
    if (pinyin && english) {
        const audioUrl = `${proxyUrl}?text=${encodeURIComponent(pinyin)}`;
        flashcards.push({ pinyin, english, audio: audioUrl });
        saveFlashcards();
        document.getElementById('pinyin-input').value = '';
        document.getElementById('english-input').value = '';
    }
});

document.getElementById('pronounce-btn').addEventListener('click', () => {
    const card = flashcards[currentCardIndex];
    const audio = new Audio(card.audio);
    audio.play();
});

window.onload = () => {
    displayCard(currentCardIndex);

    const flashcardElement = document.getElementById('flashcard');
    const hammer = new Hammer(flashcardElement);

    hammer.on('swipe', handleSwipe);
};
