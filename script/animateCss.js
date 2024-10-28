// this is the Animate.style Javascript functionality for animation onscrolling //
const cards = document.querySelectorAll(".card");
const rubberBand = document.querySelectorAll(".text");
const zoomInRight =  document.querySelectorAll(".zRight");
const zoomInLeft =  document.querySelectorAll(".zLeft");
const bounceInRight = document.querySelectorAll(".bRight");
const bounceInLeft = document.querySelectorAll(".bLeft");

window.addEventListener('scroll', revealElements);

revealElements(); // Reveal initially visible cards and texts

function revealElements() {
    const triggerBottom = window.innerHeight * 4 / 4;

    // Reveal cards
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;

        if (cardTop < triggerBottom) {
            card.classList.add('show');
        } else {
            card.classList.remove('show');
        }
    });

    // Reveal Rubber Band texts from Animate.css
    rubberBand.forEach(text => {
        const textTop = text.getBoundingClientRect().top;

        if (textTop < triggerBottom) {
            text.classList.add('animate__rubberBand'); // Add desired animation class
            text.classList.add('show'); // Optional: if you want to use show class for opacity
        } else {
            text.classList.remove('animate__rubberBand'); // Remove animation class
        }
    });
    
    // Reveal Zoom-In Right texts from Animate.css
    zoomInRight.forEach(Right => {
        const RightTop = Right.getBoundingClientRect().top;

        if (RightTop < triggerBottom) {
            Right.classList.add('animate__zoomInRight'); // Add desired animation class
            Right.classList.add('show'); // Optional: if you want to use show class for opacity
        } else {
            Right.classList.remove('animate__zoomInRight'); // Remove animation class
        }
    });

    
    // Reveal Zoom-In Left texts from Animate.css
    zoomInLeft.forEach(Left => {
        const LeftTop = Left.getBoundingClientRect().top;

        if (LeftTop < triggerBottom) {
            Left.classList.add('animate__zoomInLeft'); // Add desired animation class
            Left.classList.add('show'); // Optional: if you want to use show class for opacity
        } else {
            Left.classList.remove('animate__zoomInLeft'); // Remove animation class
        }
    });
    
    bounceInRight.forEach(bRight => {
        const bRightTop = bRight.getBoundingClientRect().top;

        if (bRightTop < triggerBottom) {
            bRight.classList.add('animate__bounceInRight'); // Add desired animation class
            bRight.classList.add('show'); // Optional: if you want to use show class for opacity
        } else {
            bRight.classList.remove('animate__bounceInRight'); // Remove animation class
        }
    });
    
    bounceInLeft.forEach(bLeft => {
        const bLeftTop = bLeft.getBoundingClientRect().top;

        if (bLeftTop < triggerBottom) {
            bLeft.classList.add('animate__bounceInLeft'); // Add desired animation class
            bLeft.classList.add('show'); // Optional: if you want to use show class for opacity
        } else {
            bLeft.classList.remove('animate__bounceInLeft'); // Remove animation class
        }
    });
}