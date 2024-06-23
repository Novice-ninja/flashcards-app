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
    const flashcardElement = document.getElementById('flashcard');
    
    if (event.direction === Hammer.DIRECTION_LEFT || event.direction === Hammer.DIRECTION_UP) {
        flashcardElement.classList.add('swiping-left');
        setTimeout(() => {
            currentCardIndex = (currentCardIndex + 1) % flashcards.length;
            displayCard(currentCardIndex);
            flashcardElement.classList.remove('swiping-left');
        }, 300);
    } else if (event.direction === Hammer.DIRECTION_RIGHT || event.direction === Hammer.DIRECTION_DOWN) {
        flashcardElement.classList.add('swiping-right');
        setTimeout(() => {
            currentCardIndex = (currentCardIndex - 1 + flashcards.length) % flashcards.length;
            displayCard(currentCardIndex);
            flashcardElement.classList.remove('swiping-right');
        }, 300);
    }
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

    // Add touch event listeners for manual swiping
    let startX;
    flashcardElement.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });

    flashcardElement.addEventListener('touchmove', (e) => {
        let diffX = startX - e.touches[0].clientX;
        if (Math.abs(diffX) > 50) {
            if (diffX > 0) {
                flashcardElement.classList.add('swiping-left');
            } else {
                flashcardElement.classList.add('swiping-right');
            }
        }
    });

    flashcardElement.addEventListener('touchend', () => {
        if (flashcardElement.classList.contains('swiping-left')) {
            handleSwipe({ direction: Hammer.DIRECTION_LEFT });
        } else if (flashcardElement.classList.contains('swiping-right')) {
            handleSwipe({ direction: Hammer.DIRECTION_RIGHT });
        }
        flashcardElement.classList.remove('swiping-left', 'swiping-right');
    });
};
