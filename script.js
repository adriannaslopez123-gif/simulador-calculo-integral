function mostrarMenu(){

    const menu = document.getElementById("menu");

    menu.classList.remove("oculto");

    window.scrollTo({

        top:menu.offsetTop,

        behavior:"smooth"

    });

}
