var attempt=3
var usuario = document.getElementById('usuario');
 var password = document.getElementById('password');
    if ((usuario == "usuario") || (password == "1234")) 
    {//COMPRUEBA
         alert('¡¡BIENVENIDO user!!');
        window.location="indexIsa.html"
        }

 // Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          } else { 
              alert('¡¡BIENVENIDO user!!')
          }
        
          form.classList.add('was-validated')
        }, false)
      })
  })()