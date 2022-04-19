let n = document.querySelector('#num');
let count = 0;
function increaseNo(){
    count++;
    document.getElementById("num").innerHTML=count;
}
function decreaseNo(){
    count--;
    document.getElementById("num").innerHTML=count;
}
function resetNo(){
    count = 0;
    document.getElementById("num").innerHTML=count;
}