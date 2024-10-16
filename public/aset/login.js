document.getElementById('loginForm').addEventListener('submit', function(event){
    event.preventDefault();

    const correctUsername = "fathir";
    const correctPassword = "fathirganteng";

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if(username == correctUsername && password == correctPassword){
        alert("SUCCES")
        window.location.href = '/';

    }else{
        alert("Username atau password salah")
    }

});