/*============================================
OBJETOS CON LAS PROIEDADES DEL MOUSE
============================================*/

let pf = {
    entradas: document.querySelectorAll("input.validar"),
    valor: null,  
    intervalo: null,
    campo: ""
}


/*============================================
OBJETOS CON LOS METODOS DEL MOUSE
============================================*/

let mf = {
    iniciarFormulario: function(){
        for (let i = 0; i < pf.entradas.length; i++) {
           // pf.entradas[i].addEventListener("focus",mf.enFoco)          
            pf.entradas[i].addEventListener("blur",mf.fueraFoco)
            pf.entradas[i].addEventListener("keyup", this.eventoEscribir)          
        }
    },

    enFoco: function(input){
        pf.valor = input.target.value;
        if(pf.valor == ""){
            document.querySelector("[for=" + input.target.id +"]").getElementsByClassName("obligatorio")[0].innerHTML = "Campo Obligatorio";
            document.querySelector("[for=" + input.target.id +"]").getElementsByClassName("obligatorio")[0].style.color = "rgba(250,0,0,.7)";
            document.querySelector("#"+input.target.id).style.background = "rgba(200,0,0,.5)";
           
        } 
    },

    fueraFoco: function(input){
       pf.valor = input.target.value;
       if(pf.valor == ""){
            document.querySelector("[for=" + input.target.id +"]").getElementsByClassName("obligatorio")[0] = "Campo Obligatorio";
            document.querySelector("[for=" + input.target.id +"]").getElementsByClassName("obligatorio")[0].style.color = "rgba(250,0,0,.7)";
            document.querySelector("#"+input.target.id).style.background = "rgba(200,0,0,.5)";

        }else{
            mf.eventoEscribir("", input)
        }
    },
    
    eventoEscribir: function(e, input){
        //console.log(e)
        if(e == ""){
                pf.campo= document.querySelector("#"+input.target.id).value;
                mf.validarCapos(input.target.id, pf.campo)
        }else{
                //console.log("e", e.key)
                pf.campo= document.querySelector("#"+e.target.id).value;
                mf.validarCapos(e.target.id, pf.campo)
        }
    },
    validarCapos: function (id, campo){
        switch(id){
            case "nombre":
                if(campo.length >= 4 && campo.length <= 10 ){
                    document.querySelector("[for="+id+"]").getElementsByClassName("obligatorio")[0].innerHTML = "";
                    document.querySelector("[for="+id+"]").getElementsByClassName("obligatorio")[0].style.color = "rgba(250,0,0,.7)";
                }else{
                    if(campo.length < 4){
                        document.querySelector("[for="+id+"]").getElementsByClassName("obligatorio")[0].innerHTML = "Escriba su usuario con mínimo 4 caracteres";
                        document.querySelector("[for="+id+"]").getElementsByClassName("obligatorio")[0].style.color = "rgba(250,0,0,.7)";
                        document.querySelector("#"+input.target.id).style.background = "rgba(0,200,0,.5)";
                    }
                    if(campo.length > 10){
                        document.querySelector("[for="+id+"]").getElementsByClassName("obligatorio")[0].innerHTML = "Escriba su usuario con maximo 10 caracteres";
                        document.querySelector("[for="+id+"]").getElementsByClassName("obligatorio")[0].style.color = "rgba(250,0,0,.7)";
                        document.querySelector("#"+id).style.background = "rgba(0,200,0,.5)";
                    }    
                }
        }
    }
}

mf.iniciarFormulario();