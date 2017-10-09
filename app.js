//<script>
alert("Ejercicio 1 - Cifrado César");
// declaro variables e inicializo
var parameter=33;  // parametro fijo
var sentence='';   // frase
var option=0;      // opcion
var validate1=false; // captura resultado de función validación de frase
var validate2=false; // captura resultado de función validación de opción

// solicita frase y llama a la función para validar frase
validate1=validaSentence(sentence= prompt('Ingrese Frase: '));

// solicita opción y llama a la función para validar opción
validate2=validaOption(option= parseInt(prompt('Ingrese Opción: ')));

// se condiciona que las validaciones esten true (frase y opcion)
if ( validate1===true & validate2===true){
   console.log('Frase y Opción correctamente ingresados');
   if ( option===1){
      console.log('Frase Cifrada: ', cipherSentence(sentence, parameter));
   }
   if ( option===2){
      console.log('Frase Descifrada: ', decipherSentence(sentence, parameter));
   }

} else {
        console.log('frase y/ó opción ingresada incorrecta');
}
// función que valida frase ingresada, devuelve verdadero/ false
function validaSentence(sentenceV){

  if (sentenceV.length !== '' ){
      console.log('Frase Correcta');
      var a=0;

      for (var i=0 ; i< sentenceV.length ; i++){
          var temp=sentenceV.substr(i,1);
          a=parseInt(temp);

          if ( temp === ' ' || typeof a === 'number' ){
              return false ;
          }else{
              return true ;
          }
      }
  }else{
        return false;
  }
}
// función que valida opción ingresada, devuelve verdadero/ false
function validaOption(optionV){
   if (optionV !== 0){ // opción no puede ser vacío
      // sólo puede tener el valor de 1 ó 2 y de tipo número
      if ((optionV===1 || optionV ===2) & typeof optionV ==='number'){
         return true;
      }else {
         return false;
      }
   }else {
       return false;
   }
}
// función Cifrado
function cipherSentence(sentenceV,parameter){
  // declaro e inicializo variables
  var asci=0;  // captura codigo asci de caracter segun posicion i
  var temp1=0; // capturará codigo ascil de caracter cifrado
  var stringCipher=''; // acumulará los caracteres cifrados

  // recorrer la frase traves de cada caracter utilizo for
  for (var i=0; i< sentenceV.length ; i++){
      asci= sentenceV.charCodeAt(i); //asigna valor asci de caracter posicion i

      if ( asci >= 65 & asci <=90){   // para  mayusculas
          temp1=(sentenceV.charCodeAt(i) - 65 + parameter )%26 +65;
      }else{ (asci >= 97 & asci <=122) // para minisculas
          temp1=(sentenceV.charCodeAt(i) - 97 + parameter )%26 +97;
      }
      stringCipher+=(String.fromCharCode(temp1)); //acumula caracteres
  }
  return stringCipher ;
}
