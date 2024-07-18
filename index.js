const registroDeLlaves = {
  a: 'ai',
  e: 'enter',
  i: 'imes',
  o: 'ober',
  u: 'ufat'
};


let contenedorTextoEncriptado = document.querySelector('.contenedor__resultado__texto')
contenedorTextoEncriptado.style.display = 'none';

let botonCopiar = document.querySelector('.contenedor__resultado__boton__copiar')
botonCopiar.style.display = 'none';



function encriptar() {
  let texto = document.getElementById('texto').value;
  let textoEncriptado = [];
  let textoArray = texto.split(' ');
  let contenedorTextoNoEncontrado = document.getElementById('contenedor__resultado__texto__no__encontrado');
  if (!texto) {
    contenedorTextoNoEncontrado.style.display = 'block';
    botonCopiar.style.display = 'none';
    contenedorTextoEncriptado.style.display = 'none';

  } else {
    contenedorTextoEncriptado.style.display = 'block';
    botonCopiar.style.display = 'flex';
    contenedorTextoNoEncontrado.style.display = 'none';

  }
  if (textoArray.length > 1) {
    for (let i = 0; i < textoArray.length; i++) {
      textoEncriptado.push(encriptarPalabra(textoArray[i]));
    }
  } else {
    textoEncriptado.push(encriptarPalabra(textoArray[0]));
  }
  let textoEncriptar = document.getElementById('resultadoTexto')
  textoEncriptar.textContent = textoEncriptado.toString().replace(/,/g, ' ');
}

function encriptarPalabra(palabra) {
  let palabraEncriptada = '';
  for (let i = 0; i < palabra.length; i++) {
    if (registroDeLlaves.hasOwnProperty(palabra[i])) {
      palabraEncriptada = palabraEncriptada.concat(registroDeLlaves[palabra[i]]);
    } else {
      palabraEncriptada = palabraEncriptada.concat(palabra[i]);
    }
  }
  return palabraEncriptada;
}

function desencriptar() {
  let texto = document.getElementById('texto').value;
  let textoDesencriptado = [];
  let textoArray = texto.split(' ');
  let contenedorTextoNoEncontrado = document.getElementById('contenedor__resultado__texto__no__encontrado');
  if (!texto) {
    contenedorTextoNoEncontrado.style.display = 'block';
    botonCopiar.style.display = 'none';
    contenedorTextoEncriptado.style.display = 'none';

  } else {
    contenedorTextoEncriptado.style.display = 'block';
    botonCopiar.style.display = 'flex';
    contenedorTextoNoEncontrado.style.display = 'none';

  }
  if (textoArray.length > 1) {
    for (let i = 0; i < textoArray.length; i++) {
      textoDesencriptado.push(desencriptarPalabra(textoArray[i]));
    }
  } else {
      textoDesencriptado.push(desencriptarPalabra(textoArray[0]));
  }
  let resultado = document.getElementById('resultadoTexto')
  resultado.textContent = textoDesencriptado.toString().replace(/,/g, ' ');
}

function desencriptarPalabra(palabraEncriptada) {
  let palabraDesencriptada = "";
  let i = 0;
  while (i < palabraEncriptada.length) {
    let encontrado = false;
    for (let llave in registroDeLlaves) {
      const valor = registroDeLlaves[llave];
      if (palabraEncriptada.startsWith(valor, i)) {
        palabraDesencriptada += llave;
        i += valor.length;
        encontrado = true;
        break;
      }
    }
    if (!encontrado) {
      palabraDesencriptada += palabraEncriptada[i];
      i++;
    }
  }
  return palabraDesencriptada;
}

function copiarTexto() {
  var elemento = document.getElementById('resultadoTexto');
  var rango = document.createRange();
  rango.selectNodeContents(elemento);
  var seleccion = window.getSelection();
  seleccion.removeAllRanges();
  seleccion.addRange(rango);
  navigator.clipboard.writeText(elemento.textContent);
}