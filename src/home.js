import { DisplayManager } from "./display";
import { ProjectManager } from "./project";

const home = (function () {
  const project1 = ProjectManager.addProject("Professional");
  project1.addTask("Finish Javascript Section", "complete the ToDo project");
  project1.addTask("Finish Advanced HTML", "complete the project");
  const project2 = ProjectManager.addProject("The Odin Project");

  ProjectManager.setActive(project1.getName());
  DisplayManager.renderPage(project1);
  DisplayManager.renderTasks(project1.getTasks());

  const buttons = document.querySelectorAll("button");
  const taskTitleInput = document.querySelector(".task-title");
  const taskDescriptionInput = document.querySelector(".task-description");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.classList.contains("project")) {
        DisplayManager.renderNewProject();
      } else if (button.classList.contains("task")) {
      } else if (button.classList.contains("done")) {
        console.log("DONE");
      } else if (button.classList.contains("edit")) {
        console.log("EDIT");
      } else if (button.classList.contains("delete")) {
      } else if (button.classList.contains("save-project")) {
        console.log("SAVE PROJECT");
        // const newProjectName =
        //   document.querySelector(".add-project-title").textContent;
        // console.log(newProjectName);
        // ProjectManager.addProject(newProjectName);
      } else if (button.classList.contains("cancel-project")) {
        console.log("CANCEL SAVE");
      }
    });
  });
  // const defaultProject = document.querySelectorAll(".project");
  // defaultProject[0].classList.add("active");
  // const projectContainers = document.querySelectorAll(".project");
  // projectContainers.forEach((projectElement) => {
  //   projectElement.addEventListener("click", () => {
  //     document.querySelector(".active").classList.remove("active");
  //     projectElement.classList.add("active");
  //     const projectName =
  //       projectElement.querySelector(".project-title").textContent;
  //     console.log("project name after saving", projectName);
  // ProjectManager.setActive(
  //   projectElement.querySelector(".project-title").textContent
  // );
  // });
  // });
})();

export { home };
