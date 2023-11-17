import "../css/style.css";
import {menu} from "./menu";
import { DOMselectors } from "./Dom";
//information for each page
const Appe = menu.filter((menu) => menu.Genre === "Appetizer");
const main = menu.filter((menu) => menu.Genre === "MC");
const des = menu.filter((menu) => menu.Genre === "Dessert");

//mking the cards
function Mealinfo() {
    const make= {
        name:DOMselectors.AniNameform.value,
         img:DOMselectors.AniImgform.value,
         price:DOMselectors.AniDescform.value,}
    return make
    }
function MakeCards(Meal){
    document.querySelector(".flex-container").insertAdjacentHTML("afterbegin", `<div class="card">
<h1 class="card-title">${Meal.name}</h1>
<img src="${Meal.img}" alt="" class="card-img">
<h2 class="animal-desc">${Meal.price}</h2>
</div>`)
}

//Button work
DOMselectors.
Form.addEventListener("submit", (event) => {
    event.preventDefault()
    const Concard = Mealinfo()
    MakeCards(Concard)
})
