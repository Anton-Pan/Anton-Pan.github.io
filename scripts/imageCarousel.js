const photoCarousel = () => {
    const images = [
            "horizontal/cat-1.jpeg",
            "vertical/aurora-1.jpeg",
            "horizontal/film-on-rainy-window.jpeg",
            "vertical/autumn-house.jpeg",
            "horizontal/foggy-streetlights.jpeg",
            "vertical/balconies-1.jpeg",
            "horizontal/fogy-streetlight-1.jpeg",
            "vertical/balconies-3.jpeg",
            "horizontal/horse.jpeg",
            "vertical/banconies-2.jpeg",
            "horizontal/leaves-2.jpeg",
            "vertical/diner.jpeg",
            "horizontal/snowy-bridge-at-night.jpeg",
            "vertical/cat-in-tree.jpeg",
            "horizontal/snowy-field.jpeg",
            "vertical/granville.jpeg",
            "horizontal/snowy-night-alley.jpeg",
            "vertical/leaves-1.jpeg",
            "horizontal/snowy-overpass-1.jpeg",
            "vertical/palm-trees.jpeg",
            "horizontal/spiderweb-on-dead-plant.jpeg",
            "vertical/neon-sign.jpeg",
            "horizontal/sunset-and-balconies.jpeg",
            "vertical/regis-hotel.jpeg",
            "horizontal/tail-light-trails-horizontal.jpeg",
            "vertical/pool-and-balconies.jpeg",
            "horizontal/trainyard.jpeg",
            "vertical/seagulls.jpeg"
        ]
    const config = {
        imagesInView: 3,
        oversizeFactor: 30,
    }
    const carouselContainer = document.getElementById("photo-carousel");
    let currentArrayPosition = 0;

    const getImageIndex = (currentIndex, dir) => {
        const lastImageIndex = images.length - 1;
        let newIndex = currentIndex += dir;
        if (newIndex < 0){
            newIndex = newIndex + lastImageIndex ;
        }
        else if (newIndex > lastImageIndex) {
            newIndex = newIndex - lastImageIndex;
        }
        return newIndex;
    }

    const handleButtonClickLeft = () => {

    }

    const handleButtonClickRight = () => {
        // write new image, hidden
        // delete original image
        // movement animation
        // unhide new image
    }

    const createCarousel = () => {
        const middle = Math.ceil(config.imagesInView / 2);
        let counter = 0;
        while (counter !== middle){
            
        }
    }
}

(document.addEventListener("DOMContentLoaded", () => {
    photoCarousel();
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