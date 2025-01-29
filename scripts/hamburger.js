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