var settingsBox = document.getElementById("settingsBox");

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
}

function closeSettings() {
    settingsBox.style.display = "none";
}