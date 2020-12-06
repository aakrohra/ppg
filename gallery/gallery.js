function showImages() {
    if (maibutton.value == "OFF") {
        maibutton.value = "ON";
        var gallery = document.getElementById("gallery")
        console.log("test")
        var images = []
        for (i=1;i<=123;i++) {
            images[i] = document.createElement("img");
            images[i].setAttribute("src", `../resources/mai${i}.jpg`);
            gallery.append(images[i])
            console.log("set")
        }
    } 
    else {
        maibutton.value = "OFF";
        var gallery = document.getElementById("gallery")
        gallery.remove();
        gallery = document.createElement("div")
        gallery.setAttribute("id", "gallery")
        var place = document.getElementById("place")
        document.body.insertBefore(gallery,place.nextSibling);
    }
}


