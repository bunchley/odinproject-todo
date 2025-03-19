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
      if (button.classList.contains("new-project")) {
        console.log("add new project button clicked");
      }
    });
  });
})();

export { home };
