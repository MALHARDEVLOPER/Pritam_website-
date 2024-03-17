// Add this JavaScript code to a <script> tag or a separate JavaScript file

// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle the scrolling animation
function handleScrollAnimation() {
    const aboutSection = document.getElementById('about');
    const col2About = document.getElementById('col2-about');
    let animationTriggered = false;

    window.addEventListener('scroll', function() {
        if (isInViewport(aboutSection) && !animationTriggered) {
            col2About.classList.add('slide-in-right');
            animationTriggered = true;
        }
    });
}

// Call the function to handle the scrolling animation
handleScrollAnimation();



var tablink=document.getElementsByClassName("tab-link");
    var tabcontent=document.getElementsByClassName("tab-cont");

    function opentab(tabname){
        for(tablin of tablink){
            tablin.classList.remove("active");
        }
        for(tabcont of tabcontent){
            tabcont.classList.remove("activ");
        }
        event.currentTarget.classList.add("active");
        document.getElementById(tabname).classList.add("activ");
    }



    window.addEventListener('scroll', function() {
        let scrollPosition = window.pageYOffset;
    
        // Adjust the background position of the container element based on the scroll position
        document.querySelector('.container').style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
    });
    