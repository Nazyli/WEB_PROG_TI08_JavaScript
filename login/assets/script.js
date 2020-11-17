function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    if (user == "nazyli" && pass == "1234") {
        window.alert("login sukses");
        window.location.href ="dashboard.html";
    } else {
        window.alert("login gagal");
    }
}