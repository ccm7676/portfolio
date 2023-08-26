const logo = document.querySelector(".logo");

let movX = 3;
let movY = 3;



function dvdAnimate() {
    let logoRect = logo.getBoundingClientRect();

    let curX = logoRect.left;
    let curY = logoRect.top;
    let logoHeight = logoRect.height;
    let logoWidth = logoRect.width;

    if(curY + logoHeight >= window.innerHeight || curY < 0) {
        movY *= -1;
        console.log("doogly")
    }

    if(curX + logoWidth >= window.innerWidth || curX < 0) {
        movX *= -1;
        console.log("doox")
    }
    

    
    logo.style.left = curX + movX
    logo.style.top = curY + movY;

    
    setTimeout(dvdAnimate,25);

}

dvdAnimate()