import { IndexModel } from "./model/IndexModel.js";
import { IndexView } from "./view/IndexView.js";
import { IndexController } from "./controller/IndexController.js";
//MAIN
const index = new IndexController(new IndexModel(), new IndexView());
