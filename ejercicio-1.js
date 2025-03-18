let cantidaddegatos = 10;
let emojis = ["😺", "😸", "😹"];
for (let numerodegato = 1; numerodegato <= cantidaddegatos; numerodegato++) {
    let emoji = emojis[(numerodegato - 1) % emojis.length];
    console.log(`Gato #${numerodegato}: ${emoji}`);
}