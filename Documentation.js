var click = document.getElementById("header")
var content = document.getElementById("content")

click.onclick = function() {
    if (content.className == "show") {
        content.className = "";
    }   else {
        content.className = "show";
    }
}