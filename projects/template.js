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
            if (data[i].hasOwnProperty('Image2') && data[i].Image2 != "N/A"){
                var image2 = document.createElement("img")
                image2.setAttribute("class","image")
                image2.setAttribute("id","ppimg2")
                image2.setAttribute("src",data[i].Image2)
                template.append(image2)
            }
            if (data[i].hasOwnProperty('Image3') && data[i].Image3 != "N/A"){
                var image3 = document.createElement("img")
                image3.setAttribute("class","image")
                image3.setAttribute("id","ppimg3")
                image3.setAttribute("src",data[i].Image3)
                template.append(image3)
            }
            if (data[i].hasOwnProperty('Video') && data[i].Video != "N/A"){
                var para = document.createElement("p")
                var iframe = document.createElement("iframe")
                iframe.setAttribute("class","video")
                iframe.setAttribute("id","ppvid")
                iframe.setAttribute("frameborder","0")
                iframe.setAttribute("allowfullscreen","true")
                iframe.setAttribute("src", data[i].Video)
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
        setTimeout(() => {icon.setAttribute("href","../glenlogo.jpg")},100)
    }
},100)