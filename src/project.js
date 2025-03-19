const ProjectManager = (() => {
  const projects = [];

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
    const index = projects.findIndex((project) => projects.getName() === name);
    if (index != -1) {
      projects.splice(index, 1);
    }
  };

  const getProjects = () => projects;

  return { addProject, removeProject, getProjects };
})();

export { ProjectManager };
