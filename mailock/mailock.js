function checker() {
    var x = document.forms["mailock"]["passwd"].value;
    if (x != "maisakurajimabestgirl") {
        alert("Incorrect password.");
        return false
    }
}