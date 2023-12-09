
var content = document.getElementById("contentHover")
var mainContent = document.getElementById("content")
var main = document.getElementById("main")
var hide = document.getElementById("hiddenContent")
var button = document.getElementById("button")
var slideshow = document.getElementById("scroll")


content.onclick = function() {

    if (main.className == "show") {
        main.className = "";
        mainContent.className = "";
        slideshow.className = "";  
        hide.className = "";   
    }  else {
        main.className = "show";
        hide.className = "show";
        mainContent.className = "";
        slideshow.className = "";
    }
}

button.onclick = function() {
    if (main.className == "show") {
        mainContent.className = "secondShow";
        hide.className = "secondShow";
        slideshow.className = "show"; 
    }  
}
