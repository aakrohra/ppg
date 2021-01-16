var mais = []
var imageX = []
var imageY = []
var counter = 0
var imagenum = 100
var maiheight = 20000

// function showImages() {
//     if (maibutton.value == "OFF") {
//         maibutton.value = "ON";
//         maibutton.innerHTML = "Hide Mai Sakurajima";
var maigallery = document.getElementById("maigallery")
console.log("test")
var images = []
imageX = []
imageY = []
counter = 0

function addImages() {

    var maigallery = document.getElementById("maigallery")
    for (i = counter * imagenum; i < (counter + 1) * imagenum; i++) {
        if (i == 2407) {
            console.log(i)
            console.log("max reacher")
            break;
        }
        console.log(i)

        var div = document.createElement("div");
        maigallery.append(div)
        div.setAttribute("class", "maiwrap")

        var a = document.createElement("a");
        a.setAttribute("href",`../resources/mai${i}.jpg`)
        div.append(a)
        images[i] = document.createElement("img");
        a.append(images[i])
        images[i].setAttribute("src", `../resources/mai${i}.jpg`);
        images[i].setAttribute("id", "mai" + i)
        images[i].classList.add("maiimg","grow")
        


        var text = document.createElement("p");
        text.setAttribute("class", "maitext")
        text.setAttribute("id", "maitext" + i)
        div.append(text)
        text.innerHTML = "Mai Sakurajima Best Girl"

        

    }
    counter++
    maigallery.style.height = 340 * (counter * imagenum) / Math.floor(width / 320) + "px"

    //shyguy read!

    //add hover function to maitext class
    $('.maitext').hover(function () {
        //selects parent and changes it's filter by 80 percent on hover
        $(this).parent().css('filter', 'brightness(80%)');
    },
        function () {
            //when release hover, change filter back to 100 percent.
            $(this).parent().css('filter', 'brightness(100%)');
        });
}

var height = $(document).height();
var width = $(document).width();
console.log(height, width)

var height, width;
$(window).resize(function () {
    height = $(document).height();
    width = $(document).width();
    setup();
});
function setup() {
    var maigallery = document.getElementById("maigallery")

    maigallery.style.height = 340 * (counter * imagenum) / Math.floor(width / 320) + "px"

}

$(window).scroll(function () {
    if ($(window).scrollTop() + $(window).height() == $(document).height()) {
        console.log("add images")
        addImages()
    }
});