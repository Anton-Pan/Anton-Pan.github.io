const unselected = "about-navigation-button-unselected"
const selected = "about-navigation-button-selected"
const aboutMeID = "about-me-button"
const aboutSiteID = "about-site-button"
const textContainerID = "about-text-container"
const yearsSinceHighSchool = () => {
    // Too lazy to update it by hand every year :P
    const yearWords = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    const n = new Date().getFullYear() - 2021;
    return (yearWords[n]);
}
const aboutMeText = `Hi! I'm Anton - the developer of this site! <br>
I'm a third-year at Simon Fraser University, in Vancouver, B.C., studying Computing Science. <br>
I've been working as a full-stack web developer for the past ${yearsSinceHighSchool()} years, since before I even finished high school. <br>
In addition to English, I speak fluent Russian, having spoken it at home my entire life, and French, from participating in the French Immersion Program throughout my entire K-12 schooling. <br>
I have a passion for anything old and outdated, especially anything from the Y2K era like classic iPods, digicams and CDs, which I heavily use as inspiration in my work. <br>
I have been a member of <a href="https://sfusurge.com/">SFU Surge</a>, my university's largest student-led tech-focused organisation, since September 2024, and currently hold the position of photographer/social media executive.`
const aboutSiteText = `empty, how sad :'(`

const selectAboutSection = (targetId) => {
    const aboutMeButton = document.getElementById(aboutMeID);
    const aboutSiteButton = document.getElementById(aboutSiteID);
    const aboutTextContainer = document.getElementById(textContainerID);

    if (!aboutMeButton || !aboutSiteButton || !aboutTextContainer) {
        return;
    }

    if (targetId === aboutMeID) {
        aboutTextContainer.innerHTML = aboutMeText;
        aboutMeButton.className = selected;
        aboutSiteButton.className = unselected;
    }
    if (targetId === aboutSiteID) {
        aboutTextContainer.innerHTML = aboutSiteText;
        aboutMeButton.className = unselected;
        aboutSiteButton.className = selected;
    }
};

(document.addEventListener("DOMContentLoaded", () => {
    selectAboutSection(aboutMeID); // load
}));