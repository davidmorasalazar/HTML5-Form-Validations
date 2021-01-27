
        let forma = document.getElementById("forma")
        forma.addEventListener("submit",function(evento){
            evento.preventDefault();
            validateForm();
        })
        // var targeta = document.getElementById("targeta")
        function validateForm(){ 
            let elemento = document.getElementById("tarjeta");
            let elemento1 = document.getElementById("cvc");
            let elemento2 = document.getElementById("monto");
            let elemento3 = document.getElementById("nombre");            
            let elemento4 = document.getElementById("apellido");
            let elemento5 = document.getElementById("ciudad");
            let elemento6 = document.getElementById("estado");           
            let elemento7 = document.getElementById("postal");
            console.log(elemento);
            if(elemento.value == "") {
              alert("FAVOR INGRESAR LOS DATOS DE SU TARJETA");   
            }
            if(elemento1.value == "") {
              alert("FAVOR INGRESAR LOS DATOS DE SU CVC");   
            }
            if(elemento2.value == "") {
              alert("FAVOR INGRESAR EL MONTO");   
            }

            if(elemento3.value == "") {
              alert("FAVOR INGRESAR SU NOMBRE");   
            }
            if(elemento4.value == "") {
              alert("FAVOR INGRESAR SU APELLIDO");   
            }
            if(elemento5.value == "") {
              alert("FAVOR INGRESAR SU CIUDAD");   
            }
            if(elemento6.value == "Pick a State") {
              alert("FAVOR INGRESAR SU ESTADO DE RESIDENCIA");   
            }           
            
            if(elemento7.value == "") {
              alert("FAVOR INGRESAR SU CODIGO POSTAL");   
            }
        }
        

