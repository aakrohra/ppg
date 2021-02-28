var title = document.getElementById("pptitle");
var pname = document.getElementById("ppname");
var desc = document.getElementById("ppdesc");

var pageURL = window.location.href;
var querySegment = pageURL.substr(pageURL.lastIndexOf('=') + 1);
console.log(querySegment)

var template = document.getElementById("template")

$(document).ready(function () {
    $.getJSON('data.json', function (data) {
        console.log(data)
        for (var i = 0; i < data.length; i++){
            if (data[i].code == querySegment) {
                title.innerHTML = (data[i].title);
                pname.innerHTML = (data[i].name);
                desc.innerHTML = (data[i].description);
                
                if (data[i].special1.length != 0 && data[i].special1 != "N/A"){
                    var special1 = document.createElement("a")
                    special1.setAttribute("href",data[i].special1)
                    special1.setAttribute("target","_blank")
                    special1.setAttribute("class","templatelinks")
                    var special1text = document.createElement("p")
                    special1text.innerHTML = data[i].special1info
                    special1text.setAttribute("class","templatelinks")
                    special1.append(special1text)
                    template.append(special1)
                }
                
                if (data[i].special2.length != 0 && data[i].special2 != "N/A"){
                    var special2 = document.createElement("a")
                    special2.setAttribute("href",data[i].special2)
                    special2.setAttribute("target","_blank")
                    special2.setAttribute("class","templatelinks")
                    var special2text = document.createElement("p")
                    special2text.innerHTML = data[i].special2info
                    special2text.setAttribute("class","templatelinks")
                    special2.append(special2text)
                    template.append(special2)
                }
                
                images = data[i].image.split("\n")
                var c = images.length > 3
                if (c) {
                    var slider = document.createElement("div")
                    template.append(slider)
                    slider.setAttribute("class","owl-carousel owl-theme")
                    slider.style.setProperty("margin-bottom","15px")
                }
                
                
                for (j=0;j<images.length;j++) {
                    var imagediv = document.createElement("div")
                    imagediv.setAttribute("class","imagediv")
                    if (c) {slider.append(imagediv)}
                    else {template.append(imagediv)}
                    if (images[j].startsWith("https://") && images[j].length != 0) {
                        var image = document.createElement("img")
                        image.setAttribute("class","image")
                        image.setAttribute("id","ppimg")
                        image.setAttribute("src",images[j])
                        imagediv.append(image)
                    }
                }
                if (c) {
                $('.owl-carousel').owlCarousel({
                    loop:true,
                    center:true,
                    margin:10,
                    nav:true,
                    
                })}
                if (data[i].video.length != 0 && data[i].video.startsWith("https://")){
                    var para = document.createElement("p")
                    var iframe = document.createElement("iframe")
                    iframe.setAttribute("class","video")
                    iframe.setAttribute("id","ppvid")
                    iframe.setAttribute("frameborder","0")
                    iframe.setAttribute("allowfullscreen","true")
                    iframe.setAttribute("src", data[i].video)
                    para.append(iframe)
                    template.append(para)
                }
                
                break;
            }
        }

    });

});

var bottom = document.getElementById("bottom-menu")
$(document).ready(function () { 
    
    bottom.classList.toggle("active")
    bottom.style.opacity = 1;
})

//setInterval(() => {
//    var random = Math.floor(Math.random()*500) + 1
//    if (random == 500) {
//        icon.setAttribute("href","../resources/mai29.jpg")
//        setTimeout(() => {icon.setAttribute("href","../glenlogo.png")},100)
//    }
//},100)

