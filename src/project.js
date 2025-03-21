const ProjectManager = (() => {
  const projects = [];
  let activeProject = null;

  const createProject = (name) => {
    const tasks = [];
    const getName = () => name;
    const getTasks = () => {
      return tasks;
    };
    const addTask = (title, description) => {
      tasks.push({ title, description });
    };
    const removeTask = (title) => {
      const index = tasks.findIndex((task) => task.title === title);
      if (index != -1) {
        tasks.splice(index, 1);
      }
    };

    return { getName, addTask, removeTask, getTasks };
  };

  const addProject = (name) => {
    const newProject = createProject(name);
    projects.push(newProject);
    return newProject;
  };
  const removeProject = (name) => {
    const index = projects.findIndex((project) => project.getName() === name);
    if (index != -1) {
      projects.splice(index, 1);
    }
  };

  const getProjects = () => projects;

  const setActive = (name) => {
    activeProject =
      projects.find((project) => project.getName() === name) || null;
    console.log("Active project", activeProject);
  };
  const getActiveProject = () => activeProject;

  return {
    addProject,
    removeProject,
    getProjects,
    setActive,
    getActiveProject,
  };
})();

export { ProjectManager };
