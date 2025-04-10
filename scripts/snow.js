"use strict";
const snow = () => {
    const getRandomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    }

    let config = {
        containers: [
            {
                id: "snow-container-fullscreen",
                width: {
                    // set to -0.5and 100.5 if pop-in/pop-out occurs
                    min: -0.5,
                    max: 100.5
                }
            }
        ],
        controllerId: "snow-controller",
        animationLength: {
            min: 10,
            max: 20
        },
        animationDelays: { // animation delay so the snow instantly appears on screen
            min: 0,
            max: null // set later to config.animationLength.max
        },
        fadeDurationMs: 500,
        snowflakesPerContainer: 25
    }
    config.animationDelays.max = config.animationLength.max;

    const updateSnowflake = (snowflake, containerWidth, firstLoop = false) => {
        const sideInit = `${getRandomInt(containerWidth.min, containerWidth.max)}vw`;
        const sideEnd = `${getRandomInt(containerWidth.min, containerWidth.max)}vw`;
        const animationLength = getRandomInt(config.animationLength.min, config.animationLength.max);
        let animationDelay;
        snowflake.style.setProperty('--x-init', sideInit);
        snowflake.style.setProperty('--x-end', sideEnd);
        if (firstLoop) {
            animationDelay = -1 * getRandomInt(config.animationDelays.min, config.animationDelays.max);

        } else {
            animationDelay = `0s`;
            snowflake.style.setProperty('animation', `none`);  /* Workaorund for infinite animations  */
            snowflake.offsetHeight;                                        /* not resetting their height properly */
        }

        snowflake.style.setProperty('animation', `snowfall linear infinite`);
        snowflake.style.setProperty('animation-delay', `${animationDelay}s`);
        snowflake.style.setProperty('animation-duration', `${animationLength}s`);
    }

    const animateSnowFadeIn = () => {
        config.containers.forEach((containerObj) => {
            const container = document.getElementById(containerObj.id);
            container.animate(
                [
                    {opacity: 0},
                    {opacity: 1},
                ],
                500,
            );
        })
    }

    const animateSnowFadeOut = async () => {
        for (const containerObj of config.containers) {
            const container = document.getElementById(containerObj.id);
            const fadeOut = container.animate(
                [
                    {opacity: 1},
                    {opacity: 0},
                ],
                500,
            );
            await fadeOut.finished;
        }
    }

    const startSnowflakes = () => {
        const fragment = document.createDocumentFragment();
        config.containers.forEach((containerObj) => {
            const container = document.getElementById(containerObj.id);
            for (let i = 0; i < config.snowflakesPerContainer; i++) {
                const snowflake = document.createElement("div");
                snowflake.classList.add("snowflake");

                updateSnowflake(snowflake, containerObj.width, true);

                snowflake.addEventListener("animationiteration", (event) => {
                    const snowflake = event.target;
                    updateSnowflake(snowflake, containerObj.width);
                })

                container.appendChild(snowflake);
            }
        });
        document.body.appendChild(fragment);
        animateSnowFadeIn();
    }

    const stopSnowflakes = () => {
        animateSnowFadeOut().then(() => {
                const fragment = document.createDocumentFragment();
                config.containers.forEach((containerObj) => {
                    const container = document.getElementById(containerObj.id);
                    while (container.firstChild) {
                        container.removeChild(container.firstChild);
                    }
                })
                document.body.appendChild(fragment);
            }
        );
    }

    const bindToController = () => {
        const controller = document.getElementById(config.controllerId);
        controller.addEventListener("click", function () {
            if (controller.className === "feature-toggle-button-enabled") {
                controller.className = "feature-toggle-button-disabled";
                stopSnowflakes();
            } else {
                controller.className = "feature-toggle-button-enabled";
                startSnowflakes();
            }
        });
    }

    bindToController();
    // startSnowflakes();
}

(document.addEventListener("DOMContentLoaded", () => {
    snow();
}));