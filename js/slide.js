/*============================================
OBJETOS CON LAS PROIEDADES DEL SLIDE
============================================*/

let p = {

    paginacion: document.querySelectorAll("#paginacion li"),
    item: 0,
    cajaSlide: document.querySelector("#slide ul"),
    animacionSilde: "slide",
    imgSlide: document.querySelectorAll("#slide ul li"),
    avanzar: document.querySelector("#slide #avanzar"),
    retroceder: document.querySelector("#slide #retroceder"),
    velocidadSlide: 3000,
	formatearLoop: false
}


/*============================================
OBJETOS CON LOS METODOS DEL SLIDE
============================================*/

let m ={

    inicioSlide: function(){

        for (let i = 0; i < p.paginacion.length; i++) {
       
            p.paginacion[i].addEventListener("click", m.paginacionSlide);
            p.imgSlide[i].style.width = (100/p.paginacion.length) + "%";
            
        }

        p.avanzar.addEventListener("click", m.avanzar)
		p.retroceder.addEventListener("click", m.retroceder)
        m.intervalo()
        p.cajaSlide.style.width = (p.paginacion.length*100) + "%";
    },

    paginacionSlide: function(e){

        /*parentNode-> MUESTRA AL PADRE DE LA ETIQUETA*/
        p.item = e.target.parentNode.getAttribute("item")-1; 
        
        m.movimientoSlide(p.item);
        
    },

    avanzar: function() {

		if (p.item == p.imgSlide.length - 1) {

			p.item = 0;

		} else {

			p.item++;

		}
	
		m.movimientoSlide(p.item);
	},

	retroceder: function() {

		if (p.item == 0) {

			p.item = p.imgSlide.length - 1;

		} else {

			p.item--;

		}

		m.movimientoSlide(p.item);

	},

    movimientoSlide: function(e){
        p.formatearLoop = true;
        p.cajaSlide.style.left = e * -100+"%";

        for (let i = 0; i < p.paginacion.length; i++) {
       
            p.paginacion[i].style.opacity = 0.5;
            
        }

        p.paginacion[e].style.opacity = 1;

        
		if(p.animacionSilde == "slide"){

			p.cajaSlide.style.transition = ".7s left ease-in-out";

		}

		if(p.animacionSilde == "fade"){

			p.imgSlide[item].style.opacity = 0;

			p.imgSlide[item].style.transition = ".7s opacity ease-in-out";
					
			setTimeout(function(){
				
				p.imgSlide[item].style.opacity = 1;

			},500)
			
        }
        

    },

    intervalo: function() {

		setInterval(function() {

			if (p.formatearLoop) {

				p.formatearLoop = false;

			} else {

				m.avanzar();

			}

		}, p.velocidadSlide)

	}

} 

m.inicioSlide();