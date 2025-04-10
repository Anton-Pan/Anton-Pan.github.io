"use strict";
const getRandomInt = (min, max) => {
    return parseFloat((Math.random() * (max - min) + min).toPrecision(2));
}

export const glitchText = (containerId, textType) => {
    const container = document.getElementById(containerId);
    if (!container || !textType) return;

    const textElements = container.querySelectorAll(textType); // multiple objects are needed for the glitch text
    let dots = '';

    setInterval(() => {
        dots = dots.length < 3 ? dots + '.' : '';
        textElements.forEach(element => {
            element.textContent = 'GLITCH' + dots;
        });
    }, 500);
};