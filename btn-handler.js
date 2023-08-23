const readMoreBtn = document.querySelector(".read-more");
const aboutPage = document.querySelector(".about-home");
const menuBtn = document.querySelector("svg.hamburger");
const hideDots = document.querySelectorAll(".xhide");
const pageBtns = document.querySelectorAll(".menu a")


let activeElement = document.querySelector(".menu a.active")
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
            el.style.opacity = 0;
        }); 

    }
        
})

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
