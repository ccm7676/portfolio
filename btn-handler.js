const readMoreBtn = document.querySelector(".read-more");
const aboutPage = document.querySelector(".about-home");
const menuBtn = document.querySelector(".ham-container");
const hideDots = document.querySelectorAll(".xhide");
const pageBtns = document.querySelectorAll(".menu a");

const projBtn = document.querySelector(".view-proj");
const projImg = document.querySelector(".proj-img");
const projPage = document.querySelector(".proj-home");

let activeElement = document.querySelector(".menu a.active")

//makes every menu btn active when clicked and sets the url 
pageBtns.forEach((el) => {
    el.addEventListener("click", ()=> {

        let docStyle = document.documentElement.style;
        let urlPath = el.innerHTML.toLowerCase() == "home" ? "" : "#" + el.innerHTML.toLocaleLowerCase();

        window.history.pushState("page", "Title", "/" + urlPath);

        activeElement.classList.remove("active")
        activeElement = el;
        
        el.classList.add("active");

        docStyle.setProperty("--menu-state", "hidemenu");

        hideDots.forEach((el) => {
            el.style.opacity = 1;
        }); 

    }) 
})  

//shows the menu when hamburger is clicked
menuBtn.addEventListener("click", () => {
    let docStyle = document.documentElement.style;

    if(docStyle.getPropertyValue("--menu-state") == "showmenu"){

        docStyle.setProperty("--menu-state", "hidemenu");

        hideDots.forEach((el) => {
            el.style.opacity = 1;
        }); 

    }

    else {

        docStyle.setProperty("--menu-state", "showmenu")

        hideDots.forEach((el) => {
            el.style.setProperty("opacity","0");
        }); 

    }
        
})

//Shows the extra text when read more is clicked 
readMoreBtn.addEventListener("click", () => {
    if(readMoreBtn.innerHTML == "READ MORE"){
        
        [...aboutPage.children].forEach((el) => {
            el.classList.add("about-more");
        }); 
        readMoreBtn.innerHTML = "READ LESS"

    }

    else {

        [...aboutPage.children].forEach((el) => {
            el.classList.remove("about-more");
        }); 
        readMoreBtn.innerHTML = "READ MORE";
        
    }

})

projBtn.addEventListener("click", ()=> {
    scroll.scrollTo(projPage);
    document.documentElement.style.setProperty("--proj-page", "show-proj");

})