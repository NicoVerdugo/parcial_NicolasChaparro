document.getElementById('name').addEventListener('keypress',(event)=>{
         if(!(/[a-zA-Z\s]/.test(event.key))){
             event.preventDefault()
         }
     })

     document.getElementById('apell').addEventListener('keypress',(event)=>{
        if(!(/[a-zA-Z\s]/.test(event.key))){
            event.preventDefault()
        }
    })

     document.getElementById('salario').addEventListener('keypress',(event)=>{
     if(!/[0-9]/.test(event.key)){
         event.preventDefault()
     }
 })

 document.getElementById('filtro').addEventListener('keypress',(event)=>{
    if(!/[0-9]/.test(event.key)){
        event.preventDefault()
    }
})

 
 const empleados = [];
 let id = 1;

 
 function guardarDatos() {
     const nombre = document.getElementById('name').value;
     const apellido = document.getElementById('apell').value;
     const fechaNacim = document.getElementById('fechaN').value;
     const edad = calcularEdad(fechaNacim);
     const salario = document.getElementById('salario').value;
     const departamento = document.getElementById('departamento').value;




     
     if (nombre.trim() !== '') {
         const empleado = {
             id: id++,
             nombre: nombre,
             apellido: apellido,
             edad: edad,
             salario: salario,
             departamento: departamento
         };

         empleados.push(empleado);

         actualizarLista();
     } else {
         alert('Por favor, ingresa al menos el nombre.');
     }
 }

 function actualizarLista() {
     const listaDatos = document.getElementById('listaDatos');
     listaDatos.innerHTML = '';

     empleados.forEach(empleado => {
         const item = document.createElement('li');
         item.textContent = `Id: ${empleado.id} , Nombre: ${empleado.nombre}  ${empleado.apellido || 'N/A'}, Edad: ${empleado.edad || 'N/A'}, Departamento: ${empleado.departamento || 'N/A'}, Salario: ${empleado.salario}`;
         listaDatos.appendChild(item);
     });
 }

 function calcularEdad(fechaNacim) {
    const fechaNacD = new Date(fechaNacim);
    const fechaActual = new Date();
    const edad = fechaActual.getFullYear() - fechaNacD.getFullYear();
    return edad;
}

function buscarId() {
    const idBuscado = parseInt(document.getElementById('filtro').value);
    const datoEncontrado = empleados.find(empleado => empleado.id === idBuscado);


    if (datoEncontrado) {
        const resultado = `ID: ${datoEncontrado.id}, Nombre: ${datoEncontrado.nombre}, Apellido: ${datoEncontrado.apellido || 'N/A'}, Edad: ${datoEncontrado.edad}, Salario: ${datoEncontrado.salario}`;
        window.alert(resultado);
    } else {
        window.alert('No se encontraron datos con ese ID.');
    }
}

const botonGuardar = document.getElementById('enviar');
 botonGuardar.addEventListener('click', guardarDatos);


const botonBuscar = document.getElementById('buscar');
botonBuscar.addEventListener('click', buscarId);

function subirDep() {
    fetch('departaments.json')
        .then(response => response.json())
        .then(data => {
            const departamentoSelect = document.getElementById('departamento');

            data.forEach(departamento => {
                const option = document.createElement('option');
                option.value = departamento.code;
                option.textContent = departamento.name;
                departamentoSelect.appendChild(option);
            });
        })
        .catch(error => console.error('Error:', error));
}