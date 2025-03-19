import { ProjectManager } from "./project";
import logoImg from "./img/fastRabbit.jpeg";
const createDomElement = (parentElement, type, className) => {
  const newElement = document.createElement(type);
  newElement.classList.add(className);
  parentElement.append(newElement);
  return newElement;
};
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
};
const addNewProjectButton = () => {
  const sideContainer = document.querySelector(".side-container");
  const newContainerButton = createDomElement(
    sideContainer,
    "button",
    "new-project"
  );
  newContainerButton.textContent = "Add Another Project";
};

const displayItem = (container, itemName, type) => {
  let newItem = createDomElement(container, "div", `${type}`);
  newItem.textContent = `${itemName}`;
  return newItem;
};
const DisplayManager = (() => {
  const renderProjects = () => {
    ProjectManager.getProjects().forEach((project) => {
      const sideContainer = document.querySelector(".side-container");
      displayItem(sideContainer, project.getName(), "project");
    });
    addNewProjectButton();
  };
  const renderTasks = (tasks) => {
    tasks.forEach((task) => {
      const taskContainer = document.querySelector(".item-container");
      displayItem(taskContainer, task.title, "task");
      // displayItem.textContent = `${task.getName()}`;
    });
  };
  const renderPage = (tasks) => {
    createHeader();
    createMainContainer();
    createSideBar();
    renderProjects();
  };

  return { renderPage, renderProjects, renderTasks };
})();

export { DisplayManager };
