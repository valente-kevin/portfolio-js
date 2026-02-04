const nav = document.querySelector(".header_nav")
const menu = document.getElementById("menu")

menu.addEventListener("click", (e)=>{
    e.stopPropagation()
    nav.classList.toggle("activador")
})

document.addEventListener("click", (e)=> {
    if (!menu.contains(e.target) && !nav.contains(e.target)) {
        nav.classList.remove("activador")
    }
})
document.addEventListener("keyup", (e)=> {
    if (e.key === "Escape") {
        nav.classList.remove("activador")
    }
});

console.info("presiona el teclado Escape para cerrar el menu")