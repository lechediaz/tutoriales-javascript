// Segundo ejercicio

/*
    Estudiantes de una universidad de cuyo nombre no quiero acordarme, realizó un estudio 
    para determinar "cuanto pesa ir a estudiar", el estudio consistió en determinar si el 
    peso que carga un estudiante en su bolso cuando va a la escuela puede influir en su 
    desempeño, ¿y que creen?, encontraron que si un estudiante carga más de 2 kilos en su 
    bolso, este tiende a tener mal desempeño.

    Según este estudio identificar quienes de los siguientes alumnos podrían desempeñarse mal 
    en el estudio, suponiendo que los siguientes elementos pesan lo mismo en cada uno de sus 
    bolsos:

    Cuaderno: 0.2 Kilos
    Cartilla: 0.6 Kilos
    Trabajo de ciencias: 0.8 kilos
    Lapiz: 0.1 kilos
    Lonchera: 1 Kilo (Comen mucho) :v
*/
















// Datos del ejercicio
const alumnos = [
    {
        nombre: 'Oscar',
        bolso: ['Cuaderno', 'Cuaderno', 'Cuaderno', 'Cuaderno', 'Lapiz', 'Lapiz']
    },
    {
        nombre: 'María',
        bolso: ['Cuaderno', 'Cuaderno', 'Cartilla', 'Lapiz', 'Lapiz']
    },
    {
        nombre: 'Miguel',
        bolso: ['Cartilla', 'Cartilla', 'Lapiz', 'Lonchera']
    },
    {
        nombre: 'Sandra',
        bolso: ['Cuaderno', 'Lapiz', 'Lonchera']
    },
    {
        nombre: 'David',
        bolso: ['Cuaderno', 'Trabajo de ciencias', 'Lapiz']
    },
    {
        nombre: 'Tatiana',
        bolso: ['Trabajo de ciencias', 'Lapiz']
    },
    {
        nombre: 'Fernando',
        bolso: ['Lapiz', 'Lonchera', 'Lonchera']
    },
];












// Resultado esperado

/*
    ["Miguel","Fernando"]
*/




















// Solución

const malDesempeño = alumnos.reduce(
    (prev, curr) => {
        let pesoTotal = 0;

        for (const elemento of curr.bolso) {
            if (elemento === 'Cuaderno') {
                pesoTotal += 0.2;
            }
            
            if (elemento === 'Cartilla') {
                pesoTotal += 0.6;
            }
            
            if (elemento === 'Trabajo de ciencias') {
                pesoTotal += 0.8;
            }
            
            if (elemento === 'Lapiz') {
                pesoTotal += 0.1;
            }
            
            if (elemento === 'Lonchera') {
                pesoTotal += 1;
            }
        }

        if (pesoTotal > 2) {
            prev.push(curr.nombre);
        }

        return prev;
    },
    []
)

console.log(malDesempeño);