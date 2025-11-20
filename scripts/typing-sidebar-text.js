/*
    Note: some IDEs throw warnings when using (for ... in) loops ("Value assigned to primitive will be lost"),
    so (for ... of) is used isntead. For arrays (at least here?), there is no functional difference.
*/
"use strict";
const typingSidebarText = async (aestheticTextArray) => {
    const config = {
        containerIds: ["side-text-left", "side-text-right"],
        controllerId: "sidebar-text-controller",
        msDelayPerCharacter: 10, // ms delay per character
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

    const startTypingSidebarText = async () => {
        let lineIndex = 0; // needs to be outside the loop as the json file is looped independent of the on-screen lines
        if (allContainersAreValid(containers)) {
            // while (true) {
            for (const container of containers) {
                container.textContent = "";
            }

            for (let i = 0; i < config.maxLinesOnScreen; i++) {
                if (lineIndex >= aestheticTextArray.length) {
                    lineIndex = 0;
                }

                const line = aestheticTextArray[lineIndex];
                for (let char of line) {
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
            // let lenCounter = containers[0].textContent.length - 1;
            // while (containers[0].textContent !== "") {
            //     lenCounter -= 1;
            //     for (const container of containers) {
            //         container.textContent = container.textContent.substring(0, lenCounter);
            //     }
            //     // await delay(config.msDelayPerCharacter);
            // }
            // }
        }
    }

    let containers = [];
    for (const containerId of config.containerIds) {
        const container = document.getElementById(containerId)
        if (!container) {
            console.error(`${containerId} doesn't exist.`)
        }
        containers.push(container);
    }

    // bindToController();
    await startTypingSidebarText();
}

(document.addEventListener("DOMContentLoaded", () => {
    fetch('./assets/text/scrolling-typing-text.json')
        .then((response) => response.json())
        .then((json) => (typingSidebarText(json)));
}));
