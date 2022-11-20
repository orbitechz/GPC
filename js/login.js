function forgotPwd(){
    var element = document.getElementById('aviso-reset-senha');
    element.innerHTML = "<p>Confira seu e-mail para recuperar a senha!</p>";
}

function login(){
    var user = document.getElementById('user');
    var pwd = document.getElementById('pwd');
    if(user.value == "admin" && pwd.value == "admin"){
        window.location.href = 'pages/home/home.html';
    }
}