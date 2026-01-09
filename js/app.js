const formulario = document.getElementById("formularioTarea");
const descTarea = document.getElementById("tarea");
const listaPendiente = document.getElementById("lispendiente");
const listaProceso = document.getElementById("lisproceso");
const listaCompletada = document.getElementById("liscompletada");

const contpendiente = document.getElementById("contpendiente");
const contproceso = document.getElementById("contproceso");
const contcompletada = document.getElementById("contcompletada");

formulario.addEventListener("submit", function (e){
    e.preventDefault();

    const textoTarea = descTarea.value.trim();
    if(textoTarea === ""){
        return;
    }

    crearTareaPendiente(textoTarea);
    descTarea.value = "";
});

function crearTareaPendiente(texto){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const botonIni = document.createElement("button");
    const botonEliminar = document.createElement("button");

    span.textContent = texto;
    botonIni.textContent = "Iniciar";
    botonEliminar.textContent = "🗑️";

    botonIni.addEventListener("click",function(){
        pasarProceso(li, span);
    });

    botonEliminar.addEventListener("click",function(){
        eliminarTarea(li);
    });

    li.appendChild(span);
    li.appendChild(botonIni);
    li.appendChild(botonEliminar);

    listaPendiente.appendChild(li);
    actualizarContadores();
}

function pasarProceso(li, span){
    li.innerHTML = "";

    const botonCompletada = document.createElement("button");
    botonCompletada.textContent = "✓";

    botonCompletada.addEventListener("click",function(){
        pasarCompletada(li, span);
    });

    li.appendChild(span);
    li.appendChild(botonCompletada);

    listaProceso.appendChild(li);
    actualizarContadores();
}

function pasarCompletada(li, span){
    li.innerHTML = "";

    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "🗑️";

    botonEliminar.addEventListener("click", function () {
        eliminarTarea(li);
    });

    li.appendChild(span);
    li.appendChild(botonEliminar);

    listaCompletada.appendChild(li);
    actualizarContadores();
}

function eliminarTarea(li){
    li.remove();
    actualizarContadores();
}

function actualizarContadores(){
    contpendiente.textContent = listaPendiente.children.length;
    contproceso.textContent = listaProceso.children.length;
    contcompletada.textContent = listaCompletada.children.length;
}
