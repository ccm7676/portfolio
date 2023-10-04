const cursor = document.querySelector(".cursor-container");
const mainBtns = Array.from(document.querySelectorAll(".btn"));
const menuBtns = Array.from(document.querySelectorAll(".menu a"));
let Btns = mainBtns.concat(menuBtns);

let initMM = true;

Btns.push(document.querySelector(".ham-container"));

window.addEventListener("mousemove", (e) => {
    let vh = window.innerHeight/100;
    cursor.style.top = e.clientY - 2.5*vh + "px";
    cursor.style.left = e.clientX - 2.5*vh + "px";
})

window.addEventListener("mousedown", ()=> {
    cursor.classList.add("click")
})

window.addEventListener("mouseup", ()=> {
    cursor.classList.remove("click")
})

document.documentElement.addEventListener("mouseenter", () => {
    document.documentElement.style.setProperty("--cursor-state","showcursor")
})

document.documentElement.addEventListener("mousemove", () => {
    if (initMM) {
        document.documentElement.style.setProperty("--cursor-state","showcursor")
    }
    
})

document.documentElement.addEventListener("mouseleave", () => {
    document.documentElement.style.setProperty("--cursor-state","hidecursor")
})

Btns.forEach((el) => {
    el.addEventListener("mouseenter", () => {
        initMM = false
        document.documentElement.style.setProperty("--cursor-state","hidecursor")
    })
    el.addEventListener("mouseleave", () => {
        initMM = true
        document.documentElement.style.setProperty("--cursor-state","showcursor")
    })
})