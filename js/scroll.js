/*============================================
OBJETOS CON LAS PROIEDADES DEL SCROLL
============================================*/

let ps= {
    posicionScroll: 0,
    cajaScroll: document.querySelector("#scroll"),
    articulos: document.querySelectorAll("#scroll article"),
    cabezote : document.querySelector("header"),
    botonera: document.querySelectorAll("nav ul li a"),
    ruta: null,
    intervalo: null,
    destinoScroll: 0,
    padding: 0
}


/*============================================
OBJETOS CON LOS METODOS DEL SCROLL
============================================*/

let ms= {
    inicioScroll: function() {
        document.addEventListener("scroll", ms.efectoParallax);
        for (let i = 0; i < ps.botonera.length; i++) {
            ps.botonera[i].addEventListener("click", ms.desplazamiento);
        }
    },
    efectoParallax: function() {
        ps.posicionScroll = window.pageYOffset;
        if (ps.posicionScroll > 100) {
            ps.cabezote.style.position = "fixed";
            ps.cabezote.style.zIndex = 10;
            ps.padding = 80;
        }else{
            ps.cabezote.style.position = "relative";
            ps.cabezote.style.zIndex = 0;
            ps.padding = 185;
        }
        if (ps.posicionScroll > ps.cajaScroll.offsetTop - 100 ) {
            for (let i = 0; i < ps.articulos.length; i++) {
                ps.articulos[i].style.marginLeft = "0%";           
            }
        }else{
            for (let i = 0; i < ps.articulos.length; i++) {
                ps.articulos[i].style.marginLeft = ps.posicionScroll/26  -93 + "%";           
            }
        }
    },
    desplazamiento: function(ruta) {
        ruta.preventDefault();
        ps.ruta = ruta.target.getAttribute("href");
        ps.destinoScroll = document.querySelector(ps.ruta).offsetTop-ps.padding;
        ps.intervalo = setInterval(function(){
            if (ps.posicionScroll < ps.destinoScroll) {
                ps.posicionScroll += 100;
                if (ps.posicionScroll >= ps.destinoScroll) {
                    ps.posicionScroll = ps.destinoScroll;
                    clearInterval(ps.intervalo);
                }
            }else{
                ps.posicionScroll -= 100;
                if (ps.posicionScroll <= ps.destinoScroll) {
                    ps.posicionScroll = ps.destinoScroll;
                    clearInterval(ps.intervalo);
                }
            }
            window.scrollTo(0, ps.posicionScroll)
        },50)
    }
}
ms.inicioScroll();
