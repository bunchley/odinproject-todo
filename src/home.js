import { DisplayManager } from "./display";
import { ProjectManager } from "./project";

const home = (function () {
  const project1 = ProjectManager.addProject("The Odin Project");
  project1.addTask(
    "Finish Organizing Your Javascript Code",
    "Complete the ToDo project",
    "2025-03-27",
    "High"
  );
  project1.addTask(
    "Finish Javascript in the Real World",
    "Answer: What is ES6?",
    "2025-03-28",
    "Medium"
  );
  project1.addTask(
    "Finish Introduction",
    "Complete Quick Review",
    "03-10-2025",
    "Medium",
    true
  );
  const project2 = ProjectManager.addProject("Business");
  project2.addTask(
    "Order Business Cards",
    "Develop custom design",
    "2025-03-31",
    "High"
  );
  project2.addTask("Create Prints", "Buy Scanner, order prints");

  const project3 = ProjectManager.addProject("Personal");
  project3.addTask("Go to Gym", "Leg day", "03-03-2025");
  project3.addTask(
    "Call Grandparents",
    "make plans to hang out",
    "03-03-2025",
    "top",
    true
  );

  ProjectManager.setActive(project1.getName());
  DisplayManager.renderPage(project1);
  DisplayManager.renderTasks(project1.getTasks());
})();

export { home };
