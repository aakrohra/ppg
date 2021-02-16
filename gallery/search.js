function galleryfillter() {
    var gallery = document.getElementById("gallery")
    var input = document.getElementById('filtersearch');
    var filter = input.value.toUpperCase();

    gallery.innerHTML = ''

    $.getJSON('../projects/data.json', function (data) {
        info = data
        for (var i=0; i < info.length; i++) {
            txtValue = info[i].Name;
            if (txtValue.toUpperCase().indexOf(filter) > -1){
                var column = document.createElement("div")
                column.setAttribute("class","column")
                var a = document.createElement("a")
                a.setAttribute("href","../projects/template.html?q=" + i)
                column.append(a)
                var img = document.createElement("img")
                img.setAttribute("draggable","false")
                img.setAttribute("src",info[i].Image)
                a.append(img)
                var name = document.createElement("div")
                name.setAttribute("class","name")
                column.append(name)
                var p = document.createElement("p")
                p.innerHTML = info[i].Title
                name.append(p)
                var text = document.createElement("H3")
                text.innerHTML = info[i].Name
                column.append(text)
                gallery.append(column)
            }
        }
    })
}
