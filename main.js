// Exercise 1
document.getElementById("node1").textContent =
  "I used the getElementById('node1') method to access this";
document.getElementsByClassName("node2")[0].textContent =
  "I used the getElementsByClassName('node2') method to access this";
Array.from(document.getElementsByTagName("h3")).forEach(
  h3 =>
    (h3.textContent =
      "I used the getElementsByTagName('h3') method to access all of these")
);

// Exercise 2
let p = document.createElement("p");
p.textContent = "This node was created using the createElement() method";
document.getElementById("parent").appendChild(p);

let a = document.createElement("a");
a.textContent = "I am a <a> tag";
a.href = "#";
document.getElementById("parent").insertBefore(a, p);

// Exercise 3
let childNode = document.querySelector("#N1");
let newNode = document.createElement("p");
newNode.textContent = "New Child Node";
childNode.parentNode.replaceChild(newNode, childNode);
newNode.remove();

// Exercise 4
let ul = document.createElement("ul");
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
list.forEach(item => {
  let li = document.createElement("li");
  li.textContent = item;
  ul.appendChild(li);
});
document.querySelector("#container").appendChild(ul);

// Exercise 5
function show() {
  // creates a new div element
  let modal = document.createElement("div");
  //this code sets the text content inside of the modal
  modal.textContent =
    "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user";
  // this code sets the style for the modal

  modal.style.position = "fixed"; //Makes the modal stay in place
  modal.style.top = "0"; // START: makes the modal cover the entire viewport
  modal.style.left = "0";
  modal.style.width = "100%";
  modal.style.height = "100%"; // END:
  modal.style.backgroundColor = "rgba(0,0,0,0.5)"; // semi transparent black
  modal.style.color = "white"; // white text
  modal.style.display = "flex"; // START: center the text
  modal.style.justifyContent = "center";
  modal.style.alignItems = "center"; // END:
  modal.style.zIndex = "1000"; // ensures the modal appears above all other elements

  // This code adds an event listener to the modal that removes the modal when clicked
  modal.addEventListener("click", () => {
    document.body.removeChild(modal);
  });

  // this code actually adds the modal to the document making it visible
  document.body.appendChild(modal);
}

// this code adds an event listener to the button with the id "btn" when the button is clicked it calls the show function, effectively opening the modal.
document.querySelector("#btn").addEventListener("click", show);
