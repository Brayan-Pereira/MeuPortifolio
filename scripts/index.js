let largura;


function ativarMenu() {
    if (itensMenu.style.display == 'block') {
        itensMenu.style.display = 'none'
    }
    else {
        itensMenu.style.display = 'block'
    }

}

window.addEventListener("resize", handleResize);
function handleResize() {
    largura = window.innerWidth

    if(largura > '800' &&  itensMenu.style.display == 'block'){
        location.reload()
    }

}



