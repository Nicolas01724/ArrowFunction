const ordenarPalavra = ["Maionese caseira", "Arroz", "Batata-palha", "Filé", "Feijoada"];
ordenarPalavra.sort((a, b) => a.length - b.length);
console.log(ordenarPalavra);

const numeroPar = [5, 2, 78, 100, 17];
const resultado = numeroPar.filter((numeroPar) => numeroPar % 2 == 0);
console.log(resultado);