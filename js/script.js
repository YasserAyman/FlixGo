



var menu = document.querySelector('.dot');
var show = document.querySelector('.side-menu');

menu.onclick = function() {
    show.classList.toggle('active');
}




var lang = document.querySelector('.lang-top');
var langMenu = document.querySelector('.lang');

lang.onclick = function() {
    langMenu.classList.toggle('active');
}




// search part
var search = document.getElementById('search');
var searchForm = document.querySelector('.search');


search.onclick = function() {
    searchForm.classList.toggle('active-search');
}
// search part
