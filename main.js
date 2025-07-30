const page1btn = document.querySelector("#pg1btn");
const page2btn = document.querySelector("#pg2btn");
const page3btn = document.querySelector("#pg3btn");
const page4btn = document.querySelector("#pg4btn");
var allpages = document.querySelectorAll(".page");
//select all subtopic pages
function hideall() { //function to hide all pages
    for (let onepage of allpages) { //go through all subtopic pages
        onepage.style.display = "none"; //hide it
    }
}
function show(pgno) { //function to show selected page no
    hideall();
    //select the page based on the parameter passed in
    let onepage = document.querySelector("#page" + pgno); //querySelector looks for a specific element in the html
    onepage.style.display = "block"; //show the page
}
/*Listen for clicks on the buttons, assign anonymous
eventhandler functions to call show function
add/remove active to change colour on certain elements*/
page1btn.addEventListener("click", function () {
    page1btn.classList.add("active");
    page2btn.classList.remove("active");
    page3btn.classList.remove("active");
    page4btn.classList.remove("active");
    show(1);
});
page2btn.addEventListener("click", function () {
    page1btn.classList.remove("active");
    page2btn.classList.add("active");
    page3btn.classList.remove("active");
    page4btn.classList.remove("active");
    show(2);
});
page3btn.addEventListener("click", function () {
    page1btn.classList.remove("active");
    page2btn.classList.remove("active");
    page3btn.classList.add("active");
    page4btn.classList.remove("active");
    show(3);
});
page4btn.addEventListener("click", function () {
    page1btn.classList.remove("active");
    page2btn.classList.remove("active");
    page3btn.classList.remove("active");
    page4btn.classList.add("active");
    show(4);
});
hideall();

const btnSubmit=document.querySelector("#btnSubmit");
btnSubmit.addEventListener("click",CheckAns);
const scorebox=document.querySelector("#scorebox");
var q1,q2,score=0;
function CheckAns(){
score=0; //reset score to 0, check ans and give score if correct
//read the value of the selected radio button for q1
q1=document.querySelector("input[name='q1']:checked").value;
console.log(q1); //check q1 value retrieved
if(q1=="VTEC")score++;
//read the value of the selected radio button for q2
q2=document.querySelector("input[name='q2']:checked").value;
console.log(q2); //check q2 value retrieved
if(q2=="Red")score++;
scorebox.innerHTML="Score: "+score;
}

// this SUCKS
const hamBtn = document.querySelector("#hamIcon");
hamBtn.addEventListener("click", toggleMenus);
const menuItemsList = document.querySelector("nav ul");

function toggleMenus() {
    if (menuItemsList.classList.contains("menuShow")) {
        hamBtn.innerHTML = "Open Menu";
        menuItemsList.classList.remove("menuShow");
    }
    else {
        hamBtn.innerHTML = "Close Menu";
        menuItemsList.classList.add("menuShow");
    }
}

const btnFS=document.querySelector("#btnFS");
const btnWS=document.querySelector("#btnWS");
btnFS.addEventListener("click",enterFullscreen);
btnWS.addEventListener("click",exitFullscreen);

function enterFullscreen() { //must be called by user generated event
if (document.documentElement.requestFullscreen) {
document.documentElement.requestFullscreen();
} else if (document.documentElement.mozRequestFullScreen) { // Firefox
document.documentElement.mozRequestFullScreen();
} else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari, and Opera
document.documentElement.webkitRequestFullscreen();
} else if (document.documentElement.msRequestFullscreen) { // IE/Edge
document.documentElement.msRequestFullscreen();
}
}

function exitFullscreen() {
if (document.exitFullscreen) {
document.exitFullscreen();
} else if (document.mozCancelFullScreen) { // Firefox
document.mozCancelFullScreen();
} else if (document.webkitExitFullscreen) { // Chrome, Safari, and Opera
document.webkitExitFullscreen();
} else if (document.msExitFullscreen) { // IE/Edge
document.msExitFullscreen();
}
}