const resetPassword = document.querySelector('#loginFields p')
const success = document.querySelector('#loginFields h2')
const errorLabel = document.getElementById('errorLabel')
resetPassword.onclick = (event) =>{
    event.preventDefault()
    firebase.auth().sendPasswordResetEmail("ziad.moh49@gmail.com")
    .then(function() {
      success.className = ""
      resetPassword.innerHTML = "Resend Email"
    }).catch(function(error) {
        errorLabel.className="";
        errorMessage = error.message
        errorLabel.innerHTML = errorMessage;
    });
}