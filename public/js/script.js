let eyeicon = document.getElementById("eyeicon");
let password = document.getElementById("password");

eyeicon.onclick = function(){
    if(password.type == "password"){
        password.type = "text";
        eyeicon.src = "./public/img/eye-open.png"
    }
    else{
        password.type = "password";
        eyeicon.src = "./public/img/eye-close.png"
    }
}