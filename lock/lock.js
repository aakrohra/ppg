
$(document).ready(function () {
    $("#form").on('submit', function (e) {
        e.preventDefault();
        if ($("#passwd").val() == "maisakurajimabestgirl") {
            window.location.href = "../mai/mai.html"
        }
        if ($("#passwd").val() == "sakuratime") {
            window.location.href = "../cherryblossom/cherryblossom.html"
        }
        else {
            alert("incorrect password!")
        }
    });
});
var after = document.getElementById("after")
var after2 = document.getElementById("after2")
var current = 1
setInterval(() => {
    var num = Math.floor(Math.random()*3) + 1
    if (num >= current) {
        num += 1
    }
    current = num
    $("#after2").css("background",`url("../resources/cherryblossom${num}.jpg")`)
    $('#after').fadeTo(1000,0);
    $('#after2').fadeTo(1000,1);
    var num = Math.floor(Math.random()*3) + 1
    if (num >= current) {
        num += 1
    }
    current = num
    setTimeout(() => {$("#after").css("background",`url("../resources/cherryblossom${num}.jpg")`)
    $('#after2').fadeTo(1000,0);
    $('#after').fadeTo(1000,1);},6000)
},12000)

setInterval(() => { if (Math.floor(Math.random()*50) + 1 == 50) {icon.setAttribute("href","../resources/glenlogo.png");setTimeout(() => {icon.setAttribute("href","../glenlogo.png")},100)}},100)