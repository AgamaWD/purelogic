function menuInit() {
    const menuOpenBtn = document.querySelector('.mobile-menu__btn-js')
    const menuPopup = document.querySelector('.mobile-menu-js')
    const menuCloseBtn = document.querySelector('.mobile-menu__close-js')

    
    if(menuOpenBtn) {
        menuOpenBtn.onclick = function(e) {
            e.stopPropagation()
            menuPopup.classList.add('_active')
            document.body.style.overflowY = "hidden"
        }
        menuCloseBtn.onclick = function(e) {
            e.stopPropagation()
            menuPopup.classList.remove('_active')
            document.body.style.overflowY = "auto"
        }
    }
}

menuInit()