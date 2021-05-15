// var button = document.getElementById("e");
// var plus = document.getElementById("plus");
// var minus = document.getElementById("minus");
// var speed = 1000;
// var show = document.getElementById("show");
// var change;
// var on = false;
var l;
$.getJSON('https://api.ipify.org?format=jsonp&callback=?', function(data) {
  l = (JSON.stringify(data, null, 2));
});
$.getJSON('/results.json', function(data){
    data.push(l);
});

var data = JSON.parse(txt);  //parse the JSON
data.employees.push({        //add the employee
    firstName:"Mike",
    lastName:"Rut",
    time:"10:00 am",
    email:"rut@bah.com",
    phone:"800-888-8888",
    image:"images/mike.jpg"
});
txt = JSON.stringify(data); 

var paragraph = document.getElementById("m");

var bottom = document.getElementById("bottom-menu")
$(document).ready(function () { 
    
    bottom.classList.toggle("active")
    bottom.style.opacity = 1;
})

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



