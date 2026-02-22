let hamburger = document.querySelector(".hamburger");
let navbar = document.querySelector(".navbar");
let icon = document.querySelector(".hamburger span")
let isOpen = false;

hamburger.addEventListener("click", function(){

    if(!isOpen){
        navbar.classList.add("active");
        isOpen = !isOpen
    }else {
        navbar.classList.remove("active");
        isOpen = !isOpen
    }
    
})