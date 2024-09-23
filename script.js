const btn = document.querySelector("[data-btn]");
const text = document.querySelector("[data-text]");

function speak(text) {
    
    let textSpeak = new SpeechSynthesisUtterance(text);
    textSpeak.rate = 1;
    textSpeak.pitch = 1;
    textSpeak.volume = 1;
    textSpeak.lang = 'hi-GB';
    window.speechSynthesis.speak(textSpeak);

}


function wishMe() {

    let date = new Date();
    let hours = date.getHours();

    if (hours >= 0 && hours < 12) {
        speak("Good Morning Sir");
    } else if (hours >= 12 && hours < 16) {
        speak("Good Afternoon Sir");
    } else {
        speak("Good Evening Sir");
    }

}

window.addEventListener("load", function() {
    setTimeout(() => { wishMe() }, 1500);
});

const speechRecognition = window.speechRecognition || window.webkitSpeechRecognition;
const recognition = new speechRecognition();

recognition.onresult = (event) => {
    let currIndex = event.resultIndex;
    let transcript = event.results[currIndex][0].transcript;
    text.innerText = transcript;
    setTimeout(() => { text.innerText = "Say in Alpha" }, 1500);
    takeCommand(transcript);
}

btn.addEventListener("click", () => { 
    recognition.start();
});

function takeCommand(message) {

    message = message.toLowerCase().trim();

    if (message.includes("hello") || message.includes("hey")) {
        speak("hello sir, what can i help you?");
    } else if (message.includes("who are you")) {
        speak("I'm virtual assistant, created by syed asif shah");
    } else if (message.includes("open youtube")) {
        speak("opening youtube");
        window.open("https://www.youtube.com", "_blank");
    } else if (message.includes("open chat gpt")) {
        speak("opening chatgpt");
        window.open("https://chatgpt.com", "_blank");
    } else if (message.includes("open google")) {
        speak("opening google");
        window.open("https://google.com", "_blank");
    } else if (message.includes("open calculator")) {
        speak("opening calculator");
        window.open("calculator://")
    }  else if (message.includes("open whatsapp")) {
        speak("opening whatsapp");
        window.open("whatsapp://");
        window.location.href = "whatsapp://send";
    } else if (message.includes("time")) {
        let time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" });
        speak(time);
    } else if (message.includes("date")) {
        let date = new Date().toLocaleString(undefined, { day: "numeric", month: "short" });
        speak(date);
    } else if (message.includes("tiktok")) {
        speak("opening tiktok");
        window.open("https://www.tiktok.com");
    } else if (message.includes("open lead code")) {
        speak("opening leet code");
        window.open("https://leetcode.com/problems/single-number/description/");
    } else if (message.includes("black box")) {
        speak("opening black box");
        window.open("https://www.blackbox.ai/");
    } else if (message.includes("facebook")) {
        speak("opening facebook");
        window.open("https://www.facebook.com");
    } else if (message.includes("instagram")) {
        speak("opening instagram");
        window.open("https://www.instagram.com");
    } else {
        speak(`this is what i found on internet regarding ${message.replace("alpha", "")}`);
        window.open(`https://google.com/search?q=${message.replace("alpha", "")}`);
    }

}
