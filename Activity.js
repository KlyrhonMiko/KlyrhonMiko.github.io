var content = document.getElementById("content")
var members = document.getElementById("members")
var h1 = document.getElementById("main")

content.onclick = function() {
    if (content.className == "show") {
        content.className = "";
        members.className = "";
        h1.className = "";
    }   else {
        content.className = "show";
        members.className = "show";
        h1.className = "animation"
    }
}