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

const aboutMeText = `Hi! I'm Anton - the developer of this site!
<br>
I'm a third-year student at Simon Fraser University, in Vancouver, B.C., studying Computing Science.
<br>
I've been working as a full-stack web developer since 2021, with my main focus being React-based websites,
including single-page invoice generators, concert ticketing websites and everything in between.
<br>
In addition to studying at SFU, I am an active member of <a href="https://sfusurge.com/">SFU Surge</a>, my university's
largest student-led tech-focused organisation, where I have held the position of photographer/social media executive
since September 2024.
<br>
I spend my free time listening to music (I'm particularly fond of
<a href="https://www.youtube.com/watch?v=ap0mqwvf7H0">Taking Back Sunday</a> and
<a href="https://www.youtube.com/watch?v=PoTu269qSnw">Porter Robinson</a>), and tinkering with technology.
From engines to film cameras - if I can get my hands on it, chances are that it will be taken apart at some point.
`
const aboutSiteText = `This site is heavily inspired by websites from the <a href="https://www.webdesignmuseum.org/golden-age-of-web-design">Golden Age Of Web Design</a>.
<br>
I chose it due to its uniqueness and recognizability - even those who didn't grow up on those Adobe Flash-based sites will
immediately catch it's sharp angles, metallic sheen and techno-futurism.
<br>
The inspiration isn't just surface-level - those who grew up browsing Angelfire and Geocities sites will recognize the
<a href="https://en.wikipedia.org/wiki/Matrix_digital_rain">Matrix</a>/<a href="https://lain.wiki/images/e/ee/Metaphorlize.jpg">Lain</a>
-like scrolling text, and the ever-ubiquitous snow that covered the web every December in 200X.
<br>
However, this approach isn't just an exercise in creativity - there exists a practical side to it, too.
<br>
Just like students learn their country's history in school, I believe that developers have a duty to learn about the
past of their world - in order to truly understand current trends and technologies, we must educate ourselves about
those of the past, and learn from their successes and failures. <br>
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