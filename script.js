//Script Mock DB 

console.log("program start");
const insertUpdateNameInput = document.querySelector("#insert-update-name-input");
const insertUpdateSurnameInput = document.querySelector("#insert-update-surname-input");
const insertUpdateEmailInput = document.querySelector("#insert-update-email-input");
const insertButton = document.querySelector("#insert-button");

const searchNameInput = document.querySelector("#search-name-input");
const searchSurnameInput = document.querySelector("#search-surname-input");
const searchEmailInput = document.querySelector("#search-email-input");

const deleteButton = document.querySelector("#delete-button");

const dbContainer = document.querySelector("#db-container");

let userID = 1;
let currentUserID = 0;
let isUpdating = false;

const insertUser = () => {
    dbContainer.style.display = "block";
    const newLine = document.createElement("div");
    newLine.setAttribute("class", "db-element");
    newLine.setAttribute("id", `user${userID}`);

    const userName = document.createElement("p");
    userName.setAttribute("class", "col");
    userName.setAttribute("id", `user${userID}name`);
    userName.innerText = insertUpdateNameInput.value;
    newLine.appendChild(userName);
    insertUpdateNameInput.value = "";

    const userSurname = document.createElement("p");
    userSurname.setAttribute("class", "col");
    userSurname.setAttribute("id", `user${userID}surname`);
    userSurname.innerText = insertUpdateSurnameInput.value;
    newLine.appendChild(userSurname);
    insertUpdateSurnameInput.value  = "";

    const userEmail = document.createElement("p");
    userEmail.setAttribute("class", "col");
    userEmail.setAttribute("id", `user${userID}email`);
    userEmail.innerText = insertUpdateEmailInput.value;
    newLine.appendChild(userEmail);
    insertUpdateEmailInput.value  = "";

    const userUpdateBtn = document.createElement("button");
    userUpdateBtn.setAttribute("class", "user-button");
    userUpdateBtn.setAttribute("id", "update-button");
    userUpdateBtn.innerText = "update";
    newLine.appendChild(userUpdateBtn);

    userUpdateBtn.addEventListener("click", function() {
        console.log("premuto update!");
        isUpdating = true;
        const userIdToUpdate = this.parentNode.getAttribute("id");
        updateUser(userIdToUpdate);
    });

    const userDeleteBtn = document.createElement("button");
    userDeleteBtn.setAttribute("class", "user-button");
    userDeleteBtn.setAttribute("id", "delete-button");
    userDeleteBtn.innerText = "delete";
    newLine.appendChild(userDeleteBtn);

    userDeleteBtn.addEventListener("click", function() {
        console.log("premuto delete!")
        const parentDiv = dbContainer;
        const userIdToDelete = this.parentNode.getAttribute("id");
        const divToRemove = document.getElementById(userIdToDelete);
      
        if (parentDiv && divToRemove) {
          parentDiv.removeChild(divToRemove);
        }
    });

    userID++;
    
    dbContainer.appendChild(newLine);
    insertButton.setAttribute("disabled", "true");
    isUpdating = false;
}


const checkInputs = () => {
    if (insertUpdateNameInput.value && insertUpdateSurnameInput.value && insertUpdateEmailInput.value || isUpdating === true) {
        insertButton.disabled = false;
    } else {
        insertButton.disabled = true;
    }
}
  
const updateUser = (userId) => {
    const userNameToUpdate = document.getElementById(`${userId}name`).innerText;
    const userSurnameToUpdate = document.getElementById(`${userId}surname`).innerText;
    const userEmailToUpdate = document.getElementById(`${userId}email`).innerText;
  
    insertUpdateNameInput.value = userNameToUpdate;
    insertUpdateSurnameInput.value = userSurnameToUpdate;
    insertUpdateEmailInput.value = userEmailToUpdate;

    insertButton.disabled = false;
};

// const filteredname = .displayedname.filter(currentValue => {
//     return currentValue.name.toLowerCase().includes(this.state.searchfield.toLowerCase()
// }
    
    
insertUpdateNameInput.addEventListener('input', checkInputs);
insertUpdateSurnameInput.addEventListener('input', checkInputs);
insertUpdateEmailInput.addEventListener('input', checkInputs);
insertButton.addEventListener("click", insertUser);
document.addEventListener("keydown", (event) => moveRover(event.key));