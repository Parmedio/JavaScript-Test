//Script Mock DB 

console.log("program start");
const insertUpdateNameInput = document.querySelector("#insert-update-name-input");
const insertUpdateSurnameInput = document.querySelector("#insert-update-surname-input");
const insertUpdateEmailInput = document.querySelector("#insert-update-email-input");
const insertButton = document.querySelector("#insert-button");
const searchNameInput = document.querySelector("#search-name-input");
const searchSurnameInput = document.querySelector("#search-surname-input");
const searchEmailInput = document.querySelector("#search-email-input");
const dbContainer = document.querySelector("#db-container");

let userID = 1;
let currentUserID = 0;

const insertUser = () => {
    const newLine = document.createElement("div");
        newLine.setAttribute("class", "row");
        for (let j = 1; j <= columnNumber; j++) {
            const column = document.createElement("div");
            column.setAttribute("id", `${i}-${j}`);
            column.setAttribute("class", "col");
            newLine.appendChild(column);
        }
        fieldContainer.appendChild(newLine);
}





// const filteredPkmon = this.state.displayedPkmon.filter(currentValue => {
//     return currentValue.name.toLowerCase().includes(this.state.searchfield.toLowerCase()
// }

  
insertButton.addEventListener("click", insertUser);
document.addEventListener("keydown", (event) => moveRover(event.key));