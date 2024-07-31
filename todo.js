// Write the code necessary to do the following:


const submit = document.querySelector(".submit");
const list = document.querySelector("ul");
const form = document.querySelector(".form");

//add new item to to do list 
submit.addEventListener("click", function(e){
    e.preventDefault();
    const newLi = document.createElement("li");
    const newItem = document.querySelector("#item");
    newLi.innerText = newItem.value + " ";
list.append(newLi);
//add remove button
const newButton = document.createElement("button");
newButton.innerText = "X";
newButton.setAttribute("class","remove")
newLi.append(newButton);
newItem.value = '';
});


const newLis = document.querySelectorAll("li");
for (let newLi of newLis){
const listItem = {item: newLi , class: newLi.classList};
localStorage.setItem("li", JSON.stringify(listItem));}

const buttons = document.querySelectorAll("li button");

//remove item on clicking remove button
list.addEventListener("click", function(event) {
  if (event.target.tagName === "BUTTON") {
    const value = event.target.parentElement.value
    event.target.parentElement.remove();
    localStorage.removeItem("li", value);
  }
});

//cross item off list on click
list.addEventListener("click", function(event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("done");
  }
});





// document.querySelectorAll("li");
// for (let itemDetails of listItem){
//     const itemClass = itemDetails.className;
//     const li = [itemDetails.value, itemClass];
// localStorage.setItem("li", JSON.stringify(li));}

