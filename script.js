const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

//Vriskw current Date sto format pou thelw----------
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

const date = new Date();
const formatter = new Intl.DateTimeFormat("en-US", options);
const formattedDate = formatter.format(date);
document.getElementById("date").innerHTML = formattedDate;
//Vriskw current Date sto format pou thelw-----------

function addTask() {
  if (inputBox.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}
function displayList() {
  listContainer.innerHTML = localStorage.getItem("data");
}
displayList();
