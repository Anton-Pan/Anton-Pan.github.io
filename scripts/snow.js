const snow = () => {
    const getRandomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    }

    let config = {
        containers: [
            {
                id: "snow-container-full",
                width: {
                    // set to -0.5and 100.5 if pop-in/pop-out occurs
                    min: -0.5,
                    max: 100.5
                }
            }
        ],
        animationLength: {
            min: 10,
            max: 20
        },
        animationDelays: { // animation delay so the snow instantly appears on screen
            min: 0,
            max: null // set later to config.animationLength.max
        },
        snowflakesPerContainer: 50
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

    config.containers.forEach((containerObj) => {
        for (let i = 0; i < config.snowflakesPerContainer; i++) {
            const container = document.getElementById(containerObj.id);
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
}

(document.addEventListener("DOMContentLoaded", () => {
    snow();
}));

/*
// SCSS - for reference
.snow-container {
	z-index:  -1;
	padding:  0;
	margin:   0;
	width:    100vw;
	height:   100vh;
	position: fixed;
	overflow: hidden;
}

.snowflake-left, .snowflake-right {
	width:         0.25em;
	height:        0.25em;
	background:    white;
	border-radius: 50%;
	position:      absolute;
	top:           -5vh;
}

@keyframes snowfall {
  0% {
    transform: translate(var(--side-start), 0);
  }
  100% {
    transform: translate(var(--side-end), 110vh);
  }
}

// Snowflakes between 0 and 25vw
@for $i from 1 through 25 {
  .snowflake-left:nth-child(#{$i}) {
    --side-ini: #{random(25)}vw;
    --side-end: #{random(25)}vw;
    animation: snowfall #{5 + random(10)}s linear infinite;
    animation-delay: -#{random(10)}s;
  }
}

// Snowflakes between 75 and 100vw
@for $i from 1 through 25 {
  .snowflake-right:nth-child(#{$i}) {
    --side-ini: #{75 + random(25)}vw;
    --side-end: #{75 + random(25)}vw;
    animation: snowfall #{5 + random(10)}s linear infinite;
    animation-delay: -#{random(10)}s;
  }
}

 */