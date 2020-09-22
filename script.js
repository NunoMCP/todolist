var taskListItems = document.getElementsByTagName("LI");

for(var i = 0; i < taskListItems.length; i++){
    var span = document.createElement("span")
    var x = document.createTextNode("\u00D7")
    span.className = "close"
    span.appendChild(x)
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

function createTask() {
    var taskListNew = document.createElement("li")
    inputValue = document.getElementById("textInput").value
    var taskText = document.createTextNode(inputValue)
    taskListNew.appendChild(taskText)
    if(inputValue === ""){
        alert("it must not be empty")
    }else {
        var mainTaskList = document.getElementById("taskList")
        mainTaskList.appendChild(taskListNew)
    }
    document.getElementById("textInput").value = ""

    var span = document.createElement("span")
    var x = document.createTextNode("\u00D7")
    span.className = "close"
    span.appendChild(x)
    taskListNew.appendChild(span)

    for(var i = 0; i < close.length; i++){
        close[i].onclick = function(){
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}