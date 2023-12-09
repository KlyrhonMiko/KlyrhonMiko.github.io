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
        ed.className= "";
        edAct.className = "";
        vin.className = "";
        vinAct.className = "";
        chez.className = "";
        chezAct.className = "";
        ella.className = "";
        ellaAct.className = "";
    }   else {
        kly.className = "clicked";
        klyAct.className = "show";
        ed.className= "";
        edAct.className = "";
        vin.className = "";
        vinAct.className = "";
        chez.className = "";
        chezAct.className = "";
        ella.className = "";
        ellaAct.className = "";
    }
}

ed.onclick = function() {
    if (edAct.className == "show") {
        kly.className = "";
        klyAct.className = "";
        ed.className= "";
        edAct.className = "";
        vin.className = "";
        vinAct.className = "";
        chez.className = "";
        chezAct.className = "";
        ella.className = "";
        ellaAct.className = "";
    }   else {
        kly.className = "";
        klyAct.className = "";
        ed.className= "clicked";
        edAct.className = "show";
        vin.className = "";
        vinAct.className = "";
        chez.className = "";
        chezAct.className = "";
        ella.className = "";
        ellaAct.className = "";
    }
}

vin.onclick = function() {
    if (vinAct.className == "show") {
        kly.className = "";
        klyAct.className = "";
        ed.className= "";
        edAct.className = "";
        vin.className = "";
        vinAct.className = "";
        chez.className = "";
        chezAct.className = "";
        ella.className = "";
        ellaAct.className = "";
    }   else {
        kly.className = "";
        klyAct.className = "";
        ed.className= "";
        edAct.className = "";
        vin.className = "clicked";
        vinAct.className = "show";
        chez.className = "";
        chezAct.className = "";
        ella.className = "";
        ellaAct.className = "";
    }
}

chez.onclick = function() {
    if (chezAct.className == "show") {
        kly.className = "";
        klyAct.className = "";
        ed.className= "";
        edAct.className = "";
        vin.className = "";
        vinAct.className = "";
        chez.className = "";
        chezAct.className = "";
        ella.className = "";
        ellaAct.className = "";
    }   else {
        kly.className = "";
        klyAct.className = "";
        ed.className= "";
        edAct.className = "";
        vin.className = "";
        vinAct.className = "";
        chez.className = "clicked";
        chezAct.className = "show";
        ella.className = "";
        ellaAct.className = "";
    }
}

ella.onclick = function() {
    if (ellaAct.className == "show") {
        kly.className = "";
        klyAct.className = "";
        ed.className= "";
        edAct.className = "";
        vin.className = "";
        vinAct.className = "";
        chez.className = "";
        chezAct.className = "";
        ella.className = "";
        ellaAct.className = "";
    }   else {
        kly.className = "";
        klyAct.className = "";
        ed.className= "";
        edAct.className = "";
        vin.className = "";
        vinAct.className = "";
        chez.className = "";
        chezAct.className = "";
        ella.className = "clicked";
        ellaAct.className = "show";
    }
}