signUpButton = document.getElementById("signUp")
logInButton = document.getElementById("logIn")
guestButton = document.getElementById("guest")
signUpButton.onclick = () =>{
    window.location.href=register.html;
}
logInButton.onclick = () =>{
    window.location.href=login.html;
}
guestButton.onclick = () =>{
    sessionStorage.setItem("guest","yes")
    window.location.href=home.html;
}