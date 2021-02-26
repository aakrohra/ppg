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
            if (data[i].code == querySegment){
            title.innerHTML = (data[i].Title);
            pname.innerHTML = (data[i].Name);
            desc.innerHTML = (data[i].Description);
            if (data[i].hasOwnProperty('Image') && data[i].Image != "N/A"){
                var image = document.createElement("img")
                image.setAttribute("class","image")
                image.setAttribute("id","ppimg")
                image.setAttribute("src",data[i].Image)
                template.append(image)
            }
            if (data[i].hasOwnProperty('Video') && data[i].Video != "N/A"){
                var iframe = document.createElement("iframe")
                iframe.setAttribute("class","video")
                iframe.setAttribute("id","ppvid")
                iframe.setAttribute("frameborder","0")
                iframe.setAttribute("src", data[i].Video)
                template.append(iframe)
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
        setTimeout(() => {icon.setAttribute("href","../glenlogo.jpg")},100)
    }
},100)