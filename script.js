const proxyUrl = 'https://mandarin.fly.dev/tts';
let flashcards = JSON.parse(localStorage.getItem('flashcards')) || [
    { pinyin: "nǐ hǎo", english: "Hello", audio: `${proxyUrl}?text=nǐ hǎo` },
    { pinyin: "xiè xiè", english: "Thank you", audio: `${proxyUrl}?text=xiè xiè` },
    { pinyin: "nǐ", english: "You (singular)", audio: `${proxyUrl}?text=nǐ` },
    { pinyin: "hǎo", english: "Good, Well", audio: `${proxyUrl}?text=hǎo` },
    { pinyin: "zǎoshang", english: "Morning", audio: `${proxyUrl}?text=zǎoshang` },
    { pinyin: "hǎojiǔ", english: "long time", audio: `${proxyUrl}?text=hǎojiǔ` },
    { pinyin: "jiàn", english: "to see", audio: `${proxyUrl}?text=jiàn` },
    { pinyin: "hǎojiǔ bújian", english: "Long time no see", audio: `${proxyUrl}?text=hǎojiǔ bújian` },
    { pinyin: "bù", english: "No, not", audio: `${proxyUrl}?text=bù` },
    { pinyin: "xièxie", english: "thanks", audio: `${proxyUrl}?text=xièxie` },
    { pinyin: "zàijiàn", english: "good bye; see you", audio: `${proxyUrl}?text=zàijiàn` },
    { pinyin: "kèqi", english: "polite; courteous", audio: `${proxyUrl}?text=kèqi` },
    { pinyin: "bú kèqi", english: "You are welcome", audio: `${proxyUrl}?text=bú kèqi` },
    { pinyin: "gōngxǐ", english: "congratulation; to congratulate", audio: `${proxyUrl}?text=gōngxǐ` },
    { pinyin: "shēngri", english: "birthday", audio: `${proxyUrl}?text=shēngri` },
    { pinyin: "kuàilè", english: "happy; glad", audio: `${proxyUrl}?text=kuàilè` },
    { pinyin: "duìbuqǐ", english: "sorry; excuse me", audio: `${proxyUrl}?text=duìbuqǐ` },
    { pinyin: "méi guānxi", english: "It doesn't matter", audio: `${proxyUrl}?text=méi guānxi` },
    { pinyin: "lǎoshī", english: "teacher", audio: '${proxyUrl}?text=lǎoshī' },
    { pinyin: "dàjiā", english: "everyone", audio: '${proxyUrl}?text=dàjiā' },
    { pinyin: "wǒ", english: "I; me", audio: '${proxyUrl}?text=wǒ' },
    { pinyin: "xìng", english: "surname", audio: '${proxyUrl}?text=xìng' },
    { pinyin: "jiào", english: "to be called / Used for introducing yourself", audio: '${proxyUrl}?text=jiào' },
    { pinyin: "shì", english: "to be/ am-is-are", audio: '${proxyUrl}?text=shì' },
    { pinyin: "Hànyǔ", english: "Mandarin; Chinese language", audio: '${proxyUrl}?text=Hànyǔ' },
    { pinyin: "xuéshēng", english: "student", audio: '${proxyUrl}?text=xuéshēng' },
    { pinyin: "rén", english: "people; person", audio: '${proxyUrl}?text=rén' },
    { pinyin: "yě", english: "too, also (put it before verbs)", audio: '${proxyUrl}?text=yě' },
    { pinyin: "huānyíng", english: "welcome", audio: '${proxyUrl}?text=huānyíng' },
    { pinyin: "nǐmen", english: "you(plural)", audio: '${proxyUrl}?text=nǐmen' },
    { pinyin: "jièshào", english: "to introduce, introduction", audio: '${proxyUrl}?text=jièshào' },
    { pinyin: "yíxiàr", english: "a bit, for a short while", audio: '${proxyUrl}?text=yíxiàr' },
    { pinyin: "zhè", english: "this", audio: '${proxyUrl}?text=zhè' },
    { pinyin: "jīnglǐ", english: "manager", audio: '${proxyUrl}?text=jīnglǐ' },
    { pinyin: "hé", english: "and; with", audio: '${proxyUrl}?text=hé' },
    { pinyin: "tāmen", english: "they; them", audio: '${proxyUrl}?text=tāmen' },
    { pinyin: "tā", english: "he; him", audio: '${proxyUrl}?text=tā' },
    { pinyin: "xīn", english: "new", audio: '${proxyUrl}?text=xīn' },
    { pinyin: "tóngshì", english: "colleague", audio: '${proxyUrl}?text=tóngshì' },
    { pinyin: "nín", english: "you(with respect, singular)", audio: '${proxyUrl}?text=nín' },
    { pinyin: "de", english: "'s', a structural particle", audio: '${proxyUrl}?text=de' },
    { pinyin: "nǚ'ér", english: "daughter", audio: '${proxyUrl}?text=nǚ'ér' },
    { pinyin: "ma", english: "an interrogative particle at the end of 'yes or no' questions", audio: '${proxyUrl}?text=ma' },
    { pinyin: "bù", english: "no; not", audio: '${proxyUrl}?text=bù' },
    { pinyin: "tā", english: "she; her", audio: '${proxyUrl}?text=tā' },
    { pinyin: "mèimei", english: "younger sister", audio: '${proxyUrl}?text=mèimei' },
    { pinyin: "érzi", english: "son", audio: '${proxyUrl}?text=érzi' },
    { pinyin: "jǐ", english: "how many; how much (for small numbers)", audio: '${proxyUrl}?text=jǐ' },
    { pinyin: "suì", english: "... year's old", audio: '${proxyUrl}?text=suì' },
    { pinyin: "shénme", english: "what", audio: '${proxyUrl}?text=shénme' },
    { pinyin: "míngzi", english: "name", audio: '${proxyUrl}?text=míngzi' },
    { pinyin: "liù", english: "six", audio: '${proxyUrl}?text=liù' },
    { pinyin: "shuí/shéi", english: "who; whom", audio: '${proxyUrl}?text=shuí/shéi' },
    { pinyin: "zhàngfu", english: "husband", audio: '${proxyUrl}?text=zhàngfu' },
    { pinyin: "nǎ/něi", english: "which", audio: '${proxyUrl}?text=nǎ/něi' },
    { pinyin: "guó", english: "country", audio: '${proxyUrl}?text=guó' }
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
