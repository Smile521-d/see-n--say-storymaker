// Name:Smile
//Student Id:200563908

// Arrays of words for different categories
const nouns = ["dog", "horse", "buffalo", "bird", "dolphin"];
const verbs = ["swims", "runs", "flies", "sleeps", "walk"];
const adjectives = ["excited", "moody", "energetic", "careful", "active"];
const secondNouns = ["stone", "mountain", "tree", "bat", "stick"];
const places = ["sea", "museum", "zoo", "temple", "countryside"];

// Variables to store the selected words
let selectedNoun = "";
let selectedVerb = "";
let selectedAdjective = "";
let selectedSecondNoun = "";
let selectedPlace = "";

// Reference to the story text element
const storyTextElement = document.getElementById("storyText");

// Function to get a random word from an array
function getRandomWord(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Event listeners for buttons

// Event listener for first noun button
document.getElementById("nounButton").addEventListener("click", () => {
    selectedNoun = getRandomWord(nouns);
    updateStoryText();
    speakNow(`${selectedNoun}`);
});

// Event listener for active verb button
document.getElementById("verbButton").addEventListener("click", () => {
    selectedVerb = getRandomWord(verbs);
    updateStoryText();
    speakNow(`${selectedVerb}`);
});

// Event listener for any adjective button
document.getElementById("adjectiveButton").addEventListener("click", () => {
    selectedAdjective = getRandomWord(adjectives);
    updateStoryText();
    speakNow(`${selectedAdjective}`);
});

// Event listener for second noun button
document.getElementById("secondNounButton").addEventListener("click", () => {
    selectedSecondNoun = getRandomWord(secondNouns);
    updateStoryText();
    speakNow(`${selectedSecondNoun}`);
});

// Event listener for random place button
document.getElementById("placeButton").addEventListener("click", () => {
    selectedPlace = getRandomWord(places);
    updateStoryText();
    speakNow(`${selectedPlace}`);
});

// Event listener for speak button
document.getElementById("speakButton").addEventListener("click", () => {
    const textToSpeak = `${selectedNoun} ${selectedVerb} ${selectedAdjective} ${selectedSecondNoun} ${selectedPlace}`;
    updateStoryText(textToSpeak);
    speakNow(textToSpeak);
});

// Event listener for any random story button
document.getElementById("randomStoryButton").addEventListener("click", () => {
    selectedNoun = getRandomWord(nouns);
    selectedVerb = getRandomWord(verbs);
    selectedAdjective = getRandomWord(adjectives);
    selectedSecondNoun = getRandomWord(secondNouns);
    selectedPlace = getRandomWord(places);
    const textToSpeak = `${selectedNoun} ${selectedVerb} ${selectedAdjective} ${selectedSecondNoun} ${selectedPlace}`;
    updateStoryText(textToSpeak);
    speakNow(textToSpeak);
});

// Event listener for the reset button
document.getElementById("resetButton").addEventListener("click", () => {
    // Reset all selected words
    selectedNoun = "";
    selectedVerb = "";
    selectedAdjective = "";
    selectedSecondNoun = "";
    selectedPlace = "";
    updateStoryText();
});

// Function to update the story text displayed on the page
function updateStoryText(story = "") {
    // Display the build story or default template
    storyTextElement.textContent = story || `${selectedNoun} ${selectedVerb} ${selectedAdjective} ${selectedSecondNoun} ${selectedPlace}`;
}

// Function to speak the text using the TextToSpeech API
function speakNow(textToSpeak) {
    // Check if the Speech Synthesis API is supported
    if ('speechSynthesis' in window) {
        
        const utterance = new SpeechSynthesisUtterance(textToSpeak);
        speechSynthesis.speak(utterance);
    } else {
        console.error("Text-to-Speech is not supported in this browser.");
    }
}
