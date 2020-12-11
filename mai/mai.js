var mais = []
var imageX = []
var imageY = []
var counter = 0
var imagenum = 20
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
for (i=0;i<imagenum;i++) {
    
    var div = document.createElement("div");
    maigallery.append(div)
    div.setAttribute("class","maiwrap")
    
    


    images[i] = document.createElement("img");
    div.append(images[i])
    images[i].setAttribute("src", `../resources/mai${i}.jpg`);
    images[i].setAttribute("id","mai" + i)
    images[i].setAttribute("class","maiimg")

    var text = document.createElement("p");
    text.setAttribute("class","maitext")
    text.setAttribute("id","maitext" + i)
    div.append(text)
    text.innerHTML = "Mai Sakurajima Best Girl"
            
            // images[i].onload = function() {
            //     console.log(counter)
            //     var image = document.getElementById("mai"+counter)
            //     var text = document.getElementById("gallerytext"+counter)
            //     var rect = image.getBoundingClientRect();
            //     console.log(rect)
            //     var imagewidth = rect.width
            //     var imageheight = rect.height
                
            //     // while(true) {
            //         var top = Math.floor(Math.random()*galleryheight)
            //         var left = Math.floor(Math.random()*width) - 100
            //         var check = true
            //         console.log("i = " + imageX.length)
            //         console.log(imagewidth,imageheight)
                    
            //         // for (j=0;j<imageX.length;j++) {
                        
            //         //     if ((top-imageY[j]<imageheight + 50 && top-imageY[j] > -imageheight - 50) && (left-imageX[j]<imagewidth + 50 && left-imageX[j]>-imagewidth-50  )) {
            //         //         console.log("recheck")
            //         //         check = false
            //         //         break;
            //         //     }
            //         // }
            //     //     if (check) {
            //     //         break;
            //     //     }
            //     // }
            //     text.style.top = top + imageheight + 20 + "px"
            //     text.style.left = left + "px"
                
                
            //     imageX.push(top)
            //     imageY.push(left)
                
            //     image.style.top = top + "px"
            //     image.style.left = left + "px"
                
            //     console.log("set")
            //     console.log(image.style.left, image.style.top)
            //     counter++;
            // }
            
            
//         }
//     } 
//     else {
//         maibutton.value = "OFF";
//         maibutton.innerHTML = "Show Mai Sakurajima";
//         var gallery = document.getElementById("gallery")
//         gallery.remove();
//         gallery = document.createElement("div")
//         gallery.setAttribute("id", "gallery")
//         gallery.style.width = width
//         gallery.style.height = 100000
//         var place = document.getElementById("place")
//         document.body.insertBefore(gallery,place.nextSibling);
//     }
// }
}
var height = $(document).height();
var width = $(document).width();
console.log(height,width)
// document.addEventListener("mousemove", (m) => {
    
//     console.log('move')
//     var bodyRect = document.body.getBoundingClientRect()
//     for (i=1;i<=486;i++) {
//         var mai = document.getElementById("mai" + i)
        
//         mai.style.transform = `translate(${m.offsetX/2}px,${m.offsetY/2}px)`
//     }

// })
var height,width;
$(window).resize(function() {
    height = $(document).height();
    width = $(document).width();
    setup();
});
function setup() {
    var maigallery = document.getElementById("maigallery")
    
    maigallery.style.height = 340*imagenum/Math.floor(width/320) + "px"
    console.log(maigallery.style.height)
}