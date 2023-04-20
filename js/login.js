const Username = "Admin";
const Password = "1234";

document.getElementById("login-button")
    .addEventListener("click", function() {
        EventLoginButton();
    });

document.getElementById("username")
    .addEventListener("input", function() {
        document.getElementById("username")
            .style.borderColor = "";
        document.getElementById("password")
            .style.borderColor = "";
        document.getElementById("errorMessage")
            .innerHTML = "";
    });

document.getElementById("password")
    .addEventListener("input", function() {
        document.getElementById("username")
            .style.borderColor = "";
        document.getElementById("password")
            .style.borderColor = "";
        document.getElementById("errorMessage")
            .innerHTML = "";
    });

document.getElementById("x")
    .addEventListener("click", function() {
        alert("Attenzione! Stai accedendo senza login");
        window.location.href = "index.html";
    });

var passwordField = document.getElementById("password");
var passwordToggle = document.getElementById("passwordToggle");

passwordToggle.addEventListener("click", function() {
    if (passwordField.type === "password") {
        passwordField.type = "text";
        passwordToggle.innerHTML = "Hide";
    } else {
        passwordField.type = "password";
        passwordToggle.innerHTML = "Show";
    }
});

var forgotPasswordLink = document.getElementById("forgot-password-link");

forgotPasswordLink.addEventListener("click", function(event) {
    event.preventDefault();

    var username = document.getElementById("username")
        .value;
    var password = document.getElementById("password")
        .value;

    alert(
        "Le tue credenziali per il login sono " +
        "\nNome utente: " +
        "Admin" +
        "\n **con la A grande Admin**" +
        "\nPassword: " +
        "1234"
    );
});

/*bottoni*/
let bottoneLogin = document.getElementById("login-button");
bottoneLogin.onmouseover = function() {
    bottoneLogin.style.backgroundColor = "rgb(40, 109, 211)";
};
bottoneLogin.onmouseout = function() {
    bottoneLogin.style.backgroundColor = "rgb()";
};


function EventLoginButton(){
    var username = document.getElementById("username")
            .value;
        var password = document.getElementById("password")
            .value;
        if (username === Username && password === Password) {
            var successMessage = document.getElementById("successMessage");
            successMessage.innerHTML = "Login effetuato!";
            successMessage.style.color = "green";
            window.location.href = "index.html";
        } else if (username === "" && password === "") {
            document.getElementById("username")
                .style.borderColor = "red";
            document.getElementById("password")
                .style.borderColor = "red";
            var errorMessage = document.getElementById("errorMessage");
            errorMessage.innerHTML = "Attenzione! Inserire le credenziali";
            errorMessage.style.color = "red";
        } else if (username === "") {
            document.getElementById("username")
                .style.borderColor = "red";
            var errorMessage = document.getElementById("errorMessage");
            errorMessage.innerHTML = "Attenzione! Username non inserito";
            errorMessage.style.color = "red";
        } else if (password === "") {
            document.getElementById("password")
                .style.borderColor = "red";
            var errorMessage = document.getElementById("errorMessage");
            errorMessage.innerHTML = "Attenzione! Password non inserita";
            errorMessage.style.color = "red";
        } else {
            document.getElementById("username")
                .style.borderColor = "red";
            document.getElementById("password")
                .style.borderColor = "red";
            var errorMessage = document.getElementById("errorMessage");
            errorMessage.innerHTML = "Username o password errati. Riprova";
            errorMessage.style.color = "red";
        }
}