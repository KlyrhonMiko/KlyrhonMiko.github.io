var click = document.getElementById("header")
var content = document.getElementById("content")
var documentation = document.getElementById("documentation")

click.onclick = function() {
    if (content.className == "show") {
        content.className = "";
        documentation.className = "";
    }   else {
        content.className = "show";
        documentation.className = "show";
    }
}