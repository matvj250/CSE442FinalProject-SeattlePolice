import crimeTableData from './data/crimes.json' assert {type: "json"};

// Move side navigation on page scroll only if scrolled past page header
window.addEventListener("scroll", () => {
    if (window.innerWidth >= 992) {
        let sideNav = document.querySelector(".sidenav");
        let scrollHeight = document.documentElement.scrollTop;
        let header = document.querySelector(".header");

        if (scrollHeight > header.offsetHeight) {
            sideNav.style.marginTop = `calc(${scrollHeight - header.offsetHeight}px + 3rem)`;
        } else {
            sideNav.style.marginTop = "3rem";
        }
    }
});

// Flip on card click listener
let cards = document.querySelectorAll(".card-container");
for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", () => {
        cards[i].classList.toggle("hover");
    });
    cards[i].addEventListener("focus", () => {
        cards[i].classList.toggle("hover");
    })
}

let table = document.querySelector("#part3CrimeTable tbody");
crimeTableData.forEach((beat) => {
    let row = document.createElement("tr");
    let rowHeader = document.createElement("th");
    rowHeader.scope = "row";
    rowHeader.textContent = beat.beat;
    row.appendChild(rowHeader);
    for (let i = 2010; i <= 2020; i += 5) {
        const crimes = beat["top-crimes-" + i];
        let rowElement = document.createElement("td");
        let crimesList =  document.createElement("ol");
        for (const crime of crimes) {
            let crimeElement = document.createElement("li");
            crimeElement.textContent = crime.crime + " - " + crime.count;
            crimesList.appendChild(crimeElement);
        }
        rowElement.appendChild(crimesList);
        row.appendChild(rowElement);
    }
    table.appendChild(row);
});