const formulario = document.getElementById("formularioTarea");
const descTarea = document.getElementById("tarea");
const listaPendiente = document.getElementById("lispendiente");
const listaProceso = document.getElementById("lisproceso");
const listaCompletada = document.getElementById("liscompletada");

// Envio de formulario
formulario.addEventListener("submit", function(e){
    e.preventDefault();

    const textoTarea = descTarea.value.trim();
    if(textoTarea === ""){
        return;
    }

    const li = document.createElement("li");
    const span = document.createElement("span");
    const botonIni = document.createElement("button");
    const botonEliminar = document.createElement("button");

    span.textContent = textoTarea;
    botonIni.textContent = "Iniciar";
    botonEliminar.textContent = "Borrar";
    
    botonIni.addEventListener("click", function(){
        pasarproceso(li, span);
    });
     botonEliminar.addEventListener("click", function(){
        eliminarTarea(li);
    });

    li.appendChild(span);
    li.appendChild(botonIni);
    li.appendChild(botonEliminar);

    listaPendiente.appendChild(li);

    descTarea.value = "";
});

function pasarproceso(li, span){
    li.innerHTML = "";

    const botonCompletada = document.createElement("button");
    botonCompletada.textContent = "✓";

    botonCompletada.addEventListener("click", function () {
        pasarcompletada(li, span);
    });

    li.appendChild(span);
    li.appendChild(botonCompletada);
    listaProceso.appendChild(li);
}

function pasarcompletada(li, span){
    li.innerHTML = ""; 

    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "🗑️";

    botonEliminar.addEventListener("click", function () {
        eliminarTarea(li);
    });

    li.appendChild(span);
    listaCompletada.appendChild(li);
    li.appendChild(botonEliminar);
}

function eliminarTarea(li) {
    li.remove();
}