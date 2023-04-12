function changename(){
    var name = document.querySelector(".username > h1");
    name.innerText = prompt("What is your name?");
}

var requests = document.querySelectorAll(".request");

function remove(i){
    var request = requests[i];
    var num_requests = document.querySelector(".display-requests-number")
    request.remove();
    num_requests.innerText = Number(num_requests.innerText) - 1;
}

function addconnection(){
    var num_connections = document.querySelector(".display-connections-number")
    num_connections.innerText = Number(num_connections.innerText) + 1;
}