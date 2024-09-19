/*
Funktion som skapar ett paragraphelement (Och appendar det till ett parent element som är en av parameterna). 
Den andra parametern är för vad som ska stå i p-elementet.
*/
function createPargraphElement(element, valueOfInput="") {
  const parentElement = element
  if (valueOfInput != "") {
    const pElement = document.createElement("p")
    pElement.appendChild(document.createTextNode(valueOfInput))
    parentElement.appendChild(pElement)
  } else {
    consle.log("Input har inget värde.")
  }
};

// Skapar en checkbox input med samma parentparameter som förra funktionen
function createCheckbox(element) {
  const parentElement = element
  const checkboxElement = document.createElement("input")
  checkboxElement.type = "checkbox"
  parentElement.appendChild(checkboxElement)
}

// Kombinerar samtliga funktioner och skapar ett li-element med en div som har p (användarinputen) och checkbox i sig.
function createToDoItem(id, valueOfInput) {
  const mainList = document.getElementById(id)
  const contentContainer = document.createElement("div")
  const listItem = document.createElement("li")
  const pElement = createPargraphElement(contentContainer, valueOfInput)
  const checkbox = createCheckbox(contentContainer)
  listItem.appendChild(contentContainer)
  mainList.appendChild(listItem)
}

// Callback funktion som raderar li-element ifall man trycker på checkboxen som tillhör det li-element.
function deleteToDoItem(listContainer) {
  listContainer.addEventListener("change", (event) => {
    if (event.target.type === "checkbox" && event.target.checked) {
      const listItem = event.target.closest("li");
      listItem.remove();
    }
  }
)};