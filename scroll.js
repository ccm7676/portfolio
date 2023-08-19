var scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});

scroll.on('scroll', (obj) => {
    pageHandler(obj.delta.y)
});

function pageHandler(deltaY) {
    deltaY *= 1.1
    let pageNum = Math.floor(deltaY/window.innerHeight);
    console.log(pageNum)
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
            break;
        case 3:
            document.documentElement.style.setProperty("--background-color", "#C4C9D3");
            break;
        case 4:
            document.documentElement.style.setProperty("--background-color", "#FFFFFF");
            break;

    }
}