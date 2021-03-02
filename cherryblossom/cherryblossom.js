var test = document.getElementById("test")
test.getObject3D("mesh").material.transparent = true;


var current = 1
setInterval(function() {
    var num = Math.floor(Math.random()*3) + 1
    if (num >= current) {
        num += 1
    }
    current = num
    setTimeout(function() {fadeOut(1000)},2000)
    setTimeout(function() {
        
        test.setAttribute("src",`../resources/fullcb${current}.jpg`)
        test.getObject3D("mesh").material.opacity = 0
    },3000)
    setTimeout(function() {
        test.getObject3D("mesh").material.opacity = 0
    },3001)
    setTimeout(function() {
        fadeIn(1000)
    },3100)
    setTimeout(function() {
        test.getObject3D("mesh").material.opacity = 1
    },4110)
},10000)


function fadeOut(speed) {
    var counter = 0
    var interval = setInterval(() => {
        if (counter == speed/10) {
            clearInterval(interval)
        }
        else {
            test.getObject3D("mesh").material.opacity -= 10/speed
            counter++
        }
    },10)
}

function fadeIn(speed) {
    var counter = 0
    var interval = setInterval(() => {
        if (counter == speed/10) {
            clearInterval(interval)
        }
        else {
            test.getObject3D("mesh").material.opacity += 10/speed
            counter++
        }
    },10)
}