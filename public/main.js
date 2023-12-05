import {Runtime, Inspector} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@5/dist/runtime.js";
import define from "https://api.observablehq.com/d/11c4b6df0988a406@1373.js?v=4";

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