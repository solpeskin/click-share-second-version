const paginasIndex = ["", "src/paginas/footer/", "./src/"]
const paginasSrc = ["../../../index.html", "./", "../../"];

function footer (link){
    let footer = document.querySelector ("header");
    footer.innerHTML = 
            `<nav class="menu-mobile"> 
            <svg class="bi bi-list list-mobile" xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg> 
            <div class="menu-paginas"> 
                <a href="${link[0]}#inicio" class="clickshare" >Click&Share</a>
                <ul class="items-menu ">  
                    <li class="botonHeader  "><a href="${link[0]}#nosotros" >Nosotros</a></li>
                    <li class="botonHeader s-lg-3  "><a class= "black" href="${link[0]}#ustedes">Ustedes</a></li>
                    <li class="help">
                        <a href="${link[1]}centro-de-ayuda.html">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-question-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
                              </svg>
                        </a>
                    </li>
                </ul>
            </div> 
            <div class="espacio"></div>
            <div class="botones">
                <button class="botonHeader iniciar-sesion "><a href="${link[2]}paginas/iniciar-sesion.html">Iniciar sesión</a></button>   
                <button class="botonHeader registrarse"><a href="${link[2]}paginas/registrar.html">Registrarse</a></button>
            </div>                       
        </nav> 
            `
}

function pickLink (){
    currentPag==="index"&&footer(paginasIndex);
    currentPag==="footer"&&footer(paginasSrc);
}

pickLink();


