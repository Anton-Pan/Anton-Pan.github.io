let settings = {
    containers: [
        /*
        {
            id: "snow-container-left",
            distance: {
                min: 0,
                max: 25
            }
        },
        {
            id: "snow-container-right",
            distance: {
                min: 75,
                max: 100
            }
        }
         */
        {
            id: "snow-container-full",
            distance: {
                min: 0,
                max: 100
            }
        }
    ],
    globals: {
        animationLength: {
            min: 10,
            max: 20
        },
        animationDelays: { // animation delay so the snow instantly appears on screen
            min: 0,
            max: null // set later to settings.globals.animationLength.max
        },
        snowflakesPerContainer: 50
    }
}
settings.globals.animationDelays.max = settings.globals.animationLength.max;

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

(document.addEventListener("DOMContentLoaded", () => {
    settings.containers.forEach((containerObj) => {
        for (let i = 0; i < settings.globals.snowflakesPerContainer; i++) {
            const container = document.getElementById(containerObj.id);
            const snowflake = document.createElement("div");
            snowflake.classList.add("snowflake");
            const newSideIni = `${getRandom(containerObj.distance.min, containerObj.distance.max)}vw`;
            const newSideEnd = `${getRandom(containerObj.distance.min, containerObj.distance.max)}vw`;
            const newAnimationLength = getRandom(settings.globals.animationLength.min, settings.globals.animationLength.max);
            const animationDelay = -1 * getRandom(settings.globals.animationDelays.min, settings.globals.animationDelays.max);
            snowflake.style.setProperty('--x-init', newSideIni);
            snowflake.style.setProperty('--x-end', newSideEnd);
            snowflake.style.setProperty('animation', `snowfall ${newAnimationLength}s linear infinite`);
            snowflake.style.setProperty('animation-delay', `${animationDelay}s`);
            container.appendChild(snowflake);
        }
    });
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