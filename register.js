const signupButton = document.getElementById('loginFooter');
const emailField = document.getElementById("emailField")
const passwordField = document.getElementById("passwordField")
const googleLogin = document.getElementById('googleLoginBox')
const errorLabel = document.getElementById('errorLabel')

signupButton.onclick = (event) =>{
    event.preventDefault()
    const email = emailField.value
    const password = passwordField.value
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
        localStorage.setItem("loggedIn","yes")
        user = email.replaceAll(".","").replaceAll("#","").replaceAll("$",'').replaceAll("[","").replaceAll("]","")
        user = user.substring(0,user.indexOf("@"))
        localStorage.setItem("username",user)
        window.location.href = "home.html"    
    })
    .catch((error) => {
        errorMessage = error.message
        errorLabel.innerHTML = errorMessage;    
    })
}


googleLogin.onclick = (event) => {
    event.preventDefault()
    provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
        localStorage.setItem("loggedIn","yes")
        profile = result.user.providerData[0];
        email = profile.email;
        user = email.replaceAll(".","").replaceAll("#","").replaceAll("$",'').replaceAll("[","").replaceAll("]","")
        user = user.substring(0,user.indexOf("@"))
        localStorage.setItem("username",user)
        window.location.href = "home.html"  
    }).catch(function(error) {
        errorMessage = error.message
        errorLabel.innerHTML = errorMessage;  
    });
}