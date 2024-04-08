console.log("Script attached");
/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"
const node1 = document.getElementById("node1");
node1.textContent = "I used the getElementById('node1') method to access this";
// Select Node #2 and change the text to: "I used the getElementByClassName("node2") method to access this" */
const node2 = document.getElementsByClassName("node2");
node2[0].textContent =
  "I used the getElementByClassName('node2') method to access this";
// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" */
const h3 = document.getElementsByTagName("h3");
for (let i = 0; i < h3.length; i++) {
  h3[i].textContent =
    "I used the getElementByTagName('h3') method to access all of these";
}
/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/
const element = document.getElementById("parent");

// TODO: Create a paragraph element using this document.createElement() and put this text inside "This node was created using the createElement() method"
const p = document.createElement("p");
p.innerText = "This node was created using the createElement() method";

// TODO: Append the created node to the parent node using the element.appendChild() method
element.appendChild(p);
// TODO: Create a <a> element using this document.createElement() and put this text inside "I am a <a> tag"
const a = document.createElement("a");
a.innerText = "I am a <a> tag";
// BONUS: Add a link href to the <a>
a.href = "https://github.com/Douglas-Green/JS_DOM-Events";
// TODO: Insert the created <a> in the parent but before the <p> you just created using the element.insertBefore() method
element.appendChild(a);
/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

let childNode = document.querySelector(".child-node");

// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"
let newNode = document.createElement("p");
newNode.textContent = "New Child Node";
childNode.parentNode.replaceChild(newNode, childNode);
// TODO: Remove the "New Child Node"
newNode.parentNode.removeChild(newNode);
/*----------- Exercise #4: LIST ITEMS ----------- */
// Use the following array of values to generate a list on the DOM

let list = [
  "apples",
  "bananas",
  "carrots",
  "dragon fruit",
  "eggplant",
  "fish",
  "grapes",
  "honey",
  "ice bag",
  "juice (any kind)",
];

// TODO: Create an unordered list element
let ul = document.createElement("ul");
// TODO: Iterate over the array values, and create a list item element for each
list.forEach(item => {
  let li = document.createElement("li");
  li.textContent = item;
  ul.appendChild(li);
});
// TODO: Append the new list items to the unordered list element

// TODO: Append the unordered list to the `div#container` under exercise 4
document.querySelector("#container").appendChild(ul);
/*----------- Exercise #5: DOM EVENTS --------------*/

// TODO: write a function called "show" which creates a new div with an alerting message to the user with this message
function show() {
  let modal = document.createElement("div");
  modal.textContent =
    "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user";
  modal.style.position = "fixed";
  modal.style.top = "0";
  modal.style.left = "0";
  modal.style.width = "100%";
  modal.style.height = "100%";
  modal.style.backgroundColor = "rgba(0,0,0,0.5)";
  modal.style.color = "white";
  modal.style.display = "flex";
  modal.style.justifyContent = "center";
  modal.style.alignItems = "center";
  modal.style.zIndex = "1000";
  // BONUS: The modal popup should be able to be closed. Refactor for this functionality

  modal.addEventListener("click", () => {
    document.body.removeChild(modal);
  });
  // -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
  // This div should be a 'modal' that covers the main content on the screen
  document.body.appendChild(modal);
}
