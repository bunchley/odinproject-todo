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
  return newInput;
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
    const taskTitle = document.querySelector(".task-title");
    const taskDescription = document.querySelector(".task-description");
    if (type === "Project") {
      createNewProject();
    }
    if (type === "Task") {
      createNewTask();
    }
  });
  newContainerButton.textContent = `Add New ${type}`;
};
const displayEditTask = (newItem, task) => {
  console.log("Display Edit Task", newItem);
  newItem.textContent = "";
  newItem.classList.add("edit-container");
  createTaskInputs(newItem, true);
  createTaskPriority(newItem, true);
  createTaskButtons(newItem, true, task);
  const editFields = document.querySelectorAll(".edit");
  editFields.forEach((field) => {
    console.log("edit field:", field);
    if (field.classList.contains("task-title")) {
      field.value = task.title;
    }
    if (field.classList.contains("task-description")) {
      field.value = task.description;
    }
    if (field.classList.contains("task-date")) {
      field.value = task.date;
    }
    if (field.classList.contains("priority")) {
      field.value = task.priority;
    }
  });
};

const displayTask = (container, task, count) => {
  let newItem = createDomElement(container, "a", `task`);
  newItem.classList.add(`${count}`);
  const title = createDomElement(newItem, "div", `task-title`, `${task.title}`);
  const done = createDomElement(newItem, "button", "done", "Done");
  done.addEventListener("click", () => {
    ProjectManager.getActiveProject().completeTask(task.title);
    newItem.classList.add("finished");
    ProjectManager.getActiveProject().getTasks();
  });
  const edit = createDomElement(newItem, "button", `edit-button`, "Edit");
  edit.addEventListener("click", () => {
    console.log("EDIT CLICKKKED");
    displayEditTask(newItem, task);
  });
  const deleteItem = createDomElement(newItem, "button", `delete`, "Delete");
  deleteItem.addEventListener("click", () => {
    console.log(`delete selected`);
    ProjectManager.getActiveProject().removeTask(task.title);
    DisplayManager.renderTasks(ProjectManager.getActiveProject().getTasks());
    DisplayManager.renderProjects();
  });
  return newItem;
};
const displayItem = (container, itemName, type, count) => {
  let newItem = createDomElement(container, "a", `${type}`);
  newItem.classList.add(`${count}`);
  const title = createDomElement(
    newItem,
    "div",
    `${type}-title`,
    `${itemName}`
  );
  const deleteItem = createDomElement(newItem, "button", `delete`, "Delete");
  deleteItem.addEventListener("click", () => {
    ProjectManager.removeProject(itemName);
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
    // ProjectManager.setActive();
    ProjectManager.setActive(newProject.getName());
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
const createTaskInputs = (container, editing = false) => {
  const taskTitle = createInputElement(
    container,
    "text",
    "task-title",
    "Title"
  );
  const taskDescription = createInputElement(
    container,
    "text",
    "task-description",
    "Description"
  );
  const taskDate = createInputElement(container, "date", "task-date", "");
  if (editing === true) {
    taskTitle.classList.add("edit");
    taskDescription.classList.add("edit");
    taskDate.classList.add("edit");
  }
};
const createTaskPriority = (container, editing = false) => {
  const taskPriority = createDomElement(container, "select", "priority");
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
  if (editing === true) {
    taskPriority.classList.add("edit");
  }
};
const createTaskButtons = (container, editing = false, task = null) => {
  const newTaskButtonContainer = createDomElement(
    container,
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

  saveTask.addEventListener("click", () => {
    const activeProject = ProjectManager.getActiveProject();
    let taskTitle = document.querySelector("input.task-title").value;
    let taskDescription = document.querySelector(
      "input.task-description"
    ).value;
    let taskDate = document.querySelector("input.task-date").value;
    let taskPriority = document.querySelector("select.priority").value;
    if (!taskTitle) {
      alert("Task title cannot be empty.");
      return;
    }
    if (!activeProject) {
      alert("Select a project");
      return;
    }
    if (editing === false) {
      activeProject.addTask(
        taskTitle,
        taskDescription,
        taskDate,
        taskPriority,
        false
      );
    }
    if (editing === true) {
      console.log("save clicked for editing");
      console.log("old task title:", task.title);
      console.log("new task title:", taskTitle);
      activeProject.updateTask(
        task.title,
        taskTitle,
        taskDescription,
        taskDate,
        taskPriority
      );
    }
    DisplayManager.renderTasks(activeProject.getTasks());
    taskTitle = "";
    taskDescription = "";
    taskDate = "";
    taskPriority = "";
  });

  cancelTask.addEventListener("click", () => {
    DisplayManager.renderTasks(ProjectManager.getActiveProject().getTasks());
    taskTitle = "";
    taskDescription = "";
    taskDate = "";
    taskPriority = "";
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
  createTaskInputs(newTaskContainer);
  createTaskPriority(newTaskContainer);
  createTaskButtons(newTaskContainer);
};
const DisplayManager = (() => {
  const renderProjects = () => {
    let count = 0;
    const sideContainer = document.querySelector(".side-container");
    sideContainer.textContent = "";
    createDomElement(sideContainer, "div", "side-title", "Categories");
    ProjectManager.getProjects().forEach((project) => {
      const item = displayItem(
        sideContainer,
        project.getName(),
        "project",
        count++
      );
      if (ProjectManager.getActiveProject() === project) {
        item.classList.add("active");
      }
      item.addEventListener("click", () => {
        ProjectManager.setActive(project.getName());
        renderProjects(); // Re-render UI to highlight selection
        renderTasks(project.getTasks());
      });
    });
    addNewItemButton(sideContainer, "Project");
  };
  const renderTasks = (tasks) => {
    let count = 0;
    const taskContainer = document.querySelector(".item-container");
    taskContainer.textContent = "";
    createDomElement(taskContainer, "div", "item-title", "Tasks");
    tasks.forEach((task) => {
      const item = displayTask(taskContainer, task, count++);
      console.log("Task:", task, "Complete status", task.complete);
      if (task.complete == true) {
        item.classList.add("finished");
      }
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
