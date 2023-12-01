var button = document.getElementById("course")
var button2 = document.getElementById("button")
var computer = document.getElementById("computer")
var hiddenContent = document.getElementById("hiddenContent")

button2.onclick = function() {
    if (content.className == "left") {
        content.className = "";
        computer.className = "";
        hiddenContent.className = "";
        course.className = "";
    } else {
        course.className = "clicked";
        content.className   = "left";
        computer.className= "left"
        hiddenContent.className = "show";
    }
}
