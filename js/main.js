const boton = document.querySelector("#btnsubir")
const alumnos = document.querySelector("#alumnos")
const errorinput = document.querySelector("#error");






const alumnoslista = JSON.parse(localStorage.getItem("alumnos")) || [];

boton.addEventListener("click", (event)=>{
    event.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const curso = document.getElementById("curso").value;
    const nota = document.getElementById("nota").value;

    if(!nombre.trim() || !apellido.trim() || !curso.trim() || !nota.trim()){
        errorinput.textContent = "Por favor, Ingrese todos los datos"
    }
    alumnoslista.push({
        nombre,
        apellido,
        curso,
        nota
    })
    localStorage.setItem("alumnos", JSON.stringify(alumnoslista))
    const alumno = crearAlumno(nombre,apellido,curso,nota)

    alumnos.appendChild(alumno);


});


function crearAlumno(nombre, apellido, curso, nota){
    const alumno = document.createElement("div");
    alumno.classList.add("col", "s12", "m6");
  
    alumno.innerHTML = `
    <div class="card blue-grey darken-1">
      <div class="card-content white-text">
        <span class="card-title">${nombre.trim()}</span>
        <p>${apellido.trim()}</p>
        <p>${curso.trim()}</p>
        <p>${nota.trim()}</p>
      </div>
    </div>
    `;
  console.log(apellido)
    return alumno;
};

function mostrarAlumnos(){
    alumnos.innerHTML="";

    if(alumnoslista.length > 0){
        alumnoslista.forEach((alumnoslista) => {
            const alumno = crearAlumno(alumnoslista.nombre, alumnoslista.apellido,alumnoslista.curso,alumnoslista.nota)
            alumnos.appendChild(alumno)
        });
    }
}

mostrarAlumnos()