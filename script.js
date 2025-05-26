const openBtn = document.getElementById("open")
const closeBtn = document.getElementById("close")
const menu = document.getElementById("side-menu")

openBtn.addEventListener("click", () => {
    menu.style.left = "0"
    document.body.classList.add("no-scroll")
})

closeBtn.addEventListener("click", () => {
    menu.style.left = "-100%"
    document.body.classList.remove("no-scroll")
})
