const resetPassword = document.querySelector('#loginFields p')
const emailField = document.getElementById("emailField")
const success = document.querySelector('#loginFields h2')
const errorLabel = document.getElementById('errorLabel')

resetPassword.onclick = (event) =>{
    event.preventDefault()
    email = emailField.value 
    firebase.auth().sendPasswordResetEmail(email)
    .then(function() {
      success.className = ""
      resetPassword.innerHTML = "Resend Email"
    }).catch(function(error) {
        errorLabel.className="";
        errorMessage = error.message
        errorLabel.innerHTML = errorMessage;
    });
}