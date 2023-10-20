const loginButton = document.getElementById('loginFooter');
const emailField = document.getElementById("emailField")
const passwordField = document.getElementById("passwordField")
const googleLogin = document.getElementById('googleLoginBox')
const errorLabel = document.getElementById('errorLabel')

loginButton.onclick = (event) =>{
    event.preventDefault()
    errorLabel.innerHTML = "."; 
    const email = emailField.value
    const password = passwordField.value
firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    localStorage.setItem("loggedIn","yes")
    window.location.href = "home.html" 
  })
  .catch((error) => {
    errorLabel.className="";
    errorLabel.innerHTML = "Invalid login credentials";    
  });
}

googleLogin.onclick = (event) => {
    event.preventDefault()
    errorLabel.innerHTML = "."; 
    provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
        localStorage.setItem("loggedIn","yes")
        window.location.href = "home.html"
        //profile = result.user.providerData[0];
        //email = profile.email
    }).catch(function(error) {
      errorLabel.className="";
      errorLabel.innerHTML = "Invalid login credentials"; 
    })
}
