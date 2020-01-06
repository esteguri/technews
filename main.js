window.addEventListener('load', () => {
    let btnMenuAbrir = document.querySelector("#menu-icono-abrir")
    btnMenuAbrir.addEventListener("click",()=>{
        mostrarMenu();
    })

    let btnMenuCerrar = document.querySelector("#menu-icono-cerrar")
    btnMenuCerrar.addEventListener("click",()=>{
        ocultarMenu();
    })
});



const ocultarMenu = ()=>{
    document.querySelector("#menu-container").style.display = "none";
    document.querySelector("body").style.overflowY = "auto"
}

const mostrarMenu = ()=>{
    document.querySelector("#menu-container").style.display = "flex";
    document.querySelector("body").style.overflowY = "hidden"
}