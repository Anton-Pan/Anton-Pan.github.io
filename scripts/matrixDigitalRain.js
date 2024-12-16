const leftID = "side-text-left"
const rightID = "side-text-right"

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const alpha = new RegExp(/^[A-Za-z]+$/);

const scrollingAestheticText = async (aestheticTextArray) => {
    const leftContainer = document.getElementById(leftID);
    const rightContainer = document.getElementById(rightID);

    if (!leftContainer || !rightContainer) {
        return; // failsafe - probably useless
    }

    const speed = 1; // ms delay per character
    const maxLinesOnScreen = 54;

    let lineIndex = 0; // needs to be outside the loop as the jssn file is looped independent of the on-screen lines

    while (leftContainer && rightContainer) {
        leftContainer.textContent = "";
        rightContainer.textContent = "";

        for (let i = 0; i < maxLinesOnScreen; i++) {
            if (lineIndex >= aestheticTextArray.length) {
                lineIndex = 0;
            }

            const line = aestheticTextArray[lineIndex];
            for (let char of line) {
                if (!(alpha.test(char))) {
                    // get random ascii character between 33 and 64 inclusive.
                    const max = 64;
                    const min = 33;
                    char = String.fromCharCode(Math.floor(Math.random() * (max - min + 1)) + min);
                }
                leftContainer.textContent += char;
                rightContainer.textContent += char;
                await delay(speed); // wait for "speed" ms
            }
            lineIndex += 1;
        }
        let lenCounter = leftContainer.textContent.length - 1;
        while (leftContainer.textContent !== "") {
            lenCounter -= 1;
            leftContainer.textContent = leftContainer.textContent.substring(0, lenCounter);
            rightContainer.textContent = rightContainer.textContent.substring(0, lenCounter);
            await delay(speed); // wait for "speed" ms
        }
    }
};

(document.addEventListener("DOMContentLoaded", () => {
    fetch('./json/aesthetic-text.json')
        .then((response) => response.json())
        .then((json) => (scrollingAestheticText(json)));
}));
