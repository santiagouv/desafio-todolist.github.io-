document.addEventListener('DOMContentLoaded', () => {
    renderTareas();
});


//3 tareas iniciales
const tareas = [
    { id: 1, nombre: 'jugar Street Fighter', realizada: false },
    { id: 2, nombre: 'jugar pacman', realizada: false },
    { id: 3, nombre: 'jugar tekken', realizada: true }
];

const agregarTarea = () => {
    event.preventDefault();
    const inputNuevaTarea = document.getElementById('inputNuevaTarea');
    const nombreTarea = inputNuevaTarea.value.trim();

    if (!nombreTarea) {
        alert('Ingresar nombre de Juego.');
        return; 
    }

    const nuevaTarea = {
        id: tareas.length + 1,
        nombre: nombreTarea,
        realizada: false
    };

    tareas.push(nuevaTarea);
    inputNuevaTarea.value = '';
    renderTareas();
};

const renderTareas = () => {
    const contenedorTareas = document.getElementById('listaTareas');
    contenedorTareas.innerHTML = ''; 
    tareas.forEach(tarea => {
        const tareaElemento = document.createElement('div');
        tareaElemento.classList.add('row');
        tareaElemento.innerHTML = `
            <div class="col">${tarea.id}</div>
            <div class="col">${tarea.nombre}</div>
            <div class="col">
                <input type="checkbox" ${tarea.realizada ? 'checked' : ''} onchange="toggleRealizada(${tarea.id})">
            </div>
            <div class="col">
                <div style="cursor: pointer;" onclick="eliminarTarea(${tarea.id})">❌</div>
            </div>
        `;
        contenedorTareas.appendChild(tareaElemento);
    });

    actualizarContadores();
};

const toggleRealizada = (id) => {
    const tarea = tareas.find(t => t.id === id);
    tarea.realizada = !tarea.realizada;
    renderTareas();
};

const eliminarTarea = (id) => {
    const index = tareas.findIndex(t => t.id === id);
    tareas.splice(index, 1);
    renderTareas();
};

const actualizarContadores = () => {
    const totalTareas = tareas.length;
    const totalTareasRealizadas = tareas.filter(t => t.realizada).length;
    document.getElementById('totalTareas').textContent = `Total: ${totalTareas}`;
    document.getElementById('totalTareasRealizadas').textContent = `Realizadas: ${totalTareasRealizadas}`;
};