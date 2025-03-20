import { ProjectManager } from "./project";
import logoImg from "./img/fastRabbit.jpeg";
import { home } from "./home";
const createDomElement = (parentElement, type, className, text = "") => {
  const newElement = document.createElement(type);
  newElement.classList.add(className);
  if (text !== "") {
    newElement.textContent = text;
  }
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
  createDomElement(headerContainer, "div", "title", "TaskRabbit");
  logo.src = logoImg;
};
const createMainContainer = () => {
  const contentBlock = document.getElementById("content");
  const mainContainer = createDomElement(contentBlock, "div", "main-container");

  let itemContainer = createDomElement(mainContainer, "div", "item-container");

  let sideLine = createDomElement(mainContainer, "div", "side-container");
};
const createSideBar = () => {
  const container = document.querySelector(".side-container");

  // containerTitle.textContent = "Categories";
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
  newContainerButton.addEventListener("click", () => {
    if (type === "Project") {
      createNewProject();
    }
    if (type === "Task") {
      createNewTask();
    }
  });
  newContainerButton.textContent = `Add New ${type}`;
};

const displayItem = (container, itemName, type) => {
  let newItem = createDomElement(container, "a", `${type}`);
  // newItem.classList.add(`${itemName}`);
  const title = createDomElement(
    newItem,
    "div",
    `${type}-title`,
    `${itemName}`
  );
  // title.textContent = `${itemName}`;
  if (type === "task") {
    const done = createDomElement(newItem, "button", "done", "Done");
  }
  const edit = createDomElement(newItem, "button", `edit`, "Edit");
  edit.addEventListener("click", () => {
    console.log("EDIT CLICKKKED");
  });
  const deleteItem = createDomElement(newItem, "button", `delete`, "Delete");
  deleteItem.addEventListener("click", () => {
    if (type === "project") {
      ProjectManager.removeProject(itemName);
    } else if (type === "task") {
      console.log(`delete the task associated with this project`);
    }
    DisplayManager.renderProjects();
  });
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
  saveButton.addEventListener("click", () => {
    const input = document.querySelector(".add-project-title").value;
    console.log("SAVE BUTTON IS FINALLY CLICKED");
    const newProject = ProjectManager.addProject(input);
    DisplayManager.renderProjects();
    DisplayManager.renderTasks(newProject.getTasks());
    home;
  });
  const cancelButton = createDomElement(
    newProjectContainer,
    "button",
    "cancel-project"
  );
  cancelButton.textContent = "Cancel";
  cancelButton.addEventListener("click", () => {
    DisplayManager.renderProjects();
  });
};
const createNewTask = () => {
  const addTaskContainer = document.querySelector(".add-task");
  addTaskContainer.textContent = "";
  const newTaskContainer = createDomElement(
    addTaskContainer,
    "div",
    "new-task-container"
  );
  const taskTitle = createInputElement(
    newTaskContainer,
    "text",
    "task-title",
    "Title"
  );
  const taskDescription = createInputElement(
    newTaskContainer,
    "text",
    "task-description",
    "Description"
  );
  const taskDate = createInputElement(
    newTaskContainer,
    "date",
    "task-date",
    ""
  );
  const taskPriority = createDomElement(newTaskContainer, "select", "priority");
  const priorityHigh = createDomElement(
    taskPriority,
    "option",
    "level",
    "High"
  );
  priorityHigh.value = "High";
  const priorityMedium = createDomElement(
    taskPriority,
    "option",
    "level",
    "Medium"
  );
  priorityMedium.value = "Medium";
  const priorityLow = createDomElement(taskPriority, "option", "level", "Low");
  priorityLow.value = "Low";
  const newTaskButtonContainer = createDomElement(
    newTaskContainer,
    "div",
    "task-button-container"
  );
  const saveTask = createDomElement(
    newTaskButtonContainer,
    "button",
    "save-task",
    "Save"
  );
  const cancelTask = createDomElement(
    newTaskButtonContainer,
    "button",
    "cancel-task",
    "Cancel"
  );
  cancelTask.addEventListener("click", () => {
    console.log(
      `NEED to add an active project flag to display the correct tasks`
    );
    DisplayManager.renderTasks();
  });
};
const DisplayManager = (() => {
  const renderProjects = () => {
    const sideContainer = document.querySelector(".side-container");
    createDomElement(sideContainer, "div", "side-title", "Categories");
    ProjectManager.getProjects().forEach((project) => {
      const item = displayItem(sideContainer, project.getName(), "project");
    });
    addNewItemButton(sideContainer, "Project");
  };
  const renderTasks = (tasks) => {
    const taskContainer = document.querySelector(".item-container");
    taskContainer.textContent = "";
    createDomElement(taskContainer, "div", "item-title", "Tasks");
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
  const renderNewTask = () => {
    createNewTask();
  };

  return {
    renderPage,
    renderProjects,
    renderTasks,
    renderNewProject,
    renderNewTask,
  };
})();

export { DisplayManager };
