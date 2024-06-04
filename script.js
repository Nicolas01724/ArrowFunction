/*
    -----EXPLICAÇÃO-----

    A principal diferença entre a arrow function para a function normal é que não precisamos usar a palavra function, invez disso usamos
const ou seja definimos elas como variáveis constantes e usamos a função como seu valor.
    Usamos o símbolo => ou seja uma seta, para definir o que a função irá fazer e o seu objetivo, é assim que surgiu o nome arrow(seta) function,
ao invez de usar a palavra return para retornar o valor da função, outra diferença é que se a função possui apenas um parâmetro não precisamos
utilizar parênteses para declara-lo, caso não tenha nenhum paramentro usamos () vazio, caso tenha mais, será necessário usar () com os parâmetros
dentro dos parênteses.
    Em geral a arrow function é igual a uma função normal, o que muda é sua sintaxe que torna o código mais curto e limpo.
*/

//ExercÍcio 01
const dobrar = (a, b) => a*2 + "," + b*2;

// Exercício 02
const ordenarPalavra = ["Maionese caseira", "Arroz", "Batata-palha", "Filé", "Feijoada"];
ordenarPalavra.sort((a, b) => a.length - b.length); // Usando .sort para ordenar do menor para o maior.
console.log(ordenarPalavra);

// Exercício 03
const numeroPar = [5, 2, 78, 100, 17];
const resultado = numeroPar.filter((numeroPar) => numeroPar % 2 == 0); // O filter serve para "filtrarmos" somente o que queremos que seja mostrado.
console.log(resultado);

