//function creating HTML elements

const createHTML = (html) => {
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.firstChild;
};

export { createHTML };
