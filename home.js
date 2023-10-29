dave=document.getElementById("dave");
window.addEventListener('keydown', function (e) {
    dave.innerHTML = `You pressed ${e.key}`;
  }, false);

profileButton = document.getElementById('profileButton')
profileButton.onclick =()=>{
    window.location.href="profile.html"
}
repsButton = document.getElementById('representativesButton')
repsButton.onclick =()=>{
    window.location.href="representative.html"
}
