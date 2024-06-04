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