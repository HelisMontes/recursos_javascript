/*============================================
OBJETOS CON LAS PROIEDADES DEL SLIDE
============================================*/

let pg = {

    imgGaleria: document.querySelectorAll("#galeria ul li img"),
    rutaImagen: null,
    cuerpoDom : document.querySelector("body"),
    lighbox: null,

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

        /*Etiqueta appendChild() es un metodo que se usa para crear nuevos elementos en el DOM*/
        /*Etiqueta createElement() es otro metodo y dentro va la etiqueta HTML que se va a crear*/
        /*Etiqueta setAttribute es para agregar un atributo a una etiqueta HTML en el DOM, primero se debe poner el atrinuto y luego el valor*/
        pg.cuerpoDom.appendChild(document.createElement("DIV")).setAttribute("id", "lighbox")
        pg.lighbox = document.querySelector("#lighbox");
    
        pg.lighbox.style.width = "100%";
        pg.lighbox.style.height = "100%";
        pg.lighbox.style.position = "fixed";
        pg.lighbox.style.zIndex = "10";
        pg.lighbox.style.background = "rgba(0,0,0,0.7)";
        pg.lighbox.style.top = "0";
        pg.lighbox.style.left = "0"; 

       // pg.lighbox.style = "width: 100%; height: 100%; position: fixed; zIndex: 10; background: rgba(0,0,0,0.7); top: 0; left: 0;"
    }

}

mg.inicioGaleria();