// script2.js (Add List Items)
const myList = document.getElementById("myList");
for (let i = 1; i <= 3; i++) {  // Added 3 items for demonstration
  const listItem = document.createElement("li");
  listItem.textContent = `Item ${i} (External)`;
  myList.appendChild(listItem);
}