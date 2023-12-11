var content = document.getElementById("content")
var button = document.getElementById("button")
var hiddenContent = document.getElementById("hiddenContent")
var main = document.getElementById("main")
var hiddenImage = document.getElementById("hiddenImage")
var wrapper = document.getElementById("wrapper")

button.onclick = function () {
    if (wrapper.className == "show") {
        wrapper.className = "";
        main.className = "";
        content.className = "";
    } else {
        wrapper.className = "show";
        main.className = "clicked";
        content.className = "clicked";
    }
}