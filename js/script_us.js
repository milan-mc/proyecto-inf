const registroForm = document.getElementById('registroForm');
const listaUsuarios = document.getElementById('listaUsuarios');

registroForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const nombreUsuario = document.getElementById('nombreUsuario').value;
  const Producto = document.getElementById('Producto').value;
  const Numerodeserie = document.getElementById('N/S').value;
  const Destinatario = document.getElementById('Destinatario').value;
  const rut = document.getElementById('rut').value;
  const Fecha = document.getElementById('Fecha').value;
  const contraseña = document.getElementById('contraseña').value;
  const rol = document.getElementById('rol').value;

  const nuevoUsuario = {
    nombre: nombreUsuario,
    Producto: Producto,
    Numerodeserie: Numerodeserie,
    Destinatario: Destinatario,
    rut: rut,
    contraseña: contraseña,
    Fecha: Fecha,
    rol: rol
  };

  // Agregar usuario al listado
  const usuarioItem = document.createElement('li');
  usuarioItem.textContent = '${nuevoUsuario.nombre} - Rol:${nuevoUsuario.rol}';
  listaUsuarios.appendChild(usuarioItem);

  // Limpiar campos del formulario después de agregar el usuario
  registroForm.reset();
});