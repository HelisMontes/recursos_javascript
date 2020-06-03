/*============================================
OBJETOS CON LAS PROIEDADES DEL SLIDE
============================================*/

let pg = {

    imgGaleria: document.querySelectorAll("#galeria ul li img"),
    rutaImagen: null,
    cuerpoDom : document.querySelector("body"),
    lighbox: null,
    modal: null,
    animacionGaleria: "fade"


}


/*============================================
OBJETOS CON LOS METODOS DEL SLIDE
============================================*/

let mg ={

    inicioGaleria: function(){
           
        for (let i = 0; i < pg.imgGaleria.length; i++) {
             
            pg.imgGaleria[i].addEventListener("click", mg.capturaImagen)
                
        }

    },

    capturaImagen: function(img){
        
        pg.rutaImagen = img.target;

        mg.lighbox(pg.rutaImagen);

    },

    lighbox: function(imgRuta){
       
        pg.cuerpoDom.appendChild(document.createElement("DIV")).setAttribute("id", "lighbox")
        pg.lighbox = document.querySelector("#lighbox");
    
        pg.lighbox.style.width = "100%";
        pg.lighbox.style.height = "100%";
        pg.lighbox.style.position = "fixed";
        pg.lighbox.style.zIndex = "10";
        pg.lighbox.style.background = "rgba(0,0,0,0.7)";
        pg.lighbox.style.top = "0";
        pg.lighbox.style.left = "0"; 
               
        pg.lighbox.appendChild(document.createElement("DIV")).setAttribute("id", "modal");
        pg.modal = document.querySelector("#modal");

        pg.modal.innerHTML = imgRuta.outerHTML+"<div>x</div> ";

        let cerrar = pg.modal.childNodes[1];
        let imagen= pg.modal.childNodes[0];

        pg.modal.style.display = "block";
        pg.modal.style.position = "relative";
        imagen.style.width  = "100%";
        imagen.style.border  = "15px solid white";
      
        if(window.matchMedia("(max-width:1000px)").matches){

            pg.modal.style.width = "90%";

        }else{

            pg.modal.style.width = "60%";

        }

        Object.assign(pg.modal.style,{

            top: "50%",
            left: "50%",
            marginLeft: -imagen.width/2+"px",
            marginTop: -imagen.height/2+"px"
        
        });

        if(pg.animacionGaleria == "slideLeft"){

            Object.assign(pg.modal.style,{

                top: "50%",
                left: "0",
                opacity: "0"
                
            });

            setTimeout(function(){
                
                Object.assign(pg.modal.style,{

                    transition: ".5s left ease",
                    left: "50%",
                    opacity: "1",
                    marginLeft: -imagen.width/2+"px",
                    marginTop: -imagen.height/2+"px"
                    
                })

            },50);

        }

        if(pg.animacionGaleria == "slideTop"){

            Object.assign(pg.modal.style,{

                top: "-100%",
                left: "50%",
                opacity: "0"
                
            });

            setTimeout(function(){
                
                Object.assign(pg.modal.style,{

                    transition: ".5s top ease",
                    top: "50%",
                    opacity: "1",
                    marginLeft: -imagen.width/2+"px",
                    marginTop: -imagen.height/2+"px"
                    
                })

            },50);

        }

        if(pg.animacionGaleria == "fade"){

            Object.assign(pg.modal.style,{

                top: "50%",
                left: "50%",
                opacity: "0"
                
            });

            setTimeout(function(){
                
                Object.assign(pg.modal.style,{

                    transition: ".5s opacity ease",
                    top: "50%",
                    opacity: "1",
                    marginLeft: -imagen.width/2+"px",
                    marginTop: -imagen.height/2+"px"
                    
                })

            },50);

        }

        Object.assign(cerrar.style,{

            position: "absolute",
            right: "5px",
            top: "5px",
            color: "silver",
            cursor: "pointer",
            fontSize: "30px",
            width: "40px",
            height: "40px",
            textAlign: "center",
            background: "white",
            borderRadius: "0px 0px 0px  5px" 

        });
        
        cerrar.addEventListener("click", mg.salirGaleria);
        document.addEventListener("keydown",this.salirGaleria);
    },

    salirGaleria: function(e){
      
        console.log("valorde de E", e.type);
      
        if(e.type == "click"){
           
            pg.lighbox.parentNode.removeChild(pg.lighbox);

        }else{
        
            let valorCode = e.keyCode;
                        
            if(valorCode == 27 && pg.lighbox.getAttribute("id") == "lighbox"){
                
                console.log("lighbox", pg.lighbox);
                
                pg.lighbox.parentNode.removeChild(pg.lighbox);
                pg.lighbox.setAttribute("id", "")
                
            }

        }

    }

}

mg.inicioGaleria();