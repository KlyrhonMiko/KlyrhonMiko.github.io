var content = document.getElementById("content")
var button = document.getElementById("button")

button.onclick = function () {
    if (content.className == "clicked") {
        content.className = "";
    } else {
        content.className = "clicked";
    }
}