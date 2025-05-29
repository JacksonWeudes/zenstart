const menu = document.getElementById("side-menu")
const menuLinks = document.getElementsByClassName("menu-link")

Array.from(menuLinks).forEach(link => {
    link.addEventListener("click", () => {
        closeMenu()
    })
})

function openMenu(){
    menu.style.left = "0"
    document.body.classList.add("no-scroll")
}

function closeMenu(){
    menu.style.left = "-100%"
    document.body.classList.remove("no-scroll")
}