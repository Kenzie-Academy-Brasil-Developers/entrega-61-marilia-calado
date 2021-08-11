//Retornar os números de 1 a 20.

function oneThroughTwenty() {
  
  const contagemDeUmAVinte = [];

  for (let i = 1; i <= 20; i++) {
    contagemDeUmAVinte.push(i);
    
} 
  console.log(contagemDeUmAVinte)
  return contagemDeUmAVinte;
}

oneThroughTwenty();

//Retornar os números pares de 1 a 20.

function evensToTwenty() {
  
  const paresAteVinte = [];
  
  for (let i=1; i <= 10; i++) {
    paresAteVinte.push(i*2)
  }
  console.log(paresAteVinte)
  return paresAteVinte;
}  

evensToTwenty();

//Retornar os números ímpares de 1 a 20.

function oddsToTwenty() {
    
  const imparesAteVinte = [];
  
  for (let i=1; i <= 10; i++) {
    imparesAteVinte.push(i*2-1)
  }
  console.log(imparesAteVinte)
  return imparesAteVinte;
   
}

oddsToTwenty();

//Retornar os múltiplos de 5 até 100. 

function multiplesOfFive() {
  const multiplosDeCincoAteCem = [];
  
  for (let i=1; i <= 20; i++) {
    multiplosDeCincoAteCem.push(i*5)
  }
  console.log(multiplosDeCincoAteCem)
  return multiplosDeCincoAteCem;
}

multiplesOfFive();

//Retornar todos os números até 100 que forem quadrados perfeitos

function squareNumbers() {
    
  const quadradosPerfeitosAteCem = [];
  
  for (let i=1; i <= 10; i++) {
    quadradosPerfeitosAteCem.push(i*i)
  }
  console.log(quadradosPerfeitosAteCem)
  return quadradosPerfeitosAteCem;
}
squareNumbers();

// Retornar todos os números contando de trás para frente de 20 até 1.

function countingBackwards() {
    
  const contagemRegressiva = [];
  
  for (let i=20; i >= 1; i--) {
    contagemRegressiva.push(i)
  }
  console.log(contagemRegressiva)
  return contagemRegressiva;
}
countingBackwards();

//Retornar os números pares de 20 até 1.

function evenNumbersBackwards() {
    
  const contagemRegressivaDosPares = [];
  
  for (let i=10; i >= 1; i--) {
    contagemRegressivaDosPares.push(i*2)
  }
  console.log(contagemRegressivaDosPares)
  return contagemRegressivaDosPares;
}
evenNumbersBackwards();

//Retornar os números ímpares de 20 até 1.

function oddNumbersBackwards() {
  
  const contagemRegressivaDosImpares = [];
  
  for (let i=10; i >= 1; i--) {
    contagemRegressivaDosImpares.push(i*2-1)
  }
  console.log(contagemRegressivaDosImpares)
  return contagemRegressivaDosImpares;
}
oddNumbersBackwards();

//Retornar os múltiplos de 5 contando de trás para frente a partir de 100.
function multiplesOfFiveBackwards() {
    
 const regressivaDosMultiplosDeCinco = [];
  
  for (let i=20; i >= 1; i--) {
    regressivaDosMultiplosDeCinco.push(i*5)
  }
  console.log(regressivaDosMultiplosDeCinco)
  return regressivaDosMultiplosDeCinco;
}
multiplesOfFiveBackwards();

//Retornar os quadrados perfeitos contando de trás para frente a partir de 100.

function squareNumbersBackwards() {
    
  const regressivaDosQuadradosPerfeitos = [];
  
  for (let i=10; i >= 1; i--) {
    regressivaDosQuadradosPerfeitos.push(i*i)
  }
  console.log(regressivaDosQuadradosPerfeitos)
  return regressivaDosQuadradosPerfeitos;
}
squareNumbersBackwards();