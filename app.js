const body = document.querySelector("body"),
  sidebar = body.querySelector("nav"),
  toggle = body.querySelector(".toggle"),
  searchBtn = body.querySelector(".search-box"),
  modeSwitch = body.querySelector(".toggle-switch"),
  modeText = body.querySelector(".mode-text");
toggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});
searchBtn.addEventListener("click", () => {
  sidebar.classList.remove("close");
});
modeSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    modeText.innerText = "Light mode";
  } else {
    modeText.innerText = "Dark mode";
  }
});

// this code is for the timer clock
// i declare variables to store time and timer interval ID
let time;
let timer;

// Function to set the initial time when a focus or short break button is clicked
function setTime(minutes) {
  // Convert minutes to seconds and assign to the time variable
  time = minutes * 60;

  updateDisplay();
}

// Function to update the displayed time on the page
function updateDisplay() {
  // Calculate minutes and seconds from the remaining time
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  // Update the HTML content of the element with the ID 'timer'
  document.getElementById("timer").innerHTML = `${minutes}:${
    seconds < 10 ? "0" : ""
  }${seconds}`;
}

// Function to start the timer
function startTimer() {
  // Set up an interval to decrement time every second
  timer = setInterval(function () {
    // Check if time is greater than 0
    if (time > 0) {
      time--;
      updateDisplay();
    } else {
      // If time is zero, clear the interval, show an alert, and stop the timer
      clearInterval(timer);
      alert("Time is over! Get back to work!");
    }
  }, 1000);
}

// Function to pause the timer
function pauseTimer() {
  // Clear the interval to stop the timer
  clearInterval(timer);
}

// Function to reset the timer
function resetTimer() {
  // Clear the interval to stop the timer
  clearInterval(timer);

  time = 0;
  updateDisplay();
}

// grabbing the input and button elements
const input = document.getElementById("input-task");
const addTaskButton = document.getElementById("addTask");
const outputTask = document.getElementById("output-task");
// grabbing reference to the item count display element
const itemCountDisplay = document.getElementById("itemCountDisplay");

// making an array to store user  task inputs
const userInputArray = [];
console.log(userInputArray);
// adding an event listener to the button so as to display the output
addTaskButton.addEventListener("click", function () {
  const output = input.value;

  if (output !== "") {
    userInputArray.push(output);
    // creating list element to be displayed
    const listItem = document.createElement("li");

    listItem.className = "listitem";

    // creating a task description
    const taskDescription = document.createElement("span");
    taskDescription.className = "task-description";
    taskDescription.textContent = output;

    // creating a container to list item
    const actionContainer = document.createElement("div");
    actionContainer.className = "container-action";

    // creating a delete button to delete
    const deletebtn = document.createElement("button");
    deletebtn.textContent = "delete";
    deletebtn.className = "deleteButton";
    deletebtn.style.marginLeft = "15px";
    // adding an event listener to the deletebutton
    deletebtn.addEventListener("click", function () {
      const removeList = listItem;
      userInputArray.pop();
      itemCountDisplay.textContent = userInputArray.length;
      // console.log(userInputArray, userInputArray.length);
      removeList.remove();
    });

    // create a mark done button to mark
    const togglebutton = document.createElement("button");
    togglebutton.className = "togglebutton";
    togglebutton.textContent = "mark-done";
    togglebutton.addEventListener("click", function () {
      if (togglebutton.textContent === "mark-done") {
        togglebutton.textContent = "done";
        togglebutton.style.backgroundColor = "green";
        togglebutton.style.border = "none";
        taskDescription.style.borderLeft = "4px solid green";
      } else {
        togglebutton.textContent === "done";
        togglebutton.textContent = "mark-done";
        togglebutton.style.backgroundColor = "red";
        taskDescription.style.borderLeft = "4px solid #007BFF";
      }
    });

    // adding the delete button and mark-done button to the action container
    actionContainer.appendChild(togglebutton);
    actionContainer.appendChild(deletebtn);

    // adding the description and action container to list item
    listItem.appendChild(taskDescription);
    listItem.appendChild(actionContainer);

    outputTask.appendChild(listItem);

    //  this is to Update and display the count of tasks remaining

    itemCountDisplay.textContent = userInputArray.length;

    input.value = "";
  } else {
    // making sure that the user inputs something on the input field
    alert("Please enter a task before, dont leave the field empty");
  }
});

// grabbing reference to the elements on note section
const inputNote = document.getElementById("note");
const buttonNote = document.getElementById("addNote");
const noteDisplay = document.getElementById("noteDisplay");
// addimg an event listener to the add note button
buttonNote.addEventListener("click", function () {
  outputnote = inputNote.value;
  if (outputnote.trim() !== "") {
    const noteItem = document.createElement("div");
    noteItem.className = "noteItemSection";

    const noteText = document.createElement("span");
    noteText.textContent = outputnote;
    const notebuttondiv = document.createElement("div");
    notebuttondiv.className = "notebuttoncontainer";
    // creating a delete button to delete note
    const noteButton = document.createElement("button");
    noteButton.textContent = "delete";
    noteButton.className = "noteButton";
    noteButton.style.marginLeft = "5px";
    noteButton.addEventListener("click", () => {
      const removeNote = noteItem;
      removeNote.remove();
    });
    // creating an edit notebutton
    const editNoteButton = document.createElement("button");
    editNoteButton.className = "edit-button";
    editNoteButton.textContent = "edit";
    editNoteButton.addEventListener("click", function () {
      const newNote = prompt("edit the note:", noteItem.textContent);
      if (newNote !== null) {
        noteText.textContent = newNote;
      }
    });

    notebuttondiv.appendChild(editNoteButton);
    notebuttondiv.appendChild(noteButton);

    noteItem.appendChild(noteText);
    noteItem.appendChild(notebuttondiv);

    noteDisplay.appendChild(noteItem);
    inputNote.value = "";
  } else {
    alert("enter the note");
  }
});

// EMAILS

const emailContainer = document.getElementById("emails");

function addEmail(email) {
  const emailElement = document.createElement("div");
  emailElement.className = "mails-message";

  const emailAvatar = document.createElement("img");
  emailAvatar.className = "mails-img";
  emailAvatar.src = email.avatar;
  emailAvatar.alt = email.name;

  const emailContent = document.createElement("div");
  emailContent.className = "main-messag";

  const emailOwner = document.createElement("div");
  emailOwner.className = "person-name";
  emailOwner.textContent = email.name;

  const emailSubject = document.createElement("div");
  emailSubject.textContent = email.subject;

  emailContent.appendChild(emailOwner);
  emailContent.appendChild(emailSubject);

  emailElement.appendChild(emailAvatar);
  emailElement.appendChild(emailContent);

  emailContainer.appendChild(emailElement);
}
//  function to get the first 5 emails only
function getfirstfive(response) {
  return response.slice(0, 5);
}

// fetch emails
fetch("https://6553e4ed5449cfda0f2f4709.mockapi.io/emails")
  .then(function (response) {
    return response.json();
  })
  .then(function (emails) {
    emails.forEach(function (email) {
      addEmail(email);
    });
  });

//  grabbing reference of the quote button and for the display
const quotearea = document.getElementById("welcome-quote");
const quotebutton = document.getElementById("quote-button");
//  function to fetch thw quote from the api
function getquote() {
  quotebutton.innerText = "loading..";
  fetch("https://api.quotable.io/random")
    .then(function (response) {
      return response.json();
    })
    .then(function (result) {
      console.log(result);
      result.length = 20;
      result.maxLength = 20;
      quotearea.innerText = result.content;
      quotebutton.innerText = "more";
    });
}
// adding a listener to the quote button to generate quote
quotebutton.addEventListener("click", getquote);

// modal section
const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");
const closebutton = document.getElementById("closed");

// When the user clicks the button, open the modal
function displaymodal() {
  modal.style.display = "block";
}
btn.addEventListener("click", displaymodal);

closebutton.onclick = function () {
  modal.style.display = "none";
};

// this is when the user clicks anywhere outside of the modal, closes the modal
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
// function to submit the  modal values
function projectsubmit(event) {
  event.preventDefault();
  const projectTitle = document.getElementById("projectTitle").value;
  const projectDescription =
    document.getElementById("projectDescription").value;
  const startDate = document.getElementById("startDate").value;
  const deadlineDate = document.getElementById("deadlineDate").value;
  const projectcard = document.getElementById("project-card");

  if (projectTitle && projectDescription && startDate && deadlineDate) {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <p><strong>Project Title:</strong> ${projectTitle}</p>
      <p><strong>Description:</strong> ${projectDescription}</p>
      <p><strong>Start Date:</strong> ${startDate}</p>
     <p><strong>Deadline Date:</strong> <span style="background-color: red; padding: 2px 4px; border-radius: 4px;">${deadlineDate}</span></p>
     <button class="delete-button" onclick="deleteCard(this)">Delete</button>
  `;

    projectcard.appendChild(card);

    // adding event listener to delete the whole card
    card.querySelector("button").addEventListener("click", function () {
      deleteCard(card);
    });
    document.getElementById("projectForm").reset();

    modal.style.display = "none";
  } else {
    alert("Please fill in all fields");
  }
  function deleteCard(card) {
    const projectcard = document.getElementById("project-card");
    projectcard.removeChild(card);
  }
}

const projectbtn = document.getElementById("projectbtn");
projectbtn.addEventListener("click", projectsubmit);
