import "../css/style.css";
import {menu} from './menu';
import { DOMselectors } from "./Dom";

//making the cards
menu.forEach((Meal) => {
    document.querySelector(".flex-container").insertAdjacentHTML("afterbegin",
`<div class="card">
<h1 class="card-title">${Meal.Name}</h1>
<img src="${Meal.Picture}" alt="" class="card-img">
<p class="card-price">${Meal.Price}</p>
</div>`)
});

//information for each page
const Appe = menu.filter((menu) => menu.Genre === "Appetizer");
const Main = menu.filter((menu) => menu.Genre === "MC");
const Des = menu.filter((menu) => menu.Genre === "Dessert");

//Button work
DOMselectors.Form.addEventListener("submit", (event) => {
    event.preventDefault()
    
});
DOMselectors.AppeButton.addEventListener("click", (event1) => console.log(Appe));
DOMselectors.MCButton.addEventListener("click", (event1) => console.log(Main));
DOMselectors.DessertButton.addEventListener("click", (event1) => console.log(Des));
DOMselectors.AppeButton.addEventListener("click", (event2) => ".flex-container".innerhtml= "")
