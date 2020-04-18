const playWord = (word) => {
    const audio = new Audio(`https://wooordhunt.ru/data/sound/word/us/mp3/${word}.mp3`);
    audio.play()
};

const playAudio = (audioLink) => {
    const audio = new Audio(audioLink);
    audio.play()
};
export { playWord, playAudio };