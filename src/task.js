function createItem(name, description, priority, notes, checklist) {
  return {
    name: name,
    description: description,
    priority: priority,
    notes: notes,
    checklist: checklist,
  };
}

function itemActions() {
  let toDoList = [];

  const add = (object) => {
    toDoList.push(object);
    console.log(toDoList);
  };
  return {
    add: (add = (object) => {
      toDoList.push(object);
      console.log(toDoList);
    }),
    edit: () => ({}),
    delete: () => ({}),
    getList: () => ({}),
  };
}

export { createItem, itemActions };
