const robot = document.getElementById("robot");
const speechBubble = document.getElementById("speech-bubble");
const screenText = document.getElementById("screen-text");
const leftEye = document.querySelector(".eye-left-iris");
const rightEye = document.querySelector(".eye-right-iris");
const robotInput = document.getElementById("robot-input");

let eyeClickCount = 0;

robot.addEventListener("click", () => {
    speechBubble.innerText = "Ooch, that hurts!";
    setTimeout(() => {
        speechBubble.innerText = "Hello !";
    }, 2000);
});

robot.addEventListener("mousemove", (event) => {
    screenText.innerText = `X: ${event.clientX}, Y: ${event.clientY}`;
});

robotInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        speechBubble.innerText = "Don’t worry, I’ll take care of it!";
        setTimeout(() => {
            speechBubble.innerText = "Hello !";
        }, 2000);
        robotInput.value = "";
    }
});

[leftEye, rightEye].forEach(eye => {
    eye.addEventListener("click", () => {
        eyeClickCount++;
        if (eyeClickCount >= 10) {
            changeIrisColor();
            eyeClickCount = 0;
        }
    });
});


function changeIrisColor() {
    const randomColor = () => `hsl(${Math.random() * 360}, 100%, 50%)`;
    leftEye.setAttribute("fill", randomColor());
    rightEye.setAttribute("fill", randomColor());
}

document.addEventListener("DOMContentLoaded", () => {
    speechBubble.innerText = "Hello !";
});
