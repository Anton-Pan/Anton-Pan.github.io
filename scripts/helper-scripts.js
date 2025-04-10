"use strict";
const navigateTo = (target) => {
    window.location.href = target;
}

const swapCopyrightText = () => {
    const copyrightDiv = document.getElementById("copyrightText");
    copyrightDiv.innerText.includes(`end of time`) ?
        copyrightDiv.innerHTML = (`(c) anton p. 2024 - 2025`) :
        copyrightDiv.innerHTML = (`(c) anton p. approx. 13.7 × 10<sup>10</sup> B.C. - the end of time`);
}