var rcStatic = "html/rcStatic.html";
var rcHome = "html/rcHome.html";
var rcBiography = "html/rcBiography.html";
var rcContact = "html/rcContact.html";
var rcMusic = "html/rcMusic.html";
var rcShows = "html/rcShows.html";
var rcPhotos = "html/rcPhotos.html";

var showsXML = "xml/shows.xml";

var currentTab = "";

//Get snippet of html for dynamic content
function getDynamic(name) {
    name = name + " #wrapper";
    $("#dynamic").load(name);
}

function getDynamicSync(name, func) {
    name = name + " #wrapper";
    $("#dynamic").load(name, func);
}

function clearDynamic() {
    $("#dynamic").empty();
}

//Get snippet of html for static content
function loadStatic() {
    $("#static").load(rcStatic + " #wrapper");
}

//Load home screen
function loadHome() {
    clearDynamic();
    getDynamicSync(rcHome, loadHomeHelper);
}

function loadHomeHelper() {
    setSelectedTab("homeTab");
}

//Load biography
function loadBio() {
    clearDynamic();
    getDynamicSync(rcBiography, loadBioHelper);
}

function loadBioHelper() {
    setSelectedTab("bioTab");
}

//Load contact page
function loadContact() {
    clearDynamic();
    getDynamicSync(rcContact, loadContactHelper);
}

function loadContactHelper() {
    setSelectedTab("contactTab");
}

//Load music page
function loadMusic() {
    clearDynamic();
    getDynamicSync(rcMusic, loadMusicHelper);
}

function loadMusicHelper() {
    setSelectedTab("musicTab");
}

//Load shows page
function loadShows() {
    clearDynamic();
    getDynamicSync(rcShows, loadShowsHelper);
}

function loadShowsHelper() {
    setSelectedTab("showsTab");
    loadShowsXML();
}

//Load shows xml
function loadShowsXML() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            readShowsXML(this);
        }
    };
    xhttp.open("GET", showsXML, true);
    xhttp.send();
}

function readShowsXML(xml) {
    shows = xml.responseXML.getElementsByTagName("show");
    var row = $("<tr></tr>");
    var column = $("<td></td>");
    var tag;
    for (var i = 0; i < shows.length; i++) {
        var date = new Date(selectTag(shows[i], "date").innerHTML);
        column.append(date.toLocaleDateString());
        row.append(column);

        column = $("<td></td>");
        tag = selectTag(shows[i], "venue");
        addVenueToRow(row, column, tag);

        column = $("<td></td>");
        column.append(selectTag(shows[i], "city").innerHTML + ", " +
            selectTag(shows[i], "country").innerHTML);
        row.append(column);

        $("#showsTable").append(row);

        row = $("<tr></tr>");
        column = $("<td></td>");
    }
}

//Selects the first tag with the passed name from the passed tag
function selectTag(tag, name) {
    return tag.getElementsByTagName(name)[0];
}

//Checks if the link is non-empty and adds it to the column
function addVenueToRow(row, column, tag) {
    var link = $(tag).attr("link");
    if (typeof link != "undefined" && link != "") {
        a = $("<a></a>").attr("href", link);
        a.append(tag.innerHTML);
        column.append(a);        
    }
    else {
        column.append(tag.innerHTML);
    }
    row.append(column);
}

//Load photos page
function loadPhotos() {
    clearDynamic();
    getDynamicSync(rcPhotos, loadPhotosHelper);
}

function loadPhotosHelper() {
    setSelectedTab("photosTab");
}

//Execute after clicking the 'Enter Website' button
function loadSite() {
    $(document.body).removeClass("welcome");
    loadStatic();
    loadHome();
}

//Sets the selected tab - tab should be the id of the tab to be selected.
function setSelectedTab(tab) {
    currentTab = tab;
    $("#" + tab).siblings().removeClass("selected");
    $("#" + tab).addClass("selected");
}