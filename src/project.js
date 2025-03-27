const ProjectManager = (() => {
  const projects = [];
  let activeProject = null;

  const createProject = (name) => {
    const tasks = [];
    const getName = () => name;
    const getTasks = () => {
      return tasks;
    };
    const addTask = (title, description, date, priority, complete) => {
      tasks.push({ title, description, date, priority, complete });
    };
    const removeTask = (title) => {
      const index = tasks.findIndex((task) => task.title === title);
      if (index != -1) {
        tasks.splice(index, 1);
      }
    };
    const completeTask = (title) => {
      const index = tasks.findIndex((task) => task.title === title);
      if (index != -1) {
        tasks[index].complete = true;
      }
    };
    const updateTask = (
      oldTitle,
      newTitle,
      newDescription,
      newDate,
      newPriority
    ) => {
      const index = tasks.findIndex((task) => task.title === oldTitle);
      if (index != -1) {
        tasks[index].title = newTitle;
        tasks[index].description = newDescription;
        tasks[index].date = newDate;
        tasks[index].priority = newPriority;
        tasks[index].complete = false;
      }
    };

    return { getName, addTask, removeTask, getTasks, completeTask, updateTask };
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
