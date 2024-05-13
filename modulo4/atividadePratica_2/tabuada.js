function fazerTabuada(numeroUsuario) {
    console.log(`Tabuada de ${numeroUsuario}:`);
    for (let i = 1; i <= 10; i++) {
        const resultado = numeroUsuario * i;
        console.log(`${numeroUsuario} x ${i} = ${resultado}`);
    }
}

module.exports = { fazerTabuada };