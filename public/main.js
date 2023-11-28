console.log("Add your visualizations here!");
console.log("hehe");

window.addEventListener("scroll", () => {
    let sideNav = document.querySelector(".sidenav");
    let scrollHeight = document.documentElement.scrollTop;
    let header = document.querySelector(".header");

    if (scrollHeight > header.offsetHeight) {
        sideNav.style.marginTop = `calc(${scrollHeight - header.offsetHeight}px + 3rem)`;
    } else {
        sideNav.style.marginTop = "3rem";
    }
});