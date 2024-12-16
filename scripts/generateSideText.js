const leftID = "side-text-left"
const rightID = "side-text-right"

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const scrollingAestheticText = async (aestheticTextArray) => {
    const leftContainer = document.getElementById(leftID);
    const rightContainer = document.getElementById(rightID);

    if (!leftContainer || !rightContainer) {
        return; // failsafe - probably useless
    }

    const speed = 1; // ms delay per character
    const newlineLength = "\n".length;
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
            for (const char of line) {
                leftContainer.textContent += char;
                rightContainer.textContent += char;
                await delay(speed); // wait for "speed" ms
            }

            lineIndex += 1;
            leftContainer.textContent += "\n";
            rightContainer.textContent += "\n";
        }
        let lenCounter = leftContainer.textContent.length - 1;
        while (leftContainer.textContent !== "") {
            if (leftContainer.textContent[lenCounter - 1] === "\\" && leftContainer.textContent[lenCounter] === "n") {
                lenCounter -= newlineLength;
                leftContainer.textContent = leftContainer.textContent.substring(0, lenCounter);
                rightContainer.textContent = rightContainer.textContent.substring(0, lenCounter);
            } else {
                lenCounter -= 1;
                leftContainer.textContent = leftContainer.textContent.substring(0, lenCounter);
                rightContainer.textContent = rightContainer.textContent.substring(0, lenCounter);
            }
            await delay(speed); // wait for "speed" ms
        }
    }
};

(document.addEventListener("DOMContentLoaded", () => {
    fetch('./json/aesthetic-text.json')
        .then((response) => response.json())
        .then((json) => (scrollingAestheticText(json)));
}));
