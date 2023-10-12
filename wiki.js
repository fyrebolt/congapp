const searchButton = document.getElementById('searchButton');
loginButton.onclick = (event) =>{
    event.preventDefault()
    window.alert("button works");
    searchButton.style.display = "none";
}


/*function hideBar() {
    var bar = document.getElementById("searchBar");
    if (checkLogin() == false) {
        bar.style.display = "none";
    }

}*/
