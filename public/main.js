import {Runtime, Inspector} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@5/dist/runtime.js";
import define from "https://api.observablehq.com/d/11c4b6df0988a406@1373.js?v=4";
import crimeTableData from './data/crimes.json' assert {type: "json"};

new Runtime().module(define, name => {
    if (name === "part1AvgBar") return new Inspector(document.querySelector("#part1AvgBar"));
    if (name === "part1MultiBar") return new Inspector(document.querySelector("#part1MultiBar"));
    if (name === "viewof yearsmap") return new Inspector(document.querySelector("#part1MapYearSelect"));
    if (name === "viewof priority") return new Inspector(document.querySelector("#part1MapPriorSelect"));
    if (name === "map") return new Inspector(document.querySelector("#part1Map"));
    if (name === "viewof respCityFactor") return new Inspector(document.querySelector("#part2RespCityFactorSelect"));
    if (name === "respCityInfluences") return new Inspector(document.querySelector("#part2RespCityInfluences"));
    if (name === "viewof group3") return new Inspector(document.querySelector("#part3DensityYearSelect"));
    if (name === "popDensity") return new Inspector(document.querySelector("#part3Density"));
    if (name === "viewof respDiffYear") return new Inspector(document.querySelector("#part3RespDiffYearSelect"));
    if (name === "respDiffBar") return new Inspector(document.querySelector("#part3RespDiffBar"));
    if (name === "viewof beatAspects") return new Inspector(document.querySelector("#part3beatAspectSelect"));
    if (name === "demoHeatMap") return new Inspector(document.querySelector("#part3DemoHeatMap"));
  });

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