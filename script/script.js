const hideSlides = () => Array.from(document.getElementsByClassName("hidden")).forEach(e => e.style.display = "none");
const showSlide = () => document.getElementById("slide").style.display = "block";
const repeat = () => document.getElementsByClassName("images-wrapper")[0].firstChild.setAttribute("id", "slide");

hideSlides();

function slide() {
    
    const slide = document.getElementById("slide");

    slide.removeAttribute("id");
    slide.nextElementSibling === null ? repeat() : slide.nextElementSibling.setAttribute("id", "slide");
    
    hideSlides();
    showSlide();
    
}

let action = setInterval(() => {
    slide();
}, 3000);

document.getElementById("interrupt").addEventListener("click", () => {
    clearInterval(action);
});

document.getElementById("resume").addEventListener("click", () => {
    action = setInterval(() => {
        slide();
    }, 3000);
});