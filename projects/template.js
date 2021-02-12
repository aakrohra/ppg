var title = document.getElementById("pptitle");
var pname = document.getElementById("ppname");
var desc = document.getElementById("ppdesc");

var pageURL = window.location.href;
var querySegment = pageURL.substr(pageURL.lastIndexOf('=') + 1);
console.log(querySegment)

$(document).ready(function () {
    $.getJSON('data.json', function (data) {
        for (var i = 0; i < data.length; i++){
            if (data[i].code == querySegment){
            title.innerHTML = (data[i].Title);
            pname.innerHTML = (data[i].Name);
            desc.innerHTML = (data[i].Description);
            $("#ppvid").attr('src', data[i].Video);
            $("#ppimg").attr('src', data[i].Image);
            }
        }

    });

});

