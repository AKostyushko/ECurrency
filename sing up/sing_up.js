/** function validate_form() {
        var singUp = document.getElementById("sing_up");

        singUp.addEventListener("click", function () {
            var elem = document.getElementsByClassName("form-input");
            for( var i = 0; i < elem.length; i++ ) {
                var x = elem[i].value;
                  if ( x.length > 0 ) {
                      singUp.className = "singUp-authorized"
               }
               else {
                      alert("no");
                      return;
                  }
               }

        })
    };

    validate_form();
**/