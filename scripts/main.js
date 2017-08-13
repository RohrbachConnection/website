var rcStatic = "html/rcStatic.html";
var rcHome = "html/rcHome.html";
var rcBiography = "html/rcBiography.html";
var rcContact = "html/rcContact.html";
var rcMusic = "html/rcMusic.html";
var rcShows = "html/rcShows.html";
var rcPhotos = "html/rcPhotos.html";

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