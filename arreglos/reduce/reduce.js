// Primer ejercicio

/*
    Se realizó una encuesta a varias personas preguntando su color favorito,
    indicar a cuantás personas le gusta cada color
*/

const encuestaColorFavorito = [
    {
        nombre: 'Oscar',
        colorFavorito: 'rojo'
    },
    {
        nombre: 'Juan',
        colorFavorito: 'verde'
    },
    {
        nombre: 'Jessica',
        colorFavorito: 'rosado'
    },
    {
        nombre: 'Julian',
        colorFavorito: 'verde'
    },
    {
        nombre: 'Luna',
        colorFavorito: 'rosado'
    },
    {
        nombre: 'Ana',
        colorFavorito: 'negro'
    },
];





// Lo que esperamos

/*
{
    rojo: 1,
    verde: 2,
    rosado: 2,
    negro: 1
}
*/









// Solución

const totalColores = encuestaColorFavorito.reduce((prev, curr) => {
    console.log('Elemento actual');
    console.log(JSON.stringify(curr));

    console.log('Valor de prev');
    console.log(JSON.stringify(prev));


    prev[curr['colorFavorito']] = (prev[curr['colorFavorito']] || 0) + 1;

    console.log('prev modificado');
    console.log(JSON.stringify(prev));

    console.log('----------------------')
    return prev;
}, {});

console.log({
    totalColores
});




