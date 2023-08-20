const readMoreBtn = document.querySelector(".read-more");
const aboutPage = document.querySelector(".about-home");



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