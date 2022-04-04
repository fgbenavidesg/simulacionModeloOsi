//variables
const formulario = document.querySelector('#formulario');
const emisor = document.querySelector('#emisor');
const receptor = document.querySelector('#receptor');
const capas = document.querySelector('#capas');


const btnAplicacion = document.querySelector('#btnAplicacion');
const btnPresentacion = document.querySelector('#btnPresentacion');
const btnSesion = document.querySelector('#btnSesion');
const btnTransporte = document.querySelector('#btnTransporte');
const btnRed = document.querySelector('#btnRed');
const btnEnlace = document.querySelector('#btnEnlace');
const btnFisico = document.querySelector('#btnFisico');
let mensaje='';

//variables externas
let ascii;
let objSesion;


const EventListeners = () => {
    //cuando el usuario agrega un nuevo tweet

    formulario.addEventListener('submit', agregarTweets);
    //mostrar capas primera etapa    

    //----------------------------------------------------------- inicio de trama
    btnAplicacion.addEventListener('click', () => {
        const text = document.createElement('textarea');
        text.classList.add('transparente');
        text.innerHTML = `${mensaje}`;
        capas.appendChild(text);
    });

    btnPresentacion.addEventListener('click', () => {
        limpiarProceso();
        const text = document.createElement('textarea');
        text.classList.add('transparente');
        text.innerHTML = toAscii(mensaje);
        capas.appendChild(text);
        ascii = text.value;
    });
    btnSesion.addEventListener('click', () => {
        limpiarProceso();
        const text = document.createElement('textarea');
        text.classList.add('transparente');
        objSesion = crearSesion(ascii);
        text.innerHTML = Sesion(objSesion);
        capas.appendChild(text);
    });
    btnTransporte.addEventListener('click', () => {
        limpiarProceso();
        const text = document.createElement('textarea');
        text.classList.add('transparente');
        text.innerHTML = Transporte(objSesion);
        capas.appendChild(text);

    });
    btnRed.addEventListener('click', () => {
        limpiarProceso();
        const text = document.createElement('textarea');
        text.classList.add('transparente');
        text.innerHTML = Red(objSesion);
        capas.appendChild(text);
    });

    btnEnlace.addEventListener('click', () => {
        limpiarProceso();
        const text = document.createElement('textarea');
        text.classList.add('transparente');
        text.innerHTML = Enlace(objSesion);
        capas.appendChild(text);
    });
    btnFisico.addEventListener('click', () => {
        limpiarProceso();
        const text = document.createElement('textarea');
        text.classList.add('transparente');
        text.innerHTML = Fisica(mensaje);
        capas.appendChild(text);
    });
    //-------------------------------------------------------inicio de trama 2

    btnAplicacion2.addEventListener('click', () => {
        limpiarProceso();
        const text = document.createElement('textarea');
        text.classList.add('transparente');
        text.innerHTML = `${mensaje}`;
        capas.appendChild(text);
    });

    btnPresentacion2.addEventListener('click', () => {
        limpiarProceso();
        const text = document.createElement('textarea');
        text.classList.add('transparente');
        text.innerHTML = toAscii(mensaje);
        capas.appendChild(text);
        ascii = text.value;
    });
    btnSesion2.addEventListener('click', () => {
        limpiarProceso();
        const text = document.createElement('textarea');
        text.classList.add('transparente');
        objSesion = crearSesion(ascii);
        text.innerHTML = Sesion(objSesion);
        capas.appendChild(text);
    });
    btnTransporte2.addEventListener('click', () => {
        limpiarProceso();
        const text = document.createElement('textarea');
        text.classList.add('transparente');
        text.innerHTML = Transporte(objSesion);
        capas.appendChild(text);

    });
    btnRed2.addEventListener('click', () => {
        limpiarProceso();
        const text = document.createElement('textarea');
        text.classList.add('transparente');
        text.innerHTML = Red(objSesion);
        capas.appendChild(text);
    });

    btnEnlace2.addEventListener('click', () => {
        limpiarProceso();
        const text = document.createElement('textarea');
        text.classList.add('transparente');
        text.innerHTML = Enlace(objSesion);
        capas.appendChild(text);
    });
    btnFisico2.addEventListener('click', () => {
        limpiarProceso();
        const text = document.createElement('textarea');
        text.classList.add('transparente');
        text.innerHTML = Fisica(mensaje);
        capas.appendChild(text);
    });

}


//funciones

const agregarTweets = (e) => {

    e.preventDefault();

    const tweet = document.querySelector('#tweet').value;

    if (tweet === '') {

        mostrarError('no puede ir vacio');
        return; //evita que se ejecute mas lineas de codigo
    }

    mensaje = tweet;

    crearHtmlEmisor();
    crearHtmlReceptor();
    formulario.reset();
    mostrarOnda();

}
const eliminarOnda = () => {
    const onda = document.querySelector('#onda');
    const img = document.querySelector('.img-onda')
    onda.removeChild(img);
}
const mostrarOnda = () => {
    const onda = document.querySelector('#onda');
    onda.innerHTML = `<img class="img-onda" src="onda.gif">`;
}

const mostrarError = (msj) => {

    const msjError = document.createElement('p');
    msjError.textContent = msj;
    msjError.classList.add('error');
    //insertarlo en el contenido
    const contenido = document.querySelector('#contenido1');
    contenido.appendChild(msjError);
    //elimina la funcion
    setTimeout(() => {
        msjError.remove();
    }, 3000);

}
//muestra un listado de los twees

const crearHtmlEmisor = () => {
        //crear html
        const p = document.createElement('p');
        //añadir el texto
        p.textContent = `${mensaje}`;
        emisor.appendChild(p);

}
const crearHtmlReceptor = () => {
    //crear html
    const p = document.createElement('p');
    //añadir el texto
    p.textContent = `${mensaje}`;
    receptor.appendChild(p);
}

//limpiar proceso
const limpiarProceso = () => {
    while (capas.firstChild) {
        capas.removeChild(capas.firstChild);
    }
}

EventListeners();

