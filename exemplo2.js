var peso = 78;
var altura = 1.69;

var imc = peso/ (altura*altura);

//var imc = peso/ math.pow(altura,2)
//ao quadrado, pode ser escrito como math.pow (altura, expoente)


console.log ("O resultado do seu IMC foi de " + imc.toFixed(2));
console.log (`O resultado do seu IMC foi de ${imc}`);

//var.toFixed(2) deixa apenas 2 casas decimais 