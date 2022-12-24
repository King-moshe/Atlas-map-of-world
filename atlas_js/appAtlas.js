import { declareEvents } from "./atlasForm.js";
import { doApi } from "./listAtlas.js";
const init = () => {
    doApi();
    declareEvents();
}




init();