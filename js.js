var settingsBox = document.getElementById("settingsBox");
var screenOverlay = document.getElementById("screenOverlay");
var colorPicker = document.getElementById("bgColorPicker");

function wallSet() {
    if (localStorage.getItem('bgType') == "bgColor") {
        document.body.style.backgroundImage = "unset";
        document.body.style.backgroundColor = localStorage.getItem('bgSelColor');
        document.getElementById('bgColor').checked = true;
    } else if (localStorage.getItem('bgType') == "bgUnsplash") {
        document.body.style.backgroundImage = "url('https://source.unsplash.com/random/?wallpaper')";
        document.body.style.backgroundColor = "transparent";
        document.getElementById('bgUnsplash').checked = true;
    }
}

function openTab(evt, tabName) {
    var i;
    var x = document.getElementsByClassName("settView");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tab");
    for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" selTab", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " selTab";
}

function openSettings() {
    settingsBox.style.display = "flex";
    screenOverlay.style.display = "block";
}

function closeSettings() {
    settingsBox.style.display = "none";
    screenOverlay.style.display = "none";
}

function bgType(radio){
    localStorage.setItem("bgType", radio);
    wallSet();
}


colorPicker.addEventListener("change", watchColorPicker, false);
function watchColorPicker(event) {
    localStorage.setItem('bgSelColor', event.target.value);
    document.body.style.backgroundColor = localStorage.getItem('bgSelColor');
}