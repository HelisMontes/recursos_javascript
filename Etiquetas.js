appendChild()           /*ETIQUETA ES UN MÉTODO QUE SE USA PARA CREAR NUEVOS ELEMENTOS EN EL DOM*/
createElement()         /*ETIQUETA ES OTRO MÉTODO Y DENTRO VA LA ETIQUETA HTML QUE SE VA A CREAR*/
setAttribute            /*ETIQUETA ES PARA AGREGAR UN ATRIBUTO A UNA ETIQUETA HTML EN EL DOM, PRIMERO SE DEBE PONER EL ATRINUTO Y LUEGO EL VALOR*/

                        /*appendChild(document.createElement("DIV")).setAttribute("id", "lighbox")*/


outerHTML               /*ETIQUETA  ES PARA TREAR EL CONTENIDO HTML Y NO EL OBJETO*/
innerHTML               /* Etiqueta para obtener, agregar o remplazar contenido HTML*/

                        /*pg.modal.innerHTML = imgRuta.outerHTML+"<div>x</div> ";*/

childNodes              /*ETIQUETA MUESTRA LOS HIJOS DE LA EIQUETA*/
                    
                        /*  <div id="lighbox"></div>
                            let cerrar = pg.modal.childNodes[1];
                            let imagen= pg.modal.childNodes[0];
                        */

parentNode              /*  MUESTRA AL PADRE DE LA EIQUETA  */
removeChild             /*  ETIQUETA RUMUEVE LA ETIQUETA DEL HIJO   */
                        
                        /*  <div id="lighbox"></div>        */
                        /*  pg.lighbox.parentNode.removeChild(pg.lighbox);    */   



target.getAttribute()   /*  ES UNA FUNCIÓN PARA SELECCIONAR CUALQUIER ATRIBUTO QUE TENGA LA ETIQUETA INDICADA EN EL PARÁMETRO ("X")*/

                        /*  tecla.target.getAttribute("class"); */

eval(p.operaciones.innerHTML)   /*  eval () es una funcion predeterminada de javascript para resolver funciones matematicas de una variable */


appendChild             /*  Agrega un nuevo nodo al final de la lista de un elemento hijo de un elemento padre especificado.*/

                        /*  ul.appendChild(li) */


// pg.lighbox.style = "width: 100%; height: 100%; position: fixed; zIndex: 10; background: rgba(0,0,0,0.7); top: 0; left: 0;"