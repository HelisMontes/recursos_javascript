/*============================================
OBJETOS CON LAS PROIEDADES DEL SLIDE
============================================*/

let p = {

    paginacion: document.querySelectorAll("#paginacion li"),
    item: 0,
    cajaSlide: document.querySelector("#slide ul")
}


/*============================================
OBJETOS CON LOS METODOS DEL SLIDE
============================================*/

let m ={

    inicioSlide: function(){

        for (let i = 0; i < p.paginacion.length; i++) {
       
            p.paginacion[i].addEventListener("click", m.paginacionSlide);
            
        }


    },

    paginacionSlide: function(e){

        /*parentNode-> MUESTRA AL PADRE DE LA EIQUETA*/
        p.item = e.target.parentNode.getAttribute("item")-1; 
        
        m.movimientoSlide(p.item);
        
    },

    movimientoSlide: function(e){

        p.cajaSlide.style.left = e * -100+"%";

        for (let i = 0; i < p.paginacion.length; i++) {
       
            p.paginacion[i].style.opacity = 0.5;
            
        }

        p.paginacion[e].style.opacity = 1;

        p.cajaSlide.style.transition = ".7s left ease-in-out"


    }

} 

m.inicioSlide();