
        function validar() {
let nombre, apellidos, correo, usuario, contraseña, telefono, expresion, passExpress, nameExpress, apellidoExpress;

          nombre = document.getElementById("nombre").value;
          apellidos = document.getElementById("apellidos").value;
          correo = document.getElementById("correo").value;
          usuario = document.getElementById("usuario").value;
          clave = document.getElementById("contrasena").value;
          telefono = document.getElementById("telefono").value;

          //expresion regular para correo electronico
          expresion = /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i;
          
          // expresion regular para contraseña *min 7 caract*
          passExpress = /^[A-Za-z]\w{7,14}$/;

          //Expresion regular para nombre
          nameExpress = /^[A-Z]+$/i;
      
             //Expresion regular para nombre
             apellidoExpress = /^[A-Z]+$/i;
           
       
    if (nombre === "" || apellidos === "" || correo === "" || usuario === "" || contraseña === "" || telefono === ""){
      
    
// Completar registro
      
      alert("todos los campos son obligatorios");
      return false;
     }
    
   
       // Nombre - caracteres max
    else if (nombre.length>30){
      alert(" Tu nombre es muy largo");
      return false;
    }

    else if (!nameExpress.test(nombre)) {
      alert ("Tu nombre sólo debe tener Letras");
      return false;
      }
  






     // Apellido - caract max
    else if (apellidos.length>30){
      alert(" Tu apellido es muy largo amigo!");
      return false;
    }
    else if (!apellidoExpress.test(apellidos)) {
      alert ("Tu apellido sólo debe tener Letras");
      return false;
      }
  
  
  


    
  // Validacion de Mail expresion regular
  else if (!passExpress.test(clave)) {
    alert ("La contraseña debe empezar con una Letra y tenga entre 8 a 16 caracteres, puede contener, digitos y guion bajo");
    return false;
    }

          

          // Nombre de usuario Length
      else if (usuario.length>20 || clave.length>20) {
        alert("El usuario y la clave sólo deben tener  hasta 20 caracteres");
        return false;
      } 
      




         // Telefono value
      
         else if (telefono.length > 15) {
          alert("El teléfono es muy largo");
          return false;

        } 
        // Si el telefono no es un NUM
        else if (isNaN(telefono)) {
          alert("El teléfono no es un número");
          return false;
          

        } 
             //Correo valor
    
             else if (correo.length>100) {
              alert("El correo electrónico es muy largo");
              return false;
            }
         // Validacion de Mail expresion regular
            else if (!expresion.test(correo)) {
              alert ("Correo invalido ");
              return false;
              } 
        else {
          alert("Gracias " + nombre + " " + apellidos + ", por completar nuestro formulario. " + " Tu nombre de usuario es " + usuario + " y la contraseña de usuario es " + clave + ". Recuerda nunca compartirlas. " );
          return false
        }

        }
     

