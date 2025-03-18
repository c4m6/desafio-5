let cantidaddegatos = 10;
let cantidaddepasos = 4;
var gatos = ["🐈", "🐈‍⬛"];

for (var numerodegato = 0; numerodegato < cantidaddegatos; numerodegato++) {
    console.log(`Gato #${numerodegato + 1}: ${gatos[numerodegato % 2]} ${"🐾".repeat(cantidaddepasos)}`);
}