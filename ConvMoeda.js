//Adicionar aqui o valor em quantidade
var valoremDolar = 64;
//alterar aqui o valor da cotação do dolar atualmente
var cotacaoDoDolar = 5.32;
//Função traz valor em real
var valoremReal = valoremDolar * cotacaoDoDolar;
valoremReal = valoremReal.toFixed(2);
alert("R$ " + valoremReal);