var content = document.getElementById("content")
var button = document.getElementById("button")
var main = document.getElementById("main")
var move = document.getElementById("move")
var hiddenContent = document.getElementById("hiddenContent")
var buttonMargin = document.getElementById("buttonMargin")
button.onclick = function () {
    if (content.className == "clicked") {
        content.className = "";
        main.className = "";
        button.className = "";
        hiddenContent.className = "";
        move.className = "";
        buttonMargin.className = "";
    } else {
        content.className = "clicked";
        main.className = "clicked";
        button.className = "clicked";
        hiddenContent.className = "show";
        move.className = "clicked";
        buttonMargin.className = "clicked";
    }
}