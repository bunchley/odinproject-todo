import { DisplayManager } from "./display";
import { ProjectManager } from "./project";

const home = (function () {
  const project1 = ProjectManager.addProject("Professional");
  project1.addTask("Finish Javascript Section", "complete the ToDo project");
  project1.addTask("Finish Advanced HTML", "complete the project");
  const project2 = ProjectManager.addProject("The Odin Project");

  DisplayManager.renderPage(project1);
  DisplayManager.renderTasks(project1.getTasks());

  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.classList.contains("project")) {
        DisplayManager.renderNewProject();
      } else if (button.classList.contains("task")) {
        console.log("ADD NEW TASK");
        // DisplayManager.renderNewTask();
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
  // if
  // document.querySelector(".save-project").addEventListener("click", () => {
  //   console.log("SAVE PROJECT BUTTON CLICKEDDD");
  // });
})();

export { home };
