// --------------------toggle style switch -----------------
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click",()=>{
    document.querySelector(".style-switcher").classList.toggle("open");
})

// hide style swtich on screen 
window.addEventListener(".scroll" , ()=>{
    if(document.querySelector(".style-switcher").classList.contains("open")){
        document.querySelector(".style-switcher").classList.remove("open");
        console.log("hides")
    }
})

// them color swticher ----------------------------------------------
const alternateStyle = document.querySelectorAll(" .alternate-style");
function setActiveStyle(color){
    alternateStyle.forEach((style) => {
        if(color===style.getAttribute("title")){
            style.removeAttribute("disabled")
        }
        else{
            style.setAttribute("disabled", "true")        }
    })
}
// them light and dark mode swticher ----------------------------------------------
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click",() =>{
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load", ()=>{
    if(document.body.classList.contains("dark")){
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else{
        dayNight.querySelector("i").classList.add("fa-moons");
    }
})