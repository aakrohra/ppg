var gallery = document.getElementById("gallery")
var info = {}
var bottom = document.getElementById("bottom-menu")
$(document).ready(function () { 
    $.getJSON('../projects/data.json', function (data) {
        info = data
        console.log(info)
        for (var i=0; i < info.length; i++) {
            if (info[i].name.toLowerCase().includes("matthew")) {continue}
            var column = document.createElement("div")
            column.setAttribute("class","column")
            column.setAttribute("id","column" + i)
            var a = document.createElement("a")
            a.setAttribute("href","../projects/template.html?q=" + i)
            column.append(a)
            var img = document.createElement("img")
            img.setAttribute("draggable","false")
            console.log(info[i].image)
            img.setAttribute("src", info[i].image.length != 0 && info[i].image.startsWith("https://") ? info[i].image.split("\n")[0] : "../glenlogo.png")
            a.append(img)
            var name = document.createElement("div")
            name.setAttribute("class","name")
            column.append(name)
            var p = document.createElement("p")
            p.innerHTML = info[i].title
            name.append(p)
            var text = document.createElement("H3")
            text.innerHTML = info[i].name
            column.append(text)
            gallery.append(column)
        }


    })
    
    bottom.classList.toggle("active")
    bottom.style.opacity = 1;
})
//var icon = document.getElementById("icon")
//setInterval(() => {
//    var random = Math.floor(Math.random()*500) + 1
//    if (random == 500) {
//        icon.setAttribute("href","../resources/mai29.jpg")
//        setTimeout(() => {icon.setAttribute("href","../glenlogo.png")},100)
//    }
//},100)

// function filter() {
//     var filter = document.getElementById("filtersearch").value.toLowerCase()
    
//     $.getJSON('../projects/data.json', function (data) {
//         info = data
//         gallery.innerHTML = ''
//         console.log(filter)
//         for (var i=0; i < info.length; i++) {
//             if (info[i].Name.toLowerCase().includes(filter) || info[i].Title.toLowerCase().includes(filter)) {
//                 var column = document.createElement("div")
//                 column.setAttribute("class","column")
//                 var a = document.createElement("a")
//                 a.setAttribute("href","../projects/template.html?q=" + i)
//                 column.append(a)
//                 var img = document.createElement("img")
//                 img.setAttribute("draggable","false")
//                 img.setAttribute("src",info[i].Image)
//                 a.append(img)
//                 var name = document.createElement("div")
//                 name.setAttribute("class","name")
//                 column.append(name)
//                 var p = document.createElement("p")
//                 p.innerHTML = info[i].Title
//                 name.append(p)
//                 var text = document.createElement("H3")
//                 text.innerHTML = info[i].Name
//                 column.append(text)
//                 gallery.append(column)
//             }
            
//         }
//     })
// }

function filter() {
    var filter = document.getElementById("filtersearch").value.toLowerCase()

    $.getJSON('../projects/data.json', function (data) {
        for (i=0;i<info.length;i++) {
            if (info[i].name.toLowerCase().includes(filter) || info[i].title.toLowerCase().includes(filter)) {
                $("#column" + i).fadeIn(500)
            }
            else {
                $("#column" + i).fadeOut(300)
            }
        }
    })
}
$(".email")[0].innerHTML = "Something wrong? Contact the developers! <br>ppgalleryteam@g<span onclick=\"window.location.href='../lock/lock.html'\" >mai</span>l.com"
setInterval(() => { if (Math.floor(Math.random()*500) + 1 == 500) {icon.setAttribute("href","../resources/glenlogo.png");setTimeout(() => {icon.setAttribute("href","../glenlogo.png")},50)}},100)