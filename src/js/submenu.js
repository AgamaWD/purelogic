function submenuInit() { 
    document.addEventListener("click", e => {
        let targetSubmenu = e.target.closest(".submenu-js")

        if(targetSubmenu) {
            e.stopPropagation()
            if(e.target.closest(".submenu__header")) {
                if(targetSubmenu.classList.contains("_active")) {
                    submenuClose(targetSubmenu)
                } else {
                    closeActiveSubmenu()
                    submenuOpen(targetSubmenu)
                }
            }
        } else {
            closeActiveSubmenu()
        }
        
    })
}

function closeActiveSubmenu() {
    let activeSubmenus = document.querySelectorAll(".submenu-js");
    if(activeSubmenus) {
        activeSubmenus.forEach(item => {
            submenuClose(item)
        })
    }
}

function submenuOpen(submenu) {
    submenu.classList.add("_active")
}

function submenuClose(submenu) {
    submenu.classList.remove("_active")
}

submenuInit()