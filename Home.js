var content = document.getElementById("content")
var button = document.getElementById("button")
var hiddenContent = document.getElementById("hiddenContent")
var main = document.getElementById("main")

button.onclick = function () {
    if (content.className == "clicked") {
        content.className = "";
        hiddenContent.className = "";
        main.className = "";
    } else {
        content.className = "clicked";
        hiddenContent.className = "show";
        main.className = "clicked";
    }
}