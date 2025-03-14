import { createDomElement } from "./displayItem";
import logoImg from "./img/fastRabbit.jpeg";
const createHeader = () => {
  const contentBlock = document.getElementById("content");
  const headerContainer = createDomElement(contentBlock, "div", "header");
  const logo = createDomElement(headerContainer, "img", "logo");
  const title = createDomElement(headerContainer, "div", "title");
  // title.classlist.add("michroma-regular");
  logo.src = logoImg;
  title.textContent = "Task Rabbit";
};

const createMainContainer = () => {
  const contentBlock = document.getElementById("content");
  const mainContainer = createDomElement(contentBlock, "div", "main-container");

  let itemContainer = createDomElement(mainContainer, "div", "item-container");
  itemContainer.textContent = "item container";
  let sideLine = createDomElement(mainContainer, "div", "side-container");
};

const createSideBar = () => {
  const container = document.querySelector(".side-container");
  const containerTitle = createDomElement(container, "div", "side-title");
  containerTitle.textContent = "Categories";
  const containerList = createDomElement(container, "div", "project-container");
  containerList.textContent = "projects";
  const newContainerButton = createDomElement(
    container,
    "button",
    "new-project"
  );
  newContainerButton.textContent = "Add Another Project";
};
const home = (function () {
  createHeader();
  createMainContainer();
  createSideBar();
})();

export { home };
