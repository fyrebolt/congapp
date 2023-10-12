const searchButton = document.getElementById('searchButton');
var bar = document.getElementById("searchBar");
searchButton.onclick = (event) =>{
    event.preventDefault()
    window.alert("button works");
    bar.style.display = "none";
}


/*function hideBar() {
    var bar = document.getElementById("searchBar");
    if (checkLogin() == false) {
        bar.style.display = "none";
    }

}*/
