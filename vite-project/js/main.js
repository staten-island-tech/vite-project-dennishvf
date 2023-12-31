import "../css/style.css";
import {menu} from './menu';
import { DOMselectors } from "./Dom";

//making the cards
function Insert(arr){
   arr.forEach((Meal) => {
        document.querySelector(".flex-container").insertAdjacentHTML("afterbegin",
    `<div class="card">
    <h1 class="card-title">${Meal.Name}</h1>
    <img src="${Meal.Picture}" alt="" class="card-img">
    <p class="card-price">${Meal.Price}</p>
    </div>`)
    });
    
}
Insert(menu)

//Button work
DOMselectors.Form.addEventListener("submit", (event) => {
    event.preventDefault()
    
});

DOMselectors.AppeButton.addEventListener("click",function(){
DOMselectors.FlexContainer.innerHTML = ""
const Appe = menu.filter((menu) => menu.Genre === "Appetizer");
Insert(Appe)
} );
DOMselectors.MCButton.addEventListener("click",function(){
    DOMselectors.FlexContainer.innerHTML=""
    const Main = menu.filter((menu) => menu.Genre === "MC");
    Insert(Main)
});
DOMselectors.DessertButton.addEventListener("click",function(){
    DOMselectors.FlexContainer.innerHTML=""
    const Des = menu.filter((menu) => menu.Genre === "Dessert");
    Insert(Des)
});
//Theme button
document.getElementById("Themeb").addEventListener("click", function(){
    if(document.body.classList.contains("Cozy")){
        document.body.classList.add("Night");
        document.body.classList.remove("Cozy");}
        else {
            document.body.classList.add("Cozy");
            document.body.classList.remove("Night");}
        });


