const createDomElement = (parentElement, type, className) => {
  const newElement = document.createElement(type);
  newElement.classList.add(className);
  parentElement.append(newElement);
  return newElement;
};
const DisplayManager = (() => {
  const displayProjects = (projects) => {
    const projectContainer = document.querySelector(".project-container");
    projectContainer.innerHTML = "";
    projects.forEach((project) => {
      // project.createProjectDisplay(projectContainer, project);
      console.log("For Each Project in projects:", project);
    });
  };

  const createProjectDisplay = (container, project) => {
    const projectName = createDomElement(container, "div", "project");
    projectName.textContent = `${project.Name}`;
  };
  // const displayItem = () => {};
  return { createDomElement, displayProjects };
})();

export { DisplayManager, createDomElement };
