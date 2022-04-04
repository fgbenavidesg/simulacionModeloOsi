
function toAscii(texto) {
    let textoAscii = '';
    let arreglo = texto.split('');
    for (const item of arreglo) {
        textoAscii += item.charCodeAt(0);
        textoAscii += ' ';
    }
    textoAscii = textoAscii.trimEnd();
    return textoAscii;
}
function crearSesion(cod_ascii) {
    let objetoSesion = {
        ascii: cod_ascii,
        head: 'H'
    }
    return objetoSesion;
}
function Sesion(obj_sesion) {
    return obj_sesion.head + ' ' + obj_sesion.ascii;
}

function Transporte(obj_sesion) {
    let codigo_ascii = obj_sesion.ascii;
    let h = obj_sesion.head;

    let arreglo = codigo_ascii.split(' ');
    console.log(arreglo);
    let cadenaT = '';

    for (let i in arreglo) {
        i++;
        cadenaT += (i);
        cadenaT += ' ';
        cadenaT += h;
        cadenaT += ' ';
        cadenaT += 'data';
        cadenaT += '   ';
    }
    return cadenaT;
}


function Red(obj_sesion) {
    let codigo_ascii = obj_sesion.ascii;
    let h = obj_sesion.head;
    let arreglo = codigo_ascii.split(' ');
    let cadenaR = '';
    let cadenaRD = '';
    for (let i in arreglo) {
        cadenaR += '192.140.20.9';
        cadenaR += ' ';
        i++;
        cadenaR += (i);
        cadenaR += ' ';
        cadenaR += h;
        cadenaR += ' ';
        cadenaR += 'data';
        cadenaR += '  ';
    }
    for (let i in arreglo) {
    /*---destino---*/
        cadenaRD += '192.155.60.6';
        cadenaRD += ' ';
        i++;
        cadenaRD += (i);
        cadenaRD += ' ';
        cadenaRD += h;
        cadenaRD += ' ';
        cadenaRD += 'data';
        cadenaRD += '  ';

    }
    
    return cadenaR +' - '+cadenaRD;
}

function Enlace(obj_sesion) {
    let codigo_ascii = obj_sesion.ascii;
    let h = obj_sesion.head;

    let arreglo = codigo_ascii.split(' ');
    let cadenaE = '';
    let cadenaED = '';
    for (let i in arreglo) {

        cadenaE += '60:30:8C:F8:AE:13';
        cadenaE += ' ';
        cadenaE += '192.140.20.9';
        cadenaE += ' ';
        i++;
        cadenaE += (i);
        cadenaE += ' ';
        cadenaE += h;
        cadenaE += ' ';
        cadenaE += 'data';
        cadenaE += '  ';
    }
        // ---------
    for (let i in arreglo) {

            cadenaED += '30:1C:16:3A:50:F7';
            cadenaED += ' ';
            cadenaED += '192.155.60.6';
            cadenaED += ' ';
            i++;
            cadenaED += (i);
            cadenaED += ' ';
            cadenaED += h;
            cadenaED += ' ';
            cadenaED += 'data';
            cadenaED += '  ';
    }
    
    return cadenaE +' - '+cadenaED;
}


function Fisica(cadena) {

        let arrayCadena=cadena.split('')
        let cadenaFormateada=''
        for (let i in arrayCadena) {
           cadenaFormateada+=  arrayCadena[i].charCodeAt(0);
           i++;
        };
        return cadenaFormateada=binary_encode(cadenaFormateada);
  }
    function binary_encode( s ){
            s = unescape( encodeURIComponent( s ) );
            var chr, i = 0, l = s.length, out = '';
            for( ; i < l; i ++ ){
                chr = s.charCodeAt( i ).toString( 2 );
                while( chr.length % 8 != 0 ){ chr = '0' + chr; }
                out += chr;
            }
            return out;
    }