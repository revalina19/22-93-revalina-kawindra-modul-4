const menuToggle  =  document.querySelector(".menu-toggle input");
const header  = document.querySelector("header ul");

menuToggle.addEventListener("click", function(){
    header.classList.toggle("slide")
})

function scrollAtas(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
}
