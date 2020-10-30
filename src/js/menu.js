let menuItem = document.querySelectorAll('.menu-item-has-children');

for( let i = 0; i < menuItem.length; i++ ) {
    menuItem[i].onclick = function(event){
        event.preventDefault();
        console.log('Выбран ' + i);
        menuItem[i].classList.toggle('active');
    }
}


