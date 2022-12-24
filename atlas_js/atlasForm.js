import {  searchFilter, searchFilterUsa} from "./listAtlas.js";
//create variables search and input
export const declareEvents = () => {
    let id_input = document.querySelector("#id_input");
    let id_search = document.querySelector("#id_search");


    id_search.addEventListener("click", () => {
        searchFilter(id_input.value)
    })

    // Create all the links for NAVBAR with value israel, thailand, usa, france
    let israel = document.querySelector("#id_israel");
    israel.addEventListener("click", () => {
        searchFilter("israel")
    });
    let usa = document.querySelector("#id_usa");
    usa.addEventListener("click", () => {
        searchFilterUsa("United States of America")
    });
    let thailand = document.querySelector("#id_thai");
    thailand.addEventListener("click", () => {
        searchFilter("thailand")
    });
    let france = document.querySelector("#id_france");
    france.addEventListener("click", () => {
        searchFilter("france")
    });
   
}