// // Get the modal
// var popform = document.getElementById('trigger-modal');

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(c) {
//     if (c.target == popform) {
//         popform.style.display = "none";
//     }
//     hotkey: control + / }
function showPop(){
    document.getElementById("bookclubrego").style.display = "block";
}
function closePop(){
    document.getElementById("bookclubrego").style.display = "none";
}
var modal = document.getElementById("bookclubrego");
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  function openMenu(evt, menuName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("menu");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" w3-dark-grey", "");
    }
    document.getElementById(menuName).style.display = "block";
    evt.currentTarget.firstElementChild.className += " w3-dark-grey";
  }
  document.getElementById("myLink").click();