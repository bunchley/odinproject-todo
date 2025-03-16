const createDomElement = (parentElement, type, className) => {
  const newElement = document.createElement(type);
  newElement.classList.add(className);
  parentElement.append(newElement);
  return newElement;
};

const displayItem = () => {
  let taskList = [];
};
export { createDomElement };
