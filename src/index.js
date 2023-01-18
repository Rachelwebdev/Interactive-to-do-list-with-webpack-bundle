import "./style.css";
import cardDisplay from "./modules/listCard";

const render = () => {
  window.addEventListener("load", cardDisplay());
};
render();
