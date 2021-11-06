//////**Iteración #1: Buscar el máximo**

///Completa la función que tomando dos números como argumento devuelva el más alto.

function sum(numberOne , numberTwo) {

    return Math.max(numberOne,numberTwo);
  
    }
  
  console.log (sum (1,20));

  /////////////////////
  function sum(numberOne , numberTwo) {

    if (numberOne > numberTwo){
    
    console.log(numberOne + " es mayor que " + numberTwo);
    
    return(numberOne)
    
    }else if(numberOne === numberTwo) {
    
    console.log(numberOne + " es igual que " + numberTwo)
    
    }else{
    
    console.log(numberTwo + " es mayor que " + numberOne);
    
    return(numberTwo);
    
    }
    
    }
    
    sum (11,10);


    /////////////////////////
    //Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.

//Puedes usar este array para probar tu función:

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function maslargo(arr){
  let nombreLargo='';
  for (let i = 0; i < arr.length; i++) {
      let nombre=arr[i];
      if(nombre.length>nombreLargo.length){
      nombreLargo=nombre;
      }
  }
  return nombreLargo;
}
let heroeLargo =  maslargo (avengers);
console.log(heroeLargo);

//////////////////
///5
/////
const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
let strings = 0;
let numeros = 0;



function averageWord(param) {
for (i = 0; i <mixedElements.length; i++){
if (typeof mixedElements[i] === "number"){
numeros += mixedElements[i];
} else {
strings += mixedElements[i].length;
}
}
console.log(numeros);
console.log(strings);
}
averageWord(mixedElements)

//////