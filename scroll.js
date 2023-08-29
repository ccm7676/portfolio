const programmingTxt = document.querySelector(".proj-title");
const loadingContainer = document.querySelector(".loading");

var scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});


document.addEventListener("DOMContentLoaded", () => {
    console.log("hhello")
    setTimeout(() => {
        document.documentElement.style.setProperty("--load-state", "finishload"); 
        loadingContainer.children[0].style.setProperty("animation-iteration-count", "1");
        setTimeout(()=>{loadingContainer.style.setProperty("opacity", "0"); loadingContainer.style.setProperty("pointer-events", "none")},2000);
    }, 1000);
})

scroll.on('scroll', (obj) => {
    pageHandler(obj.delta.y)
});

let charCounter = 0;
let runagain = true;
function writeAnim(){
    typeText = "PROGRAMMING & DESIGN"
    if(charCounter < typeText.length && runagain == true) {
        programmingTxt.innerHTML += typeText.charAt(charCounter);
        charCounter += 1;
        runagain = false;
        setTimeout(()=>{runagain=true; writeAnim()}, 50);
    }
        
};
    


function pageHandler(deltaY) {
    deltaY *= 1.1
    let pageNum = Math.floor(deltaY/window.innerHeight);
    switch (pageNum) {
        case 0:
            document.documentElement.style.setProperty("--background-color", "#EEE5D8");
            break
        case 1:
            document.documentElement.style.setProperty("--background-color", "#C6C6C6");
            document.documentElement.style.setProperty("--about-state", "running");
            break;
        case 2:
            document.documentElement.style.setProperty("--background-color", "#FFFFFF");       
            document.documentElement.style.setProperty("--proj-state", "running");     
            writeAnim();
            break;
        case 3:
            document.documentElement.style.setProperty("--background-color", "#C4C9D3");
            document.documentElement.style.setProperty("--music-state", "running");    
            break;
        case 4:
            document.documentElement.style.setProperty("--background-color", "#FFFFFF");
            document.documentElement.style.setProperty("--photo-state", "running");   
            break;

    }
}

