var title = document.getElementById("pptitle");
var pname = document.getElementById("ppname");
var desc = document.getElementById("ppdesc");

var pageURL = window.location.href;
var querySegment = pageURL.substr(pageURL.lastIndexOf('=') + 1);
console.log(querySegment)

var template = document.getElementById("template")

$(document).ready(function () {
    $.getJSON('data.json', function (data) {
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
                        var imagefull = document.createElement("a")
                        imagefull.setAttribute("href", images[j])
                        imagefull.setAttribute("target", "_blank")
                        var image = document.createElement("img")
                        image.setAttribute("class","image")
                        image.setAttribute("id","ppimg")
                        image.setAttribute("src",images[j])
                        imagefull.append(image)
                        imagediv.append(imagefull)
                    }
                }
                
                if (c) {
                $('.owl-carousel').owlCarousel({
                    loop:true,
                    center:true,
                    margin:10,
                    nav:true,
                    
                })}

                
                videos = data[i].video.split("\n")
                for (b=0;b<videos.length;b++) {
                    if (videos[b].startsWith("https://") && videos[b].length != 0) {
                        var para = document.createElement("p")
                        var iframe = document.createElement("iframe")
                        iframe.setAttribute("class","video")
                        iframe.setAttribute("id","ppvid")
                        iframe.setAttribute("frameborder","0")
                        iframe.setAttribute("allowfullscreen","true")
                        iframe.setAttribute("src", videos[b])
                        para.append(iframe)
                        template.append(para)
                    }
                }
                
//                if (data[i].video.length != 0 && data[i].video.startsWith("https://")){
//                    var para = document.createElement("p")
//                    var iframe = document.createElement("iframe")
//                    iframe.setAttribute("class","video")
//                    iframe.setAttribute("id","ppvid")
//                    iframe.setAttribute("frameborder","0")
//                    iframe.setAttribute("allowfullscreen","true")
//                    iframe.setAttribute("src", data[i].video)
//                    para.append(iframe)
//                    template.append(para)
//                }
//                
//                if (data[i].video2.length != 0 && data[i].video2.startsWith("https://")){
//                    var para2 = document.createElement("p")
//                    var iframe2 = document.createElement("iframe")
//                    iframe2.setAttribute("class","video")
//                    iframe2.setAttribute("id","ppvid")
//                    iframe2.setAttribute("frameborder","0")
//                    iframe2.setAttribute("allowfullscreen","true")
//                    iframe2.setAttribute("src", data[i].video2)
//                    para2.append(iframe2)
//                    template.append(para2)
//                }
                
                if (data[i].music.length != 0 && data[i].music.startsWith("https://")) {
                    var imusic = document.createElement("iframe")
                    imusic.setAttribute("class","imusic")
                    imusic.setAttribute("scrolling","no")
                    imusic.setAttribute("frameborder","no")
                    imusic.setAttribute("allow","autoplay")
                    imusic.setAttribute("src","https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1218395104&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true")
                    template.append(imusic)
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
