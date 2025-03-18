import { createDomElement } from "./display";
import logoImg from "./img/fastRabbit.jpeg";
import { DisplayManager } from "./display";
import { ProjectManager } from "./project";

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
  itemContainer.textContent = "Tasks";
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
  const project1 = ProjectManager.addProject("Finish ToDo");
  const project2 = ProjectManager.addProject("Finish ToDo");
  console.log(ProjectManager.getProjects());
  DisplayManager.displayProjects(ProjectManager.getProjects());
})();

export { home };
