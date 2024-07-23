// Write the code necessary to do the following:


const submit = document.querySelector(".submit");
const list = document.querySelector("ul");
const form = document.querySelector(".form");

submit.addEventListener("click", function(e){
    e.preventDefault();
    const newLi = document.createElement("li");
    const newItem = document.querySelector("#item");
    newLi.innerText = newItem.value + " ";
list.append(newLi);
const newButton = document.createElement("button");
newButton.innerText = "X";
newButton.setAttribute("class","remove")
newLi.append(newButton);
newItem.value = '';
});

const buttons = document.querySelectorAll("li button");

list.addEventListener("click", function(event) {
  if (event.target.tagName === "BUTTON") {
    const value = event.target.parentElement.value
    event.target.parentElement.remove();
    localStorage.removeItem("li", value);
  }
});

list.addEventListener("click", function(event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("done");
  }
});

const listItem = document.querySelectorAll("li");
for (let itemDetails of listItem){
    const itemClass = itemDetails.className;
    const li = [itemDetails.value, itemClass];
localStorage.setItem("li", JSON.stringify(li));}

//comment
// // 1. Select the section with an id of container without using querySelector.
// document.getElementById("container");
// // 2. Select the section with an id of container using querySelector.
// document.querySelector("#container");
// // 3. Select all of the list items with a class of “second”.
// document.querySelectorAll('.second');
// // 4. Select a list item with a class of third, but only the list item inside of the ol tag.
// document.querySelector('ol.third');
// // 5. Give the section with an id of container the text “Hello!”.
// const container = document.getElementById("container");
// container.innerText = "Hello!";
// // 6. Add the class main to the div with a class of footer.
// const footer = document.querySelector(".footer");
// footer.classList.add("main");
// // 7. Remove the class main on the div with a class of footer.
// const mainFooter = document.querySelector(".footer");
// mainFooter.classList.remove("main");
// // 8. Create a new li element.
// const newLi = document.createElement("li");
// // 9. Give the li the text “four”.
// newLi.innerText = "four";
// // 10. Append the li to the ul element.
// const ul = document.querySelector("ul");
// ul.appendChild(newLi);
// // 11. Loop over all of the lis inside the ol tag and give them a background color of “green”.
// const ol = document.querySelectorAll("ol li");
// for (let ol of li){li.style.backgroundColor = "green";}
// // 12. Remove the div with a class of footer
// footer.remove();