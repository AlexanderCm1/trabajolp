
//creando la clase
var c = 3;
class Login{
    constructor(user,pass){
        this.user = user;
        this.pass = pass;
    }
    registrar(){
        localStorage.setItem("user",this.user);
        localStorage.setItem("pass",this.pass);
    }
    confirmar(){
        
        if(this.user == localStorage.getItem("user") && this.pass == localStorage.getItem("pass")){
            document.getElementById("c").append("Bienvenido " +localStorage.getItem("user"));

            
        }else{

            alert("usuario o contraseña incorrecta --- intente de nuevo -- tiene "+ c +" intentos");
            --c;
                if(c < 0){
                    alert("agoto sus intentos y el programa se reiniciara")
                    cerrar();
                }
        }
    
    }
}

var c = 3;
//formulario login
function enviar(){
    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;
    var login = new Login(user,pass);

    
    login.registrar();
    document.getElementById("login").style.visibility= "hidden";
    document.getElementById("comprovar").style.display="block";
}
function confirmar(){
    var user_conf = document.getElementById("user_conf").value;
    var pass_conf = document.getElementById("pass_conf").value;
    var validar = new Login(user_conf,pass_conf);
    validar.confirmar();

    /*
    while(c > 0){
        alert("contrasela incorrecta tiene " + c +"intentos");

        --c;

    }*/

   
}
function cerrar(){
    localStorage.clear();
    location.reload();
}




/*
document.getElementById("login").onsubmit(function(){
    var user = document.getElementById("user").value;

    console.log(user);

})*/