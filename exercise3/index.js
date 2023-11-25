// 1
let counterElement = document.getElementById("counter");
let controlElement = document.getElementById("btnControl");
let counter = 0;
let intervalId = 0;

function increaseCounter() {
  counter++;
  counterElement.innerText = counter;
}

function control() {
  if (controlElement.innerText === "Start") {
    controlElement.innerText = "Pause";
    counter = 0;
    intervalId = setInterval(increaseCounter, 300);
  } else {
    controlElement.innerText = "Start";
    clearInterval(intervalId);
  }
}

// 2
function loadData() {
  const fruitList = ["apple", "banana", "tomato"];
  //   3
  const ulElement = document.querySelector("ul");
  const divElement = document.querySelector("div");
  const imgElement = document.createElement("img");
  //   4
  const firstLis = [...document.querySelectorAll("ul > li:first-child")];
  const lastLis = [...document.querySelectorAll("ul > li:last-child")];

  imgElement.src = "https://crocoder.dev/icon.png";
  divElement.appendChild(imgElement);

  fruitList.forEach((fruit) => {
    const itemElement = document.createElement("li");
    itemElement.textContent = fruit;
    ulElement.appendChild(itemElement);
  });

  firstLis.forEach((li) => (li.textContent = "first"));
  lastLis.forEach((li) => (li.textContent = "last"));
}

// 5
const app = document.getElementById("list-app");

const list = document.createElement("ul");
const input = document.createElement("input");
input.setAttribute("type", "text");
const addButton = document.createElement("button");
addButton.innerHTML = "Create New";

addButton.addEventListener("click", function () {
  const newItem = document.createElement("li");
  if (input.value === "") {
    newItem.innerHTML = "New item";
  } else {
    newItem.innerHTML = input.value;
  }
  list.appendChild(newItem);
  input.value = "";
});

list.addEventListener("click", function (event) {
  if (event.target.tagName === "li") {
    const text = prompt("Enter new text:");
    event.target.innerHTML = text;
  }
});

app.appendChild(input);
app.appendChild(addButton);
app.appendChild(list);

// 6
let count = 0;
function increaseOne() {
  document.getElementById("result").innerHTML = ++count;
}
function resetCount() {
  count = 0;
  document.getElementById("result").innerHTML = count;
}
