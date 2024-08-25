function openLateralMenu() {
    let lateralMenu = document.querySelector('nav#lateralMenu')
    if (lateralMenu.style.display = 'none') {
        lateralMenu.style.display = 'block'
    }
}

function closeLateralMenu() {
    let lateralMenu = document.querySelector('nav#lateralMenu')
    if (lateralMenu.style.display = 'block')
    lateralMenu.style.display = 'none'
}

function checkWidth() {
    if (window,innerWidth >= 768) {
        lateralMenu.style.display = 'none'
    }
}
