import ProjectManager from "./project";
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

const displayProject = (project) => {
  const sideContainer = document.querySelector(".side-title");
  let newProject = createDomElement(sideContainer, "div", "project");
  newProject.textContent = `${project.getName()}`;

  return newProject;
};
const addNewProjectButton = () => {
  const sideContainer = document.querySelector(".side-title");
  const newContainerButton = createDomElement(
    sideContainer,
    "button",
    "new-project"
  );
  newContainerButton.textContent = "Add Another Project";
};
const DisplayManager = (() => {
  const renderProjects = () => {
    ProjectManager.getProjects().forEach((project) => {
      displayProject(project);
    });
    addNewProjectButton();
  };
  const renderPage = () => {
    createHeader();
    createMainContainer();
    createSideBar();
    renderProjects();
    // createMainContainer();
    // createSideBar();
  };

  return { renderPage, renderProjects };
})();

export { DisplayManager };
