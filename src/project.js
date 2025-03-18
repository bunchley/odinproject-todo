const ProjectManager = (() => {
  const projects = [];
  const tasks = [];

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

export { ProjectManager };
