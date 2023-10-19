const loginButton = document.getElementById('loginSubmit');
const emailField = document.getElementById("emailField")
const passwordField = document.getElementById("passwordField")
const googleLoginBox = document.getElementById('googleLogin')

loginButton.onclick = (event) =>{
    event.preventDefault()
    const email = emailField.value
    const password = passwordField.value
firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    localStorage.setItem("loggedIn","yes")
    window.location.href = "home.html" 
    user = email.replaceAll(".","").replaceAll("#","").replaceAll("$",'').replaceAll("[","").replaceAll("]","")
    user = user.substring(0,user.indexOf("@"))
    localStorage.setItem("username",user)
  })
  .catch((error) => {
    errorLabel.innerHTML = "invalid login credentials";    
  });
}

googleLogin.onclick = (event) => {
    event.preventDefault()
    provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
        localStorage.setItem("loggedIn","yes")
        window.location.href = "home.html"
        profile = result.user.providerData[0];
        email = profile.email
        user = email.replaceAll(".","").replaceAll("#","").replaceAll("$",'').replaceAll("[","").replaceAll("]","")
        user = user.substring(0,user.indexOf("@"))
        localStorage.setItem("username",user)
    }).catch(function(error) {
      errorLabel.innerHTML = "invalid login credentials";
    })
}
