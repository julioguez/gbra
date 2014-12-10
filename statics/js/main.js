var $buttonShowMenu = document.getElementById('showMenu');
var $buttonHideMenu = document.getElementById('hideMenu');

var $menu = document.getElementById('menu');

var showMenu = function(){
    $buttonShowMenu.classList.remove('isActive');
    $buttonHideMenu.classList.add('isActive');
    $menu.classList.add('isActive');
}

var hideMenu = function(){
    $buttonShowMenu.classList.add('isActive');
    $buttonHideMenu.classList.remove('isActive');
    $menu.classList.remove('isActive');
}

$buttonShowMenu.addEventListener("click", showMenu);
$buttonHideMenu.addEventListener("click", hideMenu);
