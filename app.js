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
        let newTaskContainer = document.createElement("div");
        newTaskContainer.classList.add("task__container", "task__container-dark");

        let newBoxIcon = document.createElement("i");
        newBoxIcon.classList.add("box__icon", "box__icon-dark", "far", "fa-square");
        
        let newCheckedBoxIcon = document.createElement("i");
        newCheckedBoxIcon.classList.add("checkedbox__icon", "check__icon-dark", "far", "fa-square");

        let newTaskTitle = document.createElement("h2");
        newTaskTitle.innerHTML= newTask;
        newTaskTitle.classList.add("task__title", "task__text-dark");

        let newDragIcon = document.createElement("i");
        newDragIcon.classList.add("drag__icon", "drag__icon-dark", "fas", "fa-grip-vertical");

        let newDeleteIcon = document.createElement("i");
        newDeleteIcon.classList.add("delete__icon", "delete__icon-dark", "far", "fa-trash-alt");

        main.append(newTaskContainer);
        newTaskContainer.append(newBoxIcon, newCheckedBoxIcon, newTaskTitle, newDragIcon, newDeleteIcon);
    }
    else {
        let newTaskContainer = document.createElement("div");
        newTaskContainer.classList.add("task__container");
        newTaskContainer.classList.remove("task__container-dark");


        let newBoxIcon = document.createElement("i");
        newBoxIcon.classList.add("box__icon", "far", "fa-square");
        newBoxIcon.classList.remove("box__icon-dark");

        let newCheckedBoxIcon = document.createElement("i");
        newCheckedBoxIcon.classList.add("checkedbox__icon", "far", "fa-square");
        newCheckedBoxIcon.classList.remove("checkedbox__icon-dark");

        let newTaskTitle = document.createElement("h2");
        newTaskTitle.innerHTML= newTask;
        newTaskTitle.classList.add("task__title");
        newTaskTitle.classList.remove("task__title-dark");

        let newDragIcon = document.createElement("i");
        newDragIcon.classList.add("drag__icon", "fas", "fa-grip-vertical");
        newDragIcon.classList.remove("drag__icon-dark");

        let newDeleteIcon = document.createElement("i");
        newDeleteIcon.classList.add("delete__icon", "far", "fa-trash-alt");
        newDeleteIcon.classList.remove("delete__icon-dark");

        main.append(newTaskContainer);
        newTaskContainer.append(newBoxIcon, newCheckedBoxIcon, newTaskTitle, newDragIcon, newDeleteIcon);
    };
});

// Function for toggling Light/Dark Theme
themeIcon.addEventListener("click", function() {
    const allTasksEl = document.querySelectorAll(".task__container");
    
    for (let i = 0; i < allTasksEl.length; i++) {
    allTasksEl[i].classList.toggle("task__container-dark");
    };
    body.classList.toggle("body-dark");
    header.classList.toggle("header-dark");
    main.classList.toggle("main-dark");
    footer.classList.toggle("footer-dark");
    currentDate.classList.toggle("current__date-dark");
    currentTime.classList.toggle("current__time-dark");
    themeIcon.classList.toggle("theme__icon-dark");
    addIcon.classList.toggle("add__task-icon-dark");
    addTaskTitle.classList.toggle("add__task-text-dark");
    });