/*============================================
OBJETOS CON LAS PROIEDADES DEL FORMULARIO
============================================*/

let pf = {
    entradas: document.querySelectorAll("input.validar"),
    valor: null,  
    intervalo: null,
    campo: "",
    enviar: document.querySelector("#enviar") 
}


/*============================================
OBJETOS CON LOS METODOS DEL FORMULARIO
============================================*/

let mf = {
    iniciarFormulario: function(){
        for (let i = 0; i < pf.entradas.length; i++) {
            pf.entradas[i].addEventListener("focus",mf.enFoco)          
            pf.entradas[i].addEventListener("blur",mf.fueraFoco)
            pf.entradas[i].addEventListener("keyup", this.eventoEscribir)    
        }
        enviar.addEventListener("click", mf.validarFormulario);     
    },

    enFoco: function(input){
        pf.valor = input.target.value;
        if(pf.valor == ""){
            mf.estilo("error", input.target.id, "Campo Obligatorio")
        }else{
            mf.eventoEscribir("", input)
        }
    },

    fueraFoco: function(input){
       pf.valor = input.target.value;
       if(pf.valor == ""){
            mf.estilo("error", input.target.id, "Campo Obligatorio")
        }else{
             mf.validarCapos(input.target.id, pf.valor)
        }
    },
    
    eventoEscribir: function(e, input){
        if(e == ""){
                pf.campo= document.querySelector("#"+input.target.id).value;
                mf.validarCapos(input.target.id, pf.campo)
        }else{
                pf.campo= document.querySelector("#"+e.target.id).value;
                mf.validarCapos(e.target.id, pf.campo)
        }
    },
    validarCapos: function (id, campo){
        let arrayerroes = []
        switch(id){
            case "nombre":
                if(campo.length >= 4 && campo.length <= 10 ){
                    mf.estilo("", id, "")
                }else{
                    if(campo.length < 4){
                        mf.estilo("error", id, "<br>Escriba su usuario con mínimo 4 caracteres")
                        arrayerroes.push(id+" Escriba su usuario con mínimo 4 caracteres")
                    }
                    if(campo.length > 10){
                        mf.estilo("error", id, "<br>Escriba su usuario con maximo 10 caracteres")
                        arrayerroes.push(id+" Escriba su usuario con maximo 10 caracteres")
                    }
                }
            break;
            case "password":
                let errors = [];
                let minusculas = /[a-z]/
                let mayuscula = /[A-Z]/
                let numeros = /[0-9]/
                if(!(campo.length >= 4 && campo.length <= 10 )){
                    console.log("", campo.length)
                    if(campo.length < 4){
                        errors.push("Escriba su usuario con mínimo 4 caracteres");
                        arrayerroes.push(id+" Escriba su usuario con mínimo 4 caracteres");
                    }
                    if(campo.length > 10){
                        errors.push("Escriba su usuario con maximo 10 caracteres");
                        arrayerroes.push(id+" Escriba su usuario con maximo 10 caracteres");
                    }    
                }
                if (!minusculas.test(campo)) {
                    errors.push('Faltan las minusculas');
                    arrayerroes.push(id+' Faltan las minusculas');
                }
                if (!mayuscula.test(campo)) {
                    errors.push('Faltan las mayusculas');
                    arrayerroes.push(id+' Faltan las mayusculas');
                }
                if (!numeros.test(campo)) {
                    errors.push('Faltan los numeros');
                    arrayerroes.push(id+' Faltan los numeros');
                }
                let errors_text = '';
                if (errors.length) {
                    for (let i = 0; i < errors.length; i++) {
                        let e = errors[i];
                        errors_text += `<br> * ${e}`
                    }
                    mf.estilo("error", id, errors_text);
                }
                else{
                    mf.estilo("", id, "");
                }
            break;
            case "email":
                let validarEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
                if(validarEmail.test(campo)){
                    mf.estilo("", id, "");
                }else{
                    mf.estilo("error", id, "<br>Ingrese una dirección de correo electrónico valida")
                    arrayerroes.push(id+" Ingrese una dirección de correo electrónico valida");
                }
            break
        }
        return arrayerroes
    },
    estilo: function(e, id, mensaje){
        if(e == "error"){
            document.querySelector("[for="+id+"]").getElementsByClassName("obligatorio")[0].innerHTML = mensaje;
            document.querySelector("[for="+id+"]").getElementsByClassName("obligatorio")[0].style.color = "rgba(250,0,0,.7)";
            document.querySelector("#"+id).style.background = "rgba(200,0,0,.5)";
        }else{
            document.querySelector("[for="+id+"]").getElementsByClassName("obligatorio")[0].innerHTML = mensaje;
            document.querySelector("#"+id).style.background = "rgba(0,200,0,.5)";
        }
    },
    validarFormulario: function(){
        let enviar = true;
        let terminos = document.querySelector("#terminos").checked

        if (!terminos) {
            alert("Acepta los terminos y condiciones")
        }
        pf.entradas.forEach(function callback(e,i){
            (mf.validarCapos(e.id, e.value).length) ? (enviar=false) : null;
        });
        if(enviar == true && terminos== true){
            alert("Datos del formulario enviados")
        }else{
            alert("Hay errores en los Campos")
        }
    }
}

mf.iniciarFormulario();