import { DisplayManager } from "./display";
import ProjectManager from "./project";

const home = (function () {
  const project1 = ProjectManager.addProject("Professional");
  const project2 = ProjectManager.addProject("Personal");
  DisplayManager.renderPage();
})();

export { home };
