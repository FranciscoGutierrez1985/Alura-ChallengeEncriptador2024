function isNumeric(num){
   return typeof(num)  == 'number';
 }

function esLetra(palabra){
   for (let i=0; i<palabra.length; i++){
      if (palabra.codePointAt(i)>=97 && palabra.codePointAt(i)<=122 ){
         return true;
      }else{
         return false;
      }
   }
}

function esVocal(palabra){
   for(let i=0; i<palabra.length;i++){
      switch(palabra.charAt(i)){
         case 'a':
         case 'e':
         case 'i':
         case 'o':
         case 'u':
           return true;
         default:
            return false;
      }
   }
}

function encriptar(palabra) {
   let resultado="";
  for (let i = 0; i < palabra.length; i++) {
      if(palabra.charAt(i)==" "){
          resultado+=" "
       }
      if( (isNumeric(palabra.charAt(i))) == false && (esLetra(palabra.charAt(i))) == true && (esVocal(palabra.charAt(i))==false)){
         resultado+=palabra.charAt(i);
      
      } else {
         switch (palabra.charAt(i)) {
            case'a':
              resultado += "ai";
              break;
            case'e':
              resultado += "enter";
              break;
            case'i':
              resultado += "imes";
              break;
            case'o':
              resultado += "ober";
              break;
            case'u':
              resultado += "ufat";
              break;
        }
      }
   }
   return resultado; 
}

function desencriptar(palabra) {
 let resultado="";
   for (let i = 0; i < palabra.length; i++) {
      if ( (esVocal(palabra.charAt(i)) == false && (isNumeric(palabra.charAt(i)) == false))) {
         resultado+=palabra.charAt(i);
      } else {
         switch (palabra.charAt(i)) {
            case'a':
               resultado+='a';
               i+=1;
               break;
            case'e':
               resultado+='e';
               i+=4;
               break;   
            case'i':
               resultado+='i';
               i+=3;
               break;
            case'o':
               resultado+='o';
               i+=3;
               break;
            case'u':
               resultado+='u';
               i+=3;
               break;
         }
      }
   }
   return resultado;
}

let valorEncriptado='';
function encripta_mensaje(){
   let valorAEncriptar = document.getElementById('area_de_texto').value;
   valorEncriptado = encriptar(valorAEncriptar);
   document.getElementById('resultado').style.display  = 'inline';
   document.getElementById('resultado').innerHTML = valorEncriptado;
   document.getElementById('panel__muestra__texto').innerHTML = '';
   document.getElementById('area_de_texto').value ='';
   document.getElementById('panel_muestra').style.display = 'none';
}

function desencripta_mensaje() {
   let valorAEncriptar = document.getElementById('area_de_texto').value;
   valorEncriptado = desencriptar(valorAEncriptar);
   document.getElementById('resultado').style.display  = 'inline';
   document.getElementById('resultado').innerHTML = valorEncriptado;
   document.getElementById('panel__muestra__texto').innerHTML = '';
   document.getElementById('area_de_texto').value ='';
   document.getElementById('panel_muestra').style.display = 'none';
}

function copiar_texto() {
   let copiado = document.getElementById('resultado').innerHTML;
   document.getElementById('area_de_texto').value = copiado;
}
