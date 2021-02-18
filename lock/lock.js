function checker() {
    var x = document.forms["lock"]["passwd"].value;
    if (x != "maisakurajimabestgirl") {
        alert("Incorrect password.");
        return false
    }
}
setInterval(() => {
    var icon = document.getElementById("icon")
    var random = Math.floor(Math.random()*50) + 1
    if (random == 50) {
        icon.setAttribute("href","../resources/mai29.jpg")
        setTimeout(() => {icon.setAttribute("href","../glenlogo.png")},100)
    }
},100)
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

