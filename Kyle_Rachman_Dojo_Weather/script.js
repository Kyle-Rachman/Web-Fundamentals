function report(){
    alert("Loading weather report...");
}

var highs = document.querySelectorAll(".high");
var lows = document.querySelectorAll(".low");

function convert(){
    select = document.querySelector("select");
    if (select.value == "Fahrenheit"){
        for (var i=0; i < highs.length; i++){
            var high = highs[i];
            var low = lows[i];
            high.innerText = Math.round(Number(high.innerText)*(9/5) + 32);  
            low.innerText = Math.round(Number(low.innerText)*(9/5) + 32);          
        }
    }
    else{
        for (var i=0; i < highs.length; i++){
            var high = highs[i];
            var low = lows[i];
            high.innerText = Math.round((Number(high.innerText)-32)*(5/9));
            low.innerText = Math.round((Number(low.innerText)-32)*(5/9));            
        }
    }
}

function accept_cookies(){
    var cookies = document.querySelector(".cookies");
    cookies.remove();
}