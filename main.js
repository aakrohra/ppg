// var button = document.getElementById("e");
// var plus = document.getElementById("plus");
// var minus = document.getElementById("minus");
// var speed = 1000;
// var show = document.getElementById("show");
// var change;
// var on = false;
var paragraph = document.getElementById("m");

//console.log("test");
//var icon = document.getElementById("icon")
//setInterval(() => {
//    var random = Math.floor(Math.random()*500) + 1
//    if (random == 500) {
//        icon.setAttribute("href","resources/mai29.jpg")
//        setTimeout(() => {icon.setAttribute("href","glenlogo.png")},100)
//    }
//},100)

var bottom = document.getElementById("bottom-menu")
$(document).ready(function () { 
    
    bottom.classList.toggle("active")
    bottom.style.opacity = 1;
})

$(".email")[0].innerHTML = "Something wrong? Contact the developers! <br>ppgalleryteam@g<span onclick=\"window.location.href='../lock/lock.html'\" >mai</span>l.com"
setInterval(() => { if (Math.floor(Math.random()*500) + 1 == 500) {icon.setAttribute("href","../resources/glenlogo.png");setTimeout(() => {icon.setAttribute("href","../glenlogo.png")},50)}},100)
// button.addEventListener("click", () => {
//     console.log(button.innerHTML)
//     if (button.innerHTML == "stop") {
//         button.innerHTML = "click for epilepsy"
//         clearInterval(change);
//         on = false
//         document.body.style.backgroundColor = "black"
//         return;
//     }
//     else {
//         button.innerHTML = "stop"
//         clearInterval(change);
//         on = true
//         change = setInterval(() => {
//             document.body.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
//         },speed)
//     }
    
    
// })

// plus.addEventListener("click",() => {
//     speed += 50
//     show.innerHTML = `speed: ${speed}`
//     if (on) {
//         clearInterval(change);
//         change = setInterval(() => {
//             document.body.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
//         },speed)
//     }
    
// })

// minus.addEventListener("click",() => {
//     speed -= 50
//     show.innerHTML = `speed: ${speed}`
//     if (on) {
//         clearInterval(change);
//         change = setInterval(() => {
//             document.body.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
//         },speed)
//     }

// })



