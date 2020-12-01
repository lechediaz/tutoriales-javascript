// Tercer ejercicio

/*
    Dado el siguiente arreglo de objetos:
        1. Permitir que el usuario pueda seleccionar algún campo que exista en la estructura de los objetos del conjunto de datos.
        2. Agrupar la información de acuerdo al campo seleccionado por el usuario.
        3. Mostrar la información en una tabla, separando en una fila el grupo al que pertenece cada región de datos.
*/

// Datos del ejercicio
const organizacion = [
    { nombre: 'Oscar', edad: 25, cargo: 'Arquitecto de Software', },
    { nombre: 'María', edad: 29, cargo: 'Analista', proyecto: 'PROJ_1', },
    { nombre: 'Miguel', edad: 28, cargo: 'Analista', en_vacaciones: true, proyecto: 'PROJ_3', },
    { nombre: 'Sandra', edad: 32, cargo: 'Contador' },
    { nombre: 'David', edad: 29, cargo: 'Desarrollador', proyecto: 'PROJ_1', },
    { nombre: 'Tatiana', edad: 32, cargo: 'Desarrollador', proyecto: 'PROJ_2', },
    { nombre: 'Fernando', edad: 30, cargo: 'Publicidad' },
    { nombre: 'Ana', edad: 33, cargo: 'Desarrollador', proyecto: 'PROJ_1', },
    { nombre: 'Juan', edad: 27, cargo: 'Desarrollador', proyecto: 'PROJ_2', en_vacaciones: true, },
    { nombre: 'Pedro', edad: 27, cargo: 'Analista', proyecto: 'PROJ_2', },
    { nombre: 'Carlos', edad: 27, cargo: 'CEO' },
    { nombre: 'Marcos', edad: 33, cargo: 'Desarrollador', incapacitados: true, proyecto: 'PROJ_2', },
    { nombre: 'Helen', edad: 32, cargo: 'Publicidad', incapacitados: true, },
];

// Punto 1
const campos = organizacion.reduce((prev, curr) => {
    const campoEstructura = Object.keys(curr);
    campoEstructura.forEach(val => {
        if (!prev.includes(val)) {
            prev.push(val);
        }
    });

    return prev;
}, []);

const selCampos = document.getElementById('selCampos');

campos.forEach(campo => {
    const opcion = document.createElement('option');
    opcion.value = campo;
    opcion.text = campo;
    selCampos.appendChild(opcion);
});

// Punto 2

let infoAgrupada = {};

selCampos.addEventListener('change', (event) => {
    // Agruar la información
    const campoSeleccionado = event.target.value;

    infoAgrupada = organizacion.reduce((prev, curr) => {
        const grupo = curr[campoSeleccionado] || 'Sin clasificar';

        if (!prev[grupo]) {
            prev[grupo] = [];
        }

        prev[grupo].push(curr);

        return prev;
    }, {});

    // Limpiamos etiquetas hijas del encabezado y cuerpo de la tabla

    const tblAgrupada = document.getElementById('tblAgrupada');
    const thead = tblAgrupada.getElementsByTagName('thead')[0];
    const tbody = tblAgrupada.getElementsByTagName('tbody')[0];

    eliminarElementosHijosHTML(thead);
    eliminarElementosHijosHTML(tbody);

    // Construir elementos de la tabla

    const filaEncabezado = document.createElement('tr');

    campos.forEach(campo => {
        const columna = document.createElement('th');
        columna.textContent = campo;
        filaEncabezado.appendChild(columna);
    });

    thead.appendChild(filaEncabezado);

    Object.entries(infoAgrupada).forEach(ent => {
        // Mostrar la fila agrupado
        const filaAgrupado = document.createElement('tr');
        const columnaAgrupado = document.createElement('td');

        columnaAgrupado.colSpan = campos.length;
        columnaAgrupado.textContent = ent[0];
        columnaAgrupado.className = 'grupo';

        filaAgrupado.appendChild(columnaAgrupado);
        tbody.appendChild(filaAgrupado);

        // Mostrar registros del grupo

        ent[1].forEach(reg => {
            const fila = document.createElement('tr');

            campos.forEach(campo => {
                const columna = document.createElement('td');
                const valor = reg[campo] || '';

                columna.textContent = valor;
                fila.appendChild(columna);
            });

            tbody.appendChild(fila);
        });
    });
});

const eliminarElementosHijosHTML = (etiqueta) => {
    while (etiqueta.lastChild) {
        etiqueta.removeChild(etiqueta.lastChild);
    }
}













// Solución

