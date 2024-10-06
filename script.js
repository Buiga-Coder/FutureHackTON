var modal = document.getElementById("myModal");
var btn = document.getElementById("openModalBtn");

btn.onclick = function() {
modal.style.display = "block";
}

window.onclick = function(event) {
if (event.target == modal) {
modal.style.display = "none";
}
}

console.log(1111)