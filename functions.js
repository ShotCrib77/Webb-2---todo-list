document.body.onload = createCheckbox("todo-list-section");

function createPargraphElement(id, valueOfInput="") {
  const appendedSection = document.getElementById(id)
  if (valueOfInput != "") {
    const pElement = document.createElement("p")
    pElement.appendChild(document.createTextNode(valueOfInput))
    appendedSection.appendChild(pElement)
  } else {
    consle.log("Input har inget värde.")
  }
};

function createCheckbox(id) {
  const appendedSection = document.getElementById(id)
  const checkboxElement = document.createElement("input")
  checkboxElement.type = "checkbox"
  appendedSection.appendChild(checkboxElement)
}

function createToDoItemSection(id, valueOfInput) {
  const pElement = createPargraphElement()
}