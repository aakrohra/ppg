// var button = document.getElementById("e");
// var plus = document.getElementById("plus");
// var minus = document.getElementById("minus");
// var speed = 1000;
// var show = document.getElementById("show");
// var change;
// var on = false;
var paragraph = document.getElementById("m");

console.log("test");

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

paragraph.innerHTML = "<span onclick=\"window.location.href='../mai/mai.html'\">Mai</span>tthew Tang";

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



