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

 
 const empleados = [];
 let id = 1;

 
 function guardarDatos() {
     const nombre = document.getElementById('name').value;
     const apellido = document.getElementById('apell').value;
     const edad = document.getElementById('fechaN').value;

     
     if (nombre.trim() !== '') {
         const empleado = {
            id: id++,
             nombre: nombre,
             apellido: apellido,
             edad: edad
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
         item.textContent = `Id: ${empleado.id} , Nombre: ${empleado.nombre}  ${empleado.apellido || 'N/A'}, Edad: ${empleado.edad || 'N/A'}`;
         listaDatos.appendChild(item);
     });
 }

 const botonGuardar = document.getElementById('enviar');
 botonGuardar.addEventListener('click', guardarDatos);

