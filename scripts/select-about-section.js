"use strict";
const unselectedClass = "about-navigation-button-unselected"
const selectedClass = "about-navigation-button-selected"
const aboutMeID = "about-me-button"
const aboutSiteID = "about-site-button"
const textContainerID = "about-text-container"

const loadTextFromFile = async (url) => {
    const res = await fetch(url);
    if (!res.ok) {
        throw res;
    }
    return res.text();
};

const selectAboutSection = async (targetId) => {
    const aboutMeButton = document.getElementById(aboutMeID);
    const aboutSiteButton = document.getElementById(aboutSiteID);
    const aboutTextContainer = document.getElementById(textContainerID);
    const aboutMeText = await loadTextFromFile("../assets/text/about-me.txt")
    const aboutSiteText = await loadTextFromFile("../assets/text/about-site.txt")
    if (targetId === aboutMeID) {
        aboutTextContainer.innerHTML = aboutMeText;
        aboutMeButton.className = selectedClass;
        aboutSiteButton.className = unselectedClass;
    }
    if (targetId === aboutSiteID) {
        aboutTextContainer.innerHTML = aboutSiteText;
        aboutMeButton.className = unselectedClass;
        aboutSiteButton.className = selectedClass;
    }
};

(document.addEventListener("DOMContentLoaded", async () => {
    await selectAboutSection(aboutMeID);
}));