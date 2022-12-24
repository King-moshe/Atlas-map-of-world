import { bordersApi, searchFilter } from "./listAtlas.js";

export default class Atlas {
  constructor(_parent, _item) {
    this.parent = _parent;
    this.name = _item.name.common;
    this.capital = _item.capital;
    this.map = _item.latlng;
    this.flag = _item.flags.png;
    this.coin = Object.keys(_item.currencies);
    this.population = Number(_item.population).toLocaleString();
    this.borders = _item.borders;
  }

  render() {
    let div = document.createElement("div");
    div.className = "col-md-5 mx-auto p-3 border-5 mb-5 bg-dark text-white";
    div.style = "border-radius: 12px; min-height:400px;"
    document.querySelector(this.parent).append(div);
    div.innerHTML = `
    <h3 class="text-center" style="border: 1px solid rgba(255, 255, 255, 0.468); border-radius: 8px 8px 0 0;">${this.name}</h3>
    <img src="${this.flag}" alt="flag" class="card-img-top col-8 pb-2" style="height: 220px;">
    <table id="customers" class="mb-2">
      <tr class="col-12 row mx-auto text-center tr-line">
        <td><strong>Capital :</strong>  ${this.capital}</td>
        <td><strong>Population :</strong> ${this.population}</td>
        <td><strong>Coin :</strong> ${this.coin}</td>
        <td><strong>Borders :</strong> <div class="borders_div"></div> </td>
      </tr>         
    </table>
    <div class="col-md-12">
      <iframe class="col-md-12"
      width="100%" height="280" style="border:0; border-radius: 0 0 8px 8px;" allowfullscreen=""
      src="https://maps.google.com/maps?q=${this.map[0]}, ${this.map[1]}&z=5&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no"
      marginheight="0" marginwidth="0">
      </iframe>

    </div>
        `;

    // create borders link inside the Div 
    let classDiv = div.querySelector(".borders_div");
    if (this.borders) {
      this.borders.forEach(async (item) => {
        let a = document.createElement("a");
        a.className = "linksB";
        classDiv.append(a);
        a.innerHTML = await bordersApi(item);
        a.addEventListener("click", () => {
          searchFilter(a.innerHTML);
        });
      });
    }
    // massage for country without borders
    else {
      classDiv.innerHTML = "This country has no hava borders around";
      classDiv.style = " column-count: 1; color:orange;"

    }


  };

}