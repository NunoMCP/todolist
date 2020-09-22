var taskListItems = document.getElementsByTagName("LI");

for(var i = 0; i < taskListItems.length; i++){
    var span = document.createElement("span")
    var text = document.createTextNode("\u00D7")
    span.className = "close"
    span.appendChild(text)
    taskListItems[i].appendChild(span)
}

var close = document.getElementsByClassName("close")

for(var i = 0; i < close.length; i++){
    close[i].onclick = function(){
        var div = this.parentElement;
        div.style.display = "none";
    }
}

var list = document.querySelector('#taskListDiv ul');

list.addEventListener("click", function(ev){
    if(ev.target.tagName === "LI"){
        ev.target.classList.toggle("check")
    }
}, false)

