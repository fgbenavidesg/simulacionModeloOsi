//inicio del tramo


// presentacion

function toAscii(cadena){
    let cadenaAscii='';
    let arreglo = cadena.split('');
    for (const item of arreglo) {
        cadenaAscii+=item.charCodeAt(0);
        cadenaAscii+=' ';
    }
    cadenaAscii=cadenaAscii.trimEnd();
    return cadenaAscii;
}

//sesion
function crearSesion(codigo_ascii){
    let objetoSesion = {
        ascii: codigo_ascii,
        head: 'S1'
    }
    return objetoSesion;
}
function getSesion(objeto_sesion){
    return objeto_sesion.head+' '+objeto_sesion.ascii;
}

//transporte

function getTransporte(objeto_sesion){
    let codigo_ascii=objeto_sesion.ascii;
    let h = objeto_sesion.head;

    let arreglo_ascii = codigo_ascii.split(' ');
    let cadenaT='';
    for (let index in arreglo_ascii) {    
        index++;
        cadenaT+= (index);
        cadenaT+=' ';
        cadenaT+=h;
        cadenaT+=' ';
        index--;
        cadenaT+=arreglo_ascii[index];
        cadenaT+=' ~ ';
    }
    var n=cadenaT.lastIndexOf(' ~ ');   //encuentra la posición del " - "
    cadenaT=cadenaT.substring(n,-1);    //elimina el caracter en esa posición
    return cadenaT;
}

//Red


function getRed(objeto_sesion){
    let codigo_ascii=objeto_sesion.ascii;
    let h = objeto_sesion.head;

    //
    let arreglo_ascii = codigo_ascii.split(' ');
    let cadenaR='';
    for (let index in arreglo_ascii) {    
        cadenaR+=ip_origen;
        cadenaR+=' ';
        cadenaR+=ip_destino;
        cadenaR+=' ';        
        index++;
        cadenaR+= (index);
        cadenaR+=' ';
        cadenaR+=h;
        cadenaR+=' ';
        index--;
        cadenaR+=arreglo_ascii[index];
        cadenaR+=' ~ ';
    }
    var n=cadenaR.lastIndexOf(' ~ ');
    cadenaR=cadenaR.substring(n,-1);
    return cadenaR;
}
//enlace de datos



function getEnlace(objeto_sesion){
    let codigo_ascii=objeto_sesion.ascii;
    let h = objeto_sesion.head;

    let arreglo_ascii = codigo_ascii.split(' ');
    let cadenaE='';
    for (let index in arreglo_ascii) {    
        cadenaE+='I';
		cadenaE+=' ';
		cadenaE+=mac_origen;
		cadenaE+=' ';
		cadenaE+=mac_destino;
		cadenaE+=' ';

		let longitud=88;
		longitud+=arreglo_ascii[index].length*8;

		cadenaE+=longitud;
		cadenaE+=' ';
		cadenaE+=ip_origen;
		cadenaE+=' ';
		cadenaE+=ip_destino;
		cadenaE+=' ';
		index++;
		cadenaE+= (index);
		cadenaE+=' ';
		cadenaE+=h;
		cadenaE+=' ';
		index--;
		cadenaE+=arreglo_ascii[index];
		cadenaE+=' ';
		cadenaE+='FCS';
		cadenaE+=' ~ ';
    }
    var n=cadenaE.lastIndexOf(' ~ ');
    cadenaE=cadenaE.substring(n,-1);
    return cadenaE;
}


//fisica



function text_Binario(texto){
    texto = unescape( texto );
    var chr, i = 0, longitud = texto.length, valorBinario = '';
    for( ; i < longitud; i ++ ){
        chr = texto.charCodeAt( i ).toString( 2 );
        while( chr.length % 8 != 0 ){
             chr = '0' + chr; 
            }
        valorBinario += chr;
    }
    return valorBinario;
}

function getFisica(objeto_sesion){
    let codigo_ascii=objeto_sesion.ascii;
    let h = objeto_sesion.head;

    //
    let arreglo_ascii = codigo_ascii.split(' ');
    let cadenaF='';
    for (let index in arreglo_ascii) {    
        cadenaF+='I';
		cadenaF+=mac_origen;
		cadenaF+=mac_destino;
		cadenaF+='num';
		cadenaF+=ip_origen;
		cadenaF+=ip_destino;
		index++;
		cadenaF+= (index);
		cadenaF+=h;
		index--;
		cadenaF+=arreglo_ascii[index];
		cadenaF+='FCS';
		cadenaF+='F';
    }
    cadenaF=text_Binario(cadenaF);
    return cadenaF;
}
