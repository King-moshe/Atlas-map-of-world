import Atlas from "./atlasItem.js";
let atlas_ar = [];
export const doApi = async (_searchQ) => {
    let url = `https://restcountries.com/v3.1/all`;
    try {
        let resp = await fetch(url);
        let data = await resp.json();
        atlas_ar.push(...data);
        createListOfFour();

    }
    catch (err) {
        alert("error");
        console.log(err);
    }
}

export const searchFilter = (_searchQ) => {
    let filter_ar = atlas_ar.filter((item) => {
        return item.name.common.toLowerCase().includes(_searchQ.toLowerCase());
    })
    createList(filter_ar, "#id_row", Atlas);
}
//search for USA country
export const searchFilterUsa = (_searchQ) => {
    let filter_ar = atlas_ar.filter((item) => {
        return item.name.official.toLowerCase().includes(_searchQ.toLowerCase());
    })
    createList(filter_ar, "#id_row", Atlas);
}

//Show four country on the wall
const createListOfFour = () => {
    let filter_ar = atlas_ar.filter((item, i) =>
        item.name.common.includes("Israel") ||
        item.name.common.includes("Aruba") ||
        item.name.common.includes("Thailand") ||
        item.name.common.includes("France")
    )
    createList(filter_ar, "#id_row", Atlas)
}



const createList = (_ar, _parent, Atlas) => {
    document.querySelector(_parent).innerHTML = "";
    _ar.forEach((item) => {
        let newItem = new Atlas(_parent, item);
        newItem.render();
    })
}

//borders name from API page
export const bordersApi = async (code) => {
    let url = `https://restcountries.com/v3.1/alpha/${code}`;
    let resp = await axios.get(url);
    let fullCountry = await resp.data[0].name.common;
    return fullCountry;
};





