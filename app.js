// Función para generar una contraseña segura aleatoria
function generarContrasena(longitud) {
  // Definir los caracteres permitidos en la contraseña
  var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-=';
  
  var contrasena = '';
  
  // Generar la contraseña
  for (var i = 0; i < longitud; i++) {
    var indice = Math.floor(Math.random() * caracteres.length);
    contrasena += caracteres.charAt(indice);
  }
  
  return contrasena;
}

// Uso del generador de contraseñas
var longitudDeseada = 12; // Cambia esto a la longitud deseada de la contraseña
var nuevaContrasena = generarContrasena(longitudDeseada);
console.log(nuevaContrasena);
