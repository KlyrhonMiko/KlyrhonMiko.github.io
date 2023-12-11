var content = document.getElementById("content")
var button = document.getElementById("button")
var hiddenContent = document.getElementById("hiddenContent")
var main = document.getElementById("main")
var hiddenImage = document.getElementById("hiddenImage")

button.onclick = function () {
    if (content.className == "clicked") {
        content.className = "";
        hiddenContent.className = "";
        main.className = "";
        button.className = "";
        hiddenImage.className = "";
    } else {
        content.className = "clicked";
        hiddenContent.className = "show";
        main.className = "clicked";
        button.className = "clicked";
        hiddenImage.className = "show";
    }
}