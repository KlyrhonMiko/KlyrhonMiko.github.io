var content = document.getElementById("contentHover")
var main = document.getElementById("main")

content.onclick = function() {
    if (main.className == "show") {
        main.className = "";
    } else {
        main.className = "show";
    }
}