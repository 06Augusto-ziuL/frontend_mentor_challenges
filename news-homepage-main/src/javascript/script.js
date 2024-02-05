let sidebar = document.querySelector('#navegacao')
function menuAppear() {
    sidebar.style.width = '90%'
    sidebar.style.boxShadow = '0px 0px 100vw 10vw var(--Very-dark-blue)'
}

function closeMenu() {
    sidebar.style.width = '0px'
    sidebar.style.boxShadow = 'none'
}