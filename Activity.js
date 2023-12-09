var content = document.getElementById("content")
var click = document.getElementById("click")
var members = document.getElementById("members")
var kly = document.getElementById("klyClick")
var ed = document.getElementById("edClick")
var vin = document.getElementById("vinClick")
var chez = document.getElementById("chezClick")
var ella = document.getElementById("ellaClick")
var klyAct = document.getElementById("klyAct")
var edAct = document.getElementById("edAct")
var vinAct = document.getElementById("vinAct")
var chezAct = document.getElementById("chezAct")
var ellaAct = document.getElementById("ellaAct")

click.onclick = function() {
    if (content.className == "show") {
        content.className = "";
        members.className = "";
        klyAct.className = "";
        edAct.className = "";
        vinAct.className = "";
        chezAct.className = "";
        ellaAct.className = "";
    }   else {
        content.className = "show";
        members.className = "show";
    }
}

kly.onclick = function() {
    if (klyAct.className == "show") {
        kly.className = "";
        klyAct.className = "";
        edAct.className = "";
        vinAct.className = "";
        chezAct.className = "";
        ellaAct.className = "";
    }   else {
        klyAct.className = "show";
        kly.className = "clicked";
        edAct.className = "";
        ed.className = "";
        vinAct.className = "";
        chezAct.className = "";
        ellaAct.className = "";
        vin.className = "";
        chez.className = "";
        ella.className = "";
    }
}

ed.onclick = function() {
    if (edAct.className == "show") {
        ed.className = "";
        edAct.className = "";
        klyAct.className = "";
        edAct.className = "";
        vinAct.className = "";
        chezAct.className = "";
        ellaAct.className = "";
    }   else {
        kly.className = "";
        klyAct.className = "";
        edAct.className = "show";
        ed.className = "clicked";
        vinAct.className = "";
        chezAct.className = "";
        ellaAct.className = "";
        vin.className = "";
        chez.className = "";
        ella.className = "";
    }
}

vin.onclick = function() {
    if (vinAct.className == "show") {
        vin.className = "";
        vinAct.className = "";
    }   else {
        vinAct.className = "show";
        kly.className = "";
        ed.className = "";
        vin.className = "clicked";
        chez.className = "";
        ella.className = "";
    }
}

chez.onclick = function() {
    if (chezAct.className == "show") {
        chez.className = "";
        chezAct.className = "";
    }   else {
        chezAct.className = "show";
        kly.className = "";
        ed.className = "";
        vin.className = "";
        chez.className = "clicked";
        ella.className = "";
    }
}

ella.onclick = function() {
    if (ellaAct.className == "show") {
        ella.className = "";
        ellaAct.className = "";
    }   else {
        ellaAct.className = "show";
        kly.className = "";
        vin.className = "";
        chez.className = "";
        ella.className = "clicked";
    }
}