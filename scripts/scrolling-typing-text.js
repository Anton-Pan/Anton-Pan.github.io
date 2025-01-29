/*
    Note: some IDEs throw warnings when using (for ... in) loops ("Value assigned to primitive will be lost"),
    so (for ... of) is used isntead. For arrays (at least here?), there is no functional difference.
*/

const typingTextEfect = async (aestheticTextArray) => {
    const config = {
        containerIds: ["side-text-left", "side-text-right"],
        msDelayPerCharacter: 1, // ms delay per character
        maxLinesOnScreen: 54
    }

    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const allContainersAreValid = (containers) => {
        for (const container of containers) {
            if (!container) {
                return false;
            }
        }
        return true;
    }

    /*
    const replaceNonAlphaChars = (char) => {
        if (!(RegExp(/^[A-Za-z]+$/).test(char))) {
            // get random ascii character between 33 and 64 inclusive.
            const max = 64;
            const min = 33;
            char = String.fromCharCode(Math.floor(Math.random() * (max - min + 1)) + min);
        }
        return char;
    }
    */

    let containers = [];
    for (const containerId of config.containerIds) {
        const container = document.getElementById(containerId)
        if (!container) {
            console.error(`${containerId} doesn't exist.`)
        }
        containers.push(container);
    }

    let lineIndex = 0; // needs to be outside the loop as the jssn file is looped independent of the on-screen lines

    while (allContainersAreValid(containers)) {
        for (const container of containers) {
            container.textContent = "";
        }

        for (let i = 0; i < config.maxLinesOnScreen; i++) {
            if (lineIndex >= aestheticTextArray.length) {
                lineIndex = 0;
            }

            const line = aestheticTextArray[lineIndex];
            for (let char of line) {
                // Replace any goofy (non-alphabetical) characters with a random one for A E S T H E T I C - currently unneeded
                // char = replaceNonAlphaChars(char);
                for (const container of containers) {
                    container.textContent += char;
                }
                await delay(config.msDelayPerCharacter);
            }
            lineIndex += 1;
            for (const container of containers) {
                    container.textContent += '\n';
                }
        }
        let lenCounter = containers[0].textContent.length - 1;
        while (containers[0].textContent !== "") {
            lenCounter -= 1;
            for (const container of containers) {
                container.textContent = container.textContent.substring(0, lenCounter);
            }
            await delay(config.msDelayPerCharacter);
        }
    }
}

(document.addEventListener("DOMContentLoaded", () => {
    fetch('./assets/text/scrolling-typing-text.json')
        .then((response) => response.json())
        .then((json) => (typingTextEfect(json)));
}));
