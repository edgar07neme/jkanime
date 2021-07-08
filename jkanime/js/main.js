// SCROLL UP

document.getElementById("arriba").addEventListener("click", scrollup);
//coge toda la pagina y busca el id arriba para que haga un evento al hacer click y ejecute la siguiente funcion

function scrollup() {
  let currentScroll = document.documentElement.scrollTop;
  //esta variable guarda lo que es el scrool de todo el documento hacia arriba 

  if (currentScroll > 0) {

    window.requestAnimationFrame(scrollup);
    //quiero que el documento haga una animacion a la funcion

    window.scrollTo (0, 0);
    //ponga la pagina en el eje x 0 y el eje y 0 osea al principio de la pagina 
  }
  //si el scroll es mayor que 0 haga lo siguiente
}