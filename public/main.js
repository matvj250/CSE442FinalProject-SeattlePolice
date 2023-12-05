// Move side navigation on page scroll only if scrolled past page header
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

// Flip on card click listener
let cards = document.querySelectorAll(".card-container");
for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", () => {
        cards[i].classList.toggle("hover");
    });
}