//variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
const capas = document.querySelector('#capas');


const btnAplicacion = document.querySelector('#btnAplicacion');
const btnPresentacion = document.querySelector('#btnPresentacion');
const btnSesion = document.querySelector('#btnSesion');
const btnTransporte = document.querySelector('#btnTransporte');
const btnRed = document.querySelector('#btnRed');
const btnEnlace = document.querySelector('#btnEnlace');
const btnFisico = document.querySelector('#btnFisico');
let tweets = [];
//evemnt listeners

//variables externas
let ascii;
let objSesion;
const ip_origen = '190.234.174.231';
const ip_destino = '192.168.1.135';

const mac_origen = '60:30:8C:F8:KE:13';
const mac_destino = '30:1C:16:3A:50:E7';

const EventListeners = () => {
    //cuando el usuario agrega un nuevo tweet

    formulario.addEventListener('submit', agregarTweets);
    //mostrar capas primera etapa    

    //----------------------------------------------------------- inicio de trama
    btnAplicacion.addEventListener('click', () => {
        const text = document.createElement('textarea');
        text.classList.add('transparente');
        text.innerHTML = `${tweets[0].tweet}`;
        capas.appendChild(text);
    });

    btnPresentacion.addEventListener('click', () => {
        limpiarProceso();
        const text = document.createElement('textarea');
        text.classList.add('transparente');
        text.innerHTML = toAscii(tweets[0].tweet);
        capas.appendChild(text);
        ascii = text.value;
    });
    btnSesion.addEventListener('click', () => {
        limpiarProceso();
        const text = document.createElement('textarea');
        text.classList.add('transparente');
        objSesion = crearSesion(ascii);
        text.innerHTML = getSesion(objSesion);
        capas.appendChild(text);
    });
    btnTransporte.addEventListener('click', () => {
        limpiarProceso();
        const text = document.createElement('textarea');
        text.classList.add('transparente');
        text.innerHTML = getTransporte(objSesion);
        capas.appendChild(text);

    });
    btnRed.addEventListener('click', () => {
        limpiarProceso();
        const text = document.createElement('textarea');
        text.classList.add('transparente');
        text.innerHTML = getRed(objSesion);
        capas.appendChild(text);
    });

    btnEnlace.addEventListener('click', () => {
        limpiarProceso();
        const text = document.createElement('textarea');
        text.classList.add('transparente');
        text.innerHTML = getEnlace(objSesion);
        capas.appendChild(text);
    });
    btnFisico.addEventListener('click', () => {
        limpiarProceso();
        const text = document.createElement('textarea');
        text.classList.add('transparente');
        text.innerHTML = getFisica(objSesion);
        capas.appendChild(text);
    });
    //-------------------------------------------------------inicio de trama 2

    btnAplicacion2.addEventListener('click', () => {
        limpiarProceso();
        const text = document.createElement('textarea');
        text.classList.add('transparente');
        text.innerHTML = `${tweets[0].tweet}`;
        capas.appendChild(text);
    });

    btnPresentacion2.addEventListener('click', () => {
        limpiarProceso();
        const text = document.createElement('textarea');
        text.classList.add('transparente');
        text.innerHTML = toAscii(tweets[0].tweet);
        capas.appendChild(text);
        ascii = text.value;
    });
    btnSesion2.addEventListener('click', () => {
        limpiarProceso();
        const text = document.createElement('textarea');
        text.classList.add('transparente');
        objSesion = crearSesion(ascii);
        text.innerHTML = getSesion(objSesion);
        capas.appendChild(text);
    });
    btnTransporte2.addEventListener('click', () => {
        limpiarProceso();
        const text = document.createElement('textarea');
        text.classList.add('transparente');
        text.innerHTML = getTransporte(objSesion);
        capas.appendChild(text);

    });
    btnRed2.addEventListener('click', () => {
        limpiarProceso();
        const text = document.createElement('textarea');
        text.classList.add('transparente');
        text.innerHTML = getRed(objSesion);
        capas.appendChild(text);
    });

    btnEnlace2.addEventListener('click', () => {
        limpiarProceso();
        const text = document.createElement('textarea');
        text.classList.add('transparente');
        text.innerHTML = getEnlace(objSesion);
        capas.appendChild(text);
    });
    btnFisico2.addEventListener('click', () => {
        limpiarProceso();
        const text = document.createElement('textarea');
        text.classList.add('transparente');
        text.innerHTML = getFisica(objSesion);
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
    //añadir al arreglo de tweet

    tweetObj = {
        id: Date.now(),
        //tweet: tweet se coloca uno solo cuando tienen l mismo nombre
        tweet

    }

    tweets = [...tweets, tweetObj];

    crearHtml();
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
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(msjError);
    //elimina la funcion
    setTimeout(() => {
        msjError.remove();
    }, 3000);

}
//muestra un listado de los twees

const crearHtml = () => {

    limpiarHtml();
    if (tweets.length > 0) {
        tweets.forEach(tweet => {

            //agrega un boton de eliminar

            const btnEliminar = document.createElement('a')
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.innerHTML = `<img src='/eliminar.ico'>`;
            //añadir la funcion eliminar
            btnEliminar.onclick = () => {
                borrarTweet(tweet.id);
                eliminarOnda();
                limpiarProceso();
                crearHtml();
            }

            //crear html
            const li = document.createElement('li');
            li.classList.add('mensaje');
            //añadir el texto
            li.textContent = `
            anonymous ~ ${tweet.tweet}           
            `;
            //añadirle el boton
            li.appendChild(btnEliminar);

            listaTweets.appendChild(li);
        });
    }

}

//limpiar proceso
const limpiarProceso = () => {
    while (capas.firstChild) {
        capas.removeChild(capas.firstChild);
    }
}
//limpiar html
const limpiarHtml = () => {

    while (listaTweets.firstChild) {
        listaTweets.removeChild(listaTweets.firstChild);
    }

}

//elimina un tweet
const borrarTweet = (id) => {

    tweets = tweets.filter(tweet => tweet.id !== id);
}


EventListeners();

