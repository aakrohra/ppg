function hideImages() {
    var images = []
    for (i=1;i<=16;i++) {
        gallery.remove(images);
    }
}     

function showImages() {
    var gallery = document.getElementById("gallery")
    console.log("test")
    var images = []
    for (i=1;i<=16;i++) {
        images[i] = document.createElement("img");
        images[i].setAttribute("src", `../resources/mai${i}.jpg`);
        gallery.append(images[i])
        console.log("set")
    }
}

