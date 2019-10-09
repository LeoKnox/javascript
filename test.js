document.getElementById("test").innerHTML = "me";

function change(x) {
  x.innerHTML = "not me";
}

function revert(x) {
  x.innerHTML = "me";
}
