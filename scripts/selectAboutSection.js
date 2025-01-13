const unselectedClass = "about-navigation-button-unselected"
const selectedClass = "about-navigation-button-selected"
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
I'm a third-year student at Simon Fraser University, in Vancouver, B.C., completing my BSc in Computing Science. <br>
I have been working as a full-stack web developer for the past ${yearsSinceHighSchool()} years, starting in my twelfth grade of high school. <br>
In addition to English, I speak fluent Russian, having spoken it at home my entire life, and French, from participating in the French Immersion Program throughout my entire K-12 schooling. <br>
I have a passion for anything old and outdated, especially anything from the Y2K era, like classic iPods, digicams, and CDs, which I heavily use as inspiration for my work. <br>
I am a member of <a href="https://sfusurge.com/">SFU Surge</a>, SFU's largest student-led tech-focused organisation, where I have held the position of photographer/social media executive since September 2024.`

const aboutSiteText = `This site is heavily inspired by websites from the <a href="https://www.webdesignmuseum.org/golden-age-of-web-design">Golden Age Of Web Design</a>. <br> 
I chose it due to its uniqueness and recognisability - even those who didn't grow up on those Adobe Flash-based sites will immediately recognise it's sharp angles, metallic sheen and techno-futurism. <br>
However, this approach is not just an exercise in creativity - there exists a practical side to it, too. <br>
Just like students learn their country's history in school, I believe that developers have a duty to learn about the past of their own world - in order to truly understand current trends and technologies, we must educate ourselves about those of the past, and learn from their sucesses and failures. <br>
<br>
<marquee>Anyone remember the &lt;marquee&gt; tag?</marquee>
`

const selectAboutSection = (targetId) => {
    const aboutMeButton = document.getElementById(aboutMeID);
    const aboutSiteButton = document.getElementById(aboutSiteID);
    const aboutTextContainer = document.getElementById(textContainerID);
    const buttonArray = [aboutMeButton, aboutSiteButton, aboutTextContainer]
    for (const button of buttonArray) {
        if (!button) {
            console.error(`${button.id} does not exist`);
            return;
        }
    }

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

(document.addEventListener("DOMContentLoaded", () => {
    selectAboutSection(aboutMeID);
}));