var likes = document.querySelectorAll(".num");

function increment_likes(i){
    num = likes[i];
    num.innerText = Number(num.innerText) + 1;
}