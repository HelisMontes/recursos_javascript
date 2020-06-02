/*============================================
OBJETOS CON LAS PROIEDADES DEL SLIDE
============================================*/

let pg = {

    imgGaleria: document.querySelectorAll("#galeria ul li img"),
    rutaImagen: null,
    cuerpoDom : document.querySelector("body"),
    lighbox: null,
    modal: null

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
        /*Etiqueta outerHTMl es para trear el contenido HTML y no el objeto*/
        /*Etiqueta childNodes MUESTRA LOS HIJOS DE LA EIQUETA*/
        
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
        
        pg.lighbox.appendChild(document.createElement("DIV")).setAttribute("id", "modal");
        pg.modal = document.querySelector("#modal");

        pg.modal.innerHTML = imgRuta.outerHTML+"<div>X</div> ";

        let imagen = pg.modal.childNodes[0];
        let cerrar = pg.modal.childNodes[1];
        let margin_left = 0;
        let margin_top = 0;

        margin_left = imagen.width;
        margin_top = imagen.height;

        console.log("marginLeft", margin_left);
        console.log("marginTop", margin_top);

        Object.assign(pg.modal.style,{
     
            display: "block", 
            position: "relative",
            width: "60%",
            top:  "50%",
            left: "50%",
            marginLeft: -margin_left/2+"px",
            marginTop:  -margin_top/2+"px",
           
        });
        
        Object.assign(imagen.style,{

            width: "100%",
            border: "15px solid white"

        })

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
                

    }

}

mg.inicioGaleria();