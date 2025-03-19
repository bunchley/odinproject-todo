import { ProjectManager } from "./project";
import logoImg from "./img/fastRabbit.jpeg";
const createDomElement = (parentElement, type, className) => {
  const newElement = document.createElement(type);
  newElement.classList.add(className);
  parentElement.append(newElement);
  return newElement;
};
const createInputElement = (parentElement, type, className, placeholder) => {
  const newInput = document.createElement("input");
  newInput.type = `${type}`;
  newInput.classList.add(`${className}`);
  newInput.placeholder = `${placeholder}`;
  parentElement.append(newInput);
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
  const itemTitle = createDomElement(itemContainer, "div", "item-title");
  let sideLine = createDomElement(mainContainer, "div", "side-container");
};
const createSideBar = () => {
  const container = document.querySelector(".side-container");
  const containerTitle = createDomElement(container, "div", "side-title");
  containerTitle.textContent = "Categories";
};
const addNewItemButton = (container, type) => {
  const buttonContainer = createDomElement(
    container,
    "div",
    `add-${type.toLowerCase()}`
  );
  const newContainerButton = createDomElement(
    buttonContainer,
    "button",
    `${type.toLowerCase()}`
  );
  newContainerButton.textContent = `Add New ${type}`;
};

const displayItem = (container, itemName, type) => {
  let newItem = createDomElement(container, "a", `${type}`);
  // newItem.classList.add(`${itemName}`);
  const title = createDomElement(newItem, "div", `${type}-title`);
  title.textContent = `${itemName}`;
  if (type === "task") {
    const done = createDomElement(newItem, "button", "done");
    done.textContent = "Done";
  }
  const edit = createDomElement(newItem, "button", `edit`);
  edit.textContent = `Edit`;
  const deleteItem = createDomElement(newItem, "button", `delete`);
  deleteItem.textContent = `Delete`;
  return newItem;
};

const createNewProject = () => {
  const sideContainer = document.querySelector(".side-container");
  const addProjectContainer = document.querySelector(".add-project");
  addProjectContainer.textContent = "";
  const newProjectContainer = createDomElement(
    addProjectContainer,
    "div",
    "new-project"
  );
  const inputName = createInputElement(
    newProjectContainer,
    "text",
    "add-project-title",
    "New Category"
  );
  const saveButton = createDomElement(
    newProjectContainer,
    "button",
    "save-project"
  );
  saveButton.textContent = "Save";
  const cancelButton = createDomElement(
    newProjectContainer,
    "button",
    "cancel-project"
  );
  cancelButton.textContent = "Cancel";
};
const DisplayManager = (() => {
  const renderProjects = () => {
    const sideContainer = document.querySelector(".side-container");
    ProjectManager.getProjects().forEach((project) => {
      const item = displayItem(sideContainer, project.getName(), "project");
    });
    addNewItemButton(sideContainer, "Project");
  };
  const renderTasks = (tasks) => {
    const taskContainer = document.querySelector(".item-container");
    tasks.forEach((task) => {
      displayItem(taskContainer, task.title, "task");
    });
    addNewItemButton(taskContainer, "Task");
  };
  const renderPage = (tasks) => {
    createHeader();
    createMainContainer();
    createSideBar();
    renderProjects();
  };
  const renderNewProject = (name) => {
    createNewProject(name);
  };

  return { renderPage, renderProjects, renderTasks, renderNewProject };
})();

export { DisplayManager };
