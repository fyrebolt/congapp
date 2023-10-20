// const searchButton = document.getElementById('searchButton');
// var bar = document.getElementById("searchBar");
// searchButton.onclick = (event) =>{
//     event.preventDefault()
//     window.alert("button works");
//     bar.style.display = "none";
// }


// /*function hideBar() {
//     var bar = document.getElementById("searchBar");
//     if (checkLogin() == false) {
//         bar.style.display = "none";
//     }

// }*/

function toggleDropdown(button) {
    var content = button.nextElementSibling;
    content.classList.toggle("active");
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

