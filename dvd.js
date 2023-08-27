const logo = document.querySelector(".logo");

let movX = window.innerWidth/100;
let movY = window.innerWidth/100;



function dvdAnimate() {
    let logoRect = logo.getBoundingClientRect();

    let curX = logoRect.left;
    let curY = logoRect.top;

    let fullH = curY + logoRect.height;
    let fullW = curX + logoRect.width;

    let winH = window.innerHeight;
    let winW = window.innerWidth;

    let tmpX = movX;
    let tmpY = movY;

    if(fullH >= winH || curY < 0) {
        movY *= -1;
    }
    if(fullW >= winW || curX < 0) {
        movX *= -1;
    }
    

    if(fullH + tmpY - winH > 0){
        tmpY = fullH + tmpY - winH;
    }
    else if(curY + tmpY < 0) {
        tmpY = curY - tmpY;
    }
    if(fullW + tmpX - winW > 0){
        tmpX = fullW + tmpX - winW;
    }
    else if(curX + tmpX < 0) {
        tmpX = curX - tmpX;
    }
    
    logo.style.left = curX + movX
    logo.style.top = curY + movY;

    
    setTimeout(dvdAnimate,100);

}

dvdAnimate()