console.log("Typing Speed Test Begins!!");

// Element Selectors
const playButton = document.getElementById("playButton");
const sentenceDisplay = document.getElementById("sentenceDisplay");
const inputField = document.getElementById("inputField");
const resultsSection = document.getElementById("resultsSections");

// Sentence Fetching

async function getRandomSentence(wordCount){
    try {
        const response = await fetch(`https://random-words-api.vercel.app/word=${wordCount}`);
        const data = await response.json();
        let sentence = data.join(' ');
        console.log(sentence);
        return sentence;
    } catch (error) {
        console.error("Failed to fetch sentence:", error);
        return "Error Loading sentence, please try again."
    }

}

// Event Listeners
playButton.addEventListener('click', getRandomSentence(10));
