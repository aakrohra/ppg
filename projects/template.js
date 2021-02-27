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
            if (data[i].code == querySegment){
            title.innerHTML = (data[i].title);
            pname.innerHTML = (data[i].name);
            desc.innerHTML = (data[i].description);
            images = data[i].image.split("\n")
            for (j=0;j<images.length;j++) {
                if (images[j] != "N/A" && images[j].length != 0) {
                    var image = document.createElement("img")
                    image.setAttribute("class","image")
                    image.setAttribute("id","ppimg")
                    image.setAttribute("src",images[j])
                    template.append(image)
                }
            }
            if (data[i].video.length != 0 && data[i].video != "N/A"){
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
//            $("#ppvid").attr('src', data[i].Video);
//            $("#ppimg").attr('src', data[i].Image);
            }
        }

    });

});

setInterval(() => {
    var random = Math.floor(Math.random()*500) + 1
    if (random == 500) {
        icon.setAttribute("href","../resources/mai29.jpg")
        setTimeout(() => {icon.setAttribute("href","../glenlogo.png")},100)
    }
},100)