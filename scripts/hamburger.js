"use strict";
const hamburger = () => {
    const element = document.getElementById('hamburger');
    element.addEventListener('click', () => {
        element.classList.add("disableHover");
        element.classList.toggle("hamburger-pyramid-down");
        element.classList.toggle("hamburger-pyramid-up");
        setTimeout(() => {
            element.classList.remove("disableHover");
        }, 300)
    })
}

(document.addEventListener("DOMContentLoaded", () => {
    hamburger();
}));

/*
<div class="hamburger-container">
    <div class="hamburger-pyramid-down" id="hamburger">
        <div class="bar-top"></div>
		<div class="bar-middle"></div>
		<div class="bar-bottom"></div>
	</div>
</div>
 */