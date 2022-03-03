$(document).ready(() => {});

function reset_animation() {
  var el = document.getElementById("card");
  el.style.animation = "none";
  el.offsetHeight; /* trigger reflow */
  el.style.animation = null;
}
