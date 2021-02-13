function checker() {
    var x = document.forms["mailock"]["passwd"].value;
    if (x != "maisakurajimabestgirl") {
        alert("Incorrect password.");
        return false
    }
}
setInterval(() => {
    var random = Math.floor(Math.random()*50) + 1
    if (random == 50) {
        icon.setAttribute("href","../resources/mai29.jpg")
        setTimeout(() => {icon.setAttribute("href","../glenlogo.jpg")},100)
    }
},100)