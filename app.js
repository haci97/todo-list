// Store all elements
const body = document.querySelector("body");
const wrapper = document.getElementById("wrapper");
const header = document.querySelector("header");
const main = document.querySelector("main");
const footer = document.querySelector("footer");
const currentDate = document.getElementById("current__date");
const currentTime = document.getElementById("current__time");
const themeIcon = document.getElementById("theme__icon");
const taskContainer = document.getElementById("task__container");
const boxIcon = document.getElementById("box__icon");
const checkedBoxIcon = document.getElementById("checkedbox__icon");
const taskTitle = document.getElementById("task__title");
const dragIcon = document.getElementById("drag__icon");
const deleteIcon = document.getElementById("delete__icon");
const addIcon = document.querySelector("#add__task-icon");
const addTaskTitle = document.querySelector("#add__task-text");


// Function for toggling Light/Dark Theme
function themeToggle() {
    themeIcon.addEventListener("click", function() {
        body.classList.toggle("body-dark");
        header.classList.toggle("header-dark");
        main.classList.toggle("main-dark");
        footer.classList.toggle("footer-dark");
        currentDate.classList.toggle("current__date-dark");
        currentTime.classList.toggle("current__time-dark");
        themeIcon.classList.toggle("theme__icon-dark");
        boxIcon.classList.toggle("box__icon-dark");
        checkedBoxIcon.classList.toggle("check__icon-dark");
        taskContainer.classList.toggle("task__container-dark");
        taskTitle.classList.toggle("task__text-dark");
        dragIcon.classList.toggle("drag__icon-dark");
        deleteIcon.classList.toggle("delete__icon-dark");
        addIcon.classList.toggle("add__task-icon-dark");
        addTaskTitle.classList.toggle("add__task-text-dark");
        })
};

themeToggle();


// Function to display current Date
function getCurrentDate() {
    const today = new Date()
    let day;
    let month;
    let year;

    function getDay() {
        day = today.getDate() < 10? "0" + today.getDate() : today.getDate();
    };

    function getMonth() {
        month = (today.getMonth()+1) < 10? "0" + (today.getMonth()+1) : (today.getMonth()+1);
    };

    function getFullYear() {
        year = today.getFullYear() < 10? "0" + today.getFullYear() : today.getFullYear();
    };

    getDay();
    getMonth();
    getFullYear();

    const displayCurrentDate = day + "/" + month + "/" + year;
    currentDate.textContent = displayCurrentDate;
};

getCurrentDate();


// Function to display current Time
function getCurrentTime() {
    const date = new Date();
    let hours;
    let minutes;
    let seconds;

    function getHours() {
        hours = date.getHours() < 10? "0" + date.getHours() : date.getHours();
    };

    function getMinutes() {
        minutes = date.getMinutes() < 10? "0" + date.getMinutes() : date.getMinutes();
    };

    function getSeconds() {
        seconds = date.getSeconds() < 10? "0" + date.getSeconds() : date.getSeconds();
    };

    getHours();
    getMinutes();
    getSeconds();

    const displayCurrentTime = hours + ":" + minutes + ":" + seconds;
    currentTime.textContent = displayCurrentTime;
};

getCurrentTime();


// Function to refresh the Time every second
setInterval(getCurrentTime, 1000);


// Function to delete Task Container
deleteIcon.addEventListener("click",function() {
    taskContainer.remove()
});


// Functions to toggle Task Checkbox
boxIcon.addEventListener("click", function() {
    boxIcon.style.display = "none"
    checkedBoxIcon.style.display = "block";
    taskContainer.style.opacity = 0.4;
});

checkedBoxIcon.addEventListener("click", function() {
    checkedBoxIcon.style.display = "none";
    boxIcon.style.display = "block"
    taskContainer.style.opacity = "initial";
});


addIcon.addEventListener("click", function(){
    let newTask = addTaskTitle.value;
    if (body.classList.contains("body-dark")) {
        main.innerHTML += '<div id="task__container" class="task__container task__container-dark"> <i id="box__icon" class="box__icon far fa-square"></i> <h2 class="task__title">' + newTask + '<i id="drag__icon" class="drag__icon fas fa-grip-vertical"></i> <i id="delete__icon" class="delete__icon far fa-trash-alt"></i>';
    }
    else {
        main.innerHTML += '<div id="task__container" class="task__container"> <i id="box__icon" class="box__icon far fa-square"></i> <h2 class="task__title">' + newTask + '<i id="drag__icon" class="drag__icon fas fa-grip-vertical"></i> <i id="delete__icon" class="delete__icon far fa-trash-alt"></i>';
    };
    addTaskTitle.reset();
    updateListener();
	updateVars();
});




// Need to push Task Container into Main Array
// Need to push Elements (Task Title, Icons) into Task Container Array
// Need to push input value into Task Title
// Link Button to Input
// Function to prevent auto load upon creating new task

// get input value
// push input value as new task title, give it task title class
// append it to container, give container the right class






/* // New Task Array
let taskItems = []; */


/* // This function gets executed if you press "add todo"
const addToTodoList = () => {
    // Get the value in the input field and put it in the "todoToAdd" variable
    const todoToAdd = addTaskTitle.value;
    // Add the value to the todoList array
    taskContainer.push(todoToAdd);
    // Create a new HTML Element, so the Item get's rendered on the screen
    createNewTodoListItem(todoToAdd);
  }; */





/* // storing all elements
const body = document.querySelector("body");
// header elements
const header = document.querySelector("header")
const currentDate = document.querySelector("#current__date");
const currentTime = document.querySelector("#current__time");
const themeIcon = document.querySelector("#theme__icon");;
// main elements
const main = document.querySelector("main")
const boxIcon = document.querySelector("#box__icon")
const checkIcon = document.querySelector("#check__icon")
const taskContainer = document.querySelector("#task__container");
const taskText = document.querySelector("#task__text");
const dragIcon = document.querySelector("#drag__icon");
const deleteIcon = document.querySelector("#delete__icon");
// footer elements
const footer = document.querySelector("footer")
const addTaskIcon = document.querySelector("#add__task-icon");
const addTaskText = document.querySelector("#add__task-text");


// creating function to toggle theme class on elements
themeIcon.addEventListener("click", function() {
    body.classList.toggle("body-dark");
    header.classList.toggle("header-dark");
    currentDate.classList.toggle("current__date-dark");
    currentTime.classList.toggle("current__time-dark");
    themeIcon.classList.toggle("theme__icon-dark");
    main.classList.toggle("main-dark");
    boxIcon.classList.toggle("box__icon-dark")
    checkIcon.classList.toggle("check__icon-dark")
    taskContainer.classList.toggle("task__container-dark");
    taskText.classList.toggle("task__text-dark");
    dragIcon.classList.toggle("drag__icon-dark");
    deleteIcon.classList.toggle("delete__icon-dark");
    footer.classList.toggle("footer-dark");
    addTaskIcon.classList.toggle("add__task-icon-dark");
    addTaskText.classList.toggle("add__task-text-dark");
});


// creating function to get current date
function getCurrentDate() {
    const today = new Date()
    let day;
    let month;
    let year;

    function getDay() {
        day = today.getDate() < 10? "0" + today.getDate() : today.getDate();
    };

    function getMonth() {
        month = (today.getMonth()+1) < 10? "0" + (today.getMonth()+1) : (today.getMonth()+1);
    };

    function getFullYear() {
        year = today.getFullYear() < 10? "0" + today.getFullYear() : today.getFullYear();
    };

    getDay();
    getMonth();
    getFullYear();

    const displayCurrentDate = day + "/" + month + "/" + year;
    currentDate.textContent = displayCurrentDate;
}

// creating function to get current time
function getCurrentTime() {
    const date = new Date();
    let hours;
    let minutes;
    let seconds;

    function getHours() {
        hours = date.getHours() < 10? "0" + date.getHours() : date.getHours();
    };

    function getMinutes() {
        minutes = date.getMinutes() < 10? "0" + date.getMinutes() : date.getMinutes();
    };

    function getSeconds() {
        seconds = date.getSeconds() < 10? "0" + date.getSeconds() : date.getSeconds();
    };

    getHours();
    getMinutes();
    getSeconds();

    const displayCurrentTime = hours + ":" + minutes + ":" + seconds;
    currentTime.textContent = displayCurrentTime;
};

getCurrentTime();

// display time and refresh every second
getCurrentTime();
setInterval(getCurrentTime, 1000);


// create delete function
deleteIcon.addEventListener("click",function(){
    taskContainer.remove()
});


// toggle task checkbox effects
boxIcon.addEventListener("click", function(){
    boxIcon.style.display = "none"
    checkIcon.style.display = "block";
    taskContainer.style.opacity = 0.4;
});

checkedBoxIcon.addEventListener("click", function(){
    checkIcon.style.display = "none";
    boxIcon.style.display = "block"
    taskContainer.style.opacity = "initial";
});


// array for new task
let taskItems = [];


// function to get new task input


addTaskText.addEventListener("keyup")

function getNewTaskInput() {
    addTaskText.value
};

taskItems.push(getNewTaskInput());
console.log(taskItems);


 */

