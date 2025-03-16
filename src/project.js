import { createDomElement } from "./displayItem";
const ProjectManager = (() => {
  const projects = [];

  const createProject = (name) => {
    const taskList = [];
    const getName = () => name;
    const getTasks = () => taskList;

    const addTask = (task) => task.push(task);
    const removeTask = (taskIndex) => task.splice(taskIndex, 1);

    return { getName, getTasks, addTask, removeTask };
  };

  const addProject = (name) => {
    const newProject = createProject(name);
    projects.push(newProject);
    return newProject;
  };
  const removeProject = (name) => {
    const index = projects.findIndex((project) => projects.getName() === name);
    if (index != -1) {
      projects.splice(index, 1);
    }
  };

  const getProjects = () => projects;

  return { addProject, removeProject, getProjects };
})();

const display = (() => {
  const projectContainer = document.querySelector(".project-container");
  const projectTitle = (name) => {
    const newProject = createDomElement(projectContainer, "div", "projectName");
    newProject.textContent = `${name}`;
  };
  return { projectTitle };
})();
const displayProjects = () => {
  const project1 = ProjectManager.addProject("Finish Javascript Section");
  const project2 = ProjectManager.addProject("Finish Advanced HTML");
  //   project1.addTask("Finish this project");
  //   project1.addTask("Finish Javascript in the Real World");
  //   project1.addTask("Finish Asynchronous Javascript and APIs");
  //   project1.addTask("Finish A Bit of Computer Science");
  //   project2.addTask("Finish final assignment");

  ProjectManager.getProjects().forEach((project) => {
    //display in sidebar
    display.projectTitle(project.getName());
  });
};

export { displayProjects };
