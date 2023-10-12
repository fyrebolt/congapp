const searchButton = document.getElementById('searchBar');
loginButton.onclick = (event) =>{
    event.preventDefault()
    searchButton.style.display = "none";
}


/*function hideBar() {
    var bar = document.getElementById("searchBar");
    if (checkLogin() == false) {
        bar.style.display = "none";
    }

}*/
