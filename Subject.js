var content = document.getElementById("content")
var button = document.getElementById("button")
var top = document.getElementById("top")

button.onclick = function() {
    if (top.className == "clicked") {
        top.className = "";
    } else {
        top.className = "clicked";
    }
}   