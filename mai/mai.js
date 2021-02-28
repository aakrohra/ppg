var mais = []
var imageX = []
var imageY = []
var counter = 0
var imagenum = 100
var maiheight = 20000

var song = new Audio('../resources/Song.mp3');
song.volume = 0.5
var songplayed = false
function play() {
    if (songplayed) {
        song.pause()
        
        songplayed = false
    }
    else {
        
        song.play()

        
        songplayed = true
    }
    
    
}


var modalImg = document.getElementById("img01");
var modal = document.getElementById("myModal")

var maigallery = document.getElementById("maigallery")
console.log("test")
var images = []
imageX = []
imageY = []
counter = 0
var array = Array.from(Array(2407).keys())


var modalId = 0
console.log(array)
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array
}
array = shuffleArray(array)
console.log(array)
function addImages() {
    
    var maigallery = document.getElementById("maigallery")
    
    for (i = counter * imagenum; i < (counter + 1) * imagenum; i++) {
        if (i == 2407) {
            console.log(i)
            console.log("max reached")
            break;
        }
        console.log(i)

        var div = document.createElement("div");
        maigallery.append(div)
        div.setAttribute("class", "maiwrap")

        var a = document.createElement("a");
        div.append(a)
        images[i] = document.createElement("img");
        a.append(images[i])
        images[i].setAttribute("src", `../resources/mai${array[i]}.jpg`);
        images[i].setAttribute("id", "mai" + array[i])
        images[i].classList.add("maiimg","grow")
        images[i].onclick = function(){
            modal.style.display = "block";
            modalImg.src = this.src;
            console.log(this.id.slice(3))
            console.log(array)
            modalId = array.indexOf(parseInt(this.id.slice(3)))
            console.log(modalId)
        }


        var text = document.createElement("p");
        text.setAttribute("class", "maitext")
        text.setAttribute("id", "maitext" + array[i])
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
    $('#mai-gallery').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })
    console.log("yo")
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

var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
var left = document.getElementById("left-move")
left.onclick = function() {
    if (modalId == 0) {
        return;
    }
    modalImg.src = `../resources/mai${array[modalId-1]}.jpg`
    
    modalId--
    console.log(modalId)
}

var right = document.getElementById("right-move")
right.onclick = function() {
    if (modalId == array.length) {
        return;
    }
    
    modalImg.src = `../resources/mai${array[modalId+1]}.jpg`
    modalId++
    console.log(modalId)
}