function runStackCardAnimation() {
    
    if (window.innerWidth <= 767) {
        return;
    }

    // Select all stack-card_sticky-strip elements
    const stackCardStickyStrips = document.querySelectorAll('.stack-card_sticky-strip');

    // Helper function to generate a random rotation degree

    function getRandomRotation() {
        // Generate a number between 0 and 1
        const random = Math.random();
        if (random < 0.5) {
            // If random is less than 0.5, pick a number between -45 to -10
            return (random * 35 - 15).toFixed(2) + "deg";
        } else {
            // Else, pick a number between 10 to 45
            return (random * 5 + 10).toFixed(2) + "deg";
        }
    }

    stackCardStickyStrips.forEach(stackCardStickyStrip=>{
        // Find the child stack-card_component for the current stack-card_sticky-strip
        const stackCardComponent = stackCardStickyStrip.querySelector('.stack-card_component');

        // Calculate the left distance from the viewport
        let leftDistance = stackCardStickyStrip.getBoundingClientRect().left;

        let negativeMarginLeft = -1 * leftDistance + "px";

        // Set a random rotation for each stack-card_component

        let easingValue = "power3.in";

        let stackCardTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: stackCardStickyStrip,
                start: "top bottom=+10%",
                end: "top top",
                scrub: true,
            }
        });

        stackCardTimeline.from(stackCardComponent, {
            x: "0rem",
            duration: 1,
            ease: easingValue
        }).from(stackCardComponent, {
            scale: "0.7",
            duration: 1,
            ease: easingValue
        }, "<").from(stackCardComponent, {
            borderRadius: "2.5rem",
            duration: 1,
            ease: easingValue
        }, "<").to(stackCardComponent, {
            rotate: "0",
            duration: 1,
            ease: easingValue
        }, "<");
    }
    );
}

// Run the function once when the DOM is ready
document.addEventListener("DOMContentLoaded", runStackCardAnimation);

// Rerun the function whenever the window is resized
window.addEventListener("resize", runStackCardAnimation);


