"use strict";
const selectedButtonClass = "selected"
const flippedDividerClass = "flipped"
const dividerID = "photography-navigation-divider"
const hobbyButtonID = "photography-hobby-button"
const eventsButtonID = "photography-events-button"
const hobbyContainerID = "photography-hobby-container"
const eventsContainerID = "photography-events-container"


const selectPhotographySection = async (callerID) => {
    const divider = document.getElementById(dividerID);
    const hobbyButton = document.getElementById(hobbyButtonID);
    const eventsButton = document.getElementById(eventsButtonID);
    const hobbyContainer = document.getElementById(hobbyContainerID);
    const eventsContainer = document.getElementById(eventsContainerID);

    // This assumes that the "Hobby" button is on the Left, and that the "Events" button is on the right

    if (callerID === hobbyButtonID) {
        divider.classList.toggle(flippedDividerClass);
        hobbyButton.classList.add(selectedButtonClass);
        eventsButton.classList.remove(selectedButtonClass);
        hobbyContainer.style.display = "flex";
        eventsContainer.style.display = "none";

    }
    if (callerID === eventsButtonID) {
        divider.classList.toggle(flippedDividerClass);
        hobbyButton.classList.remove(selectedButtonClass);
        eventsButton.classList.add(selectedButtonClass);
        hobbyContainer.style.display = "none";
        eventsContainer.style.display = "flex";
    }
};

(document.addEventListener("DOMContentLoaded", async () => {
    await selectPhotographySection(hobbyButtonID);
}));