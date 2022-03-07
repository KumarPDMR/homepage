$(document).ready(() => {
  // startAnim();
});

function startAnim() {
  $("#card>img").attr("src", "../assests/COPS_Static-logo_200pix.png");

  setTimeout(() => {
    $("#card>img").attr("src", "../assests/COPS-logo-animation.gif");
  }, 2000);

  setTimeout(() => {
    $("#card>img").attr("src", "../assests/COPS_Static-logo_200pix.png");
  }, 7500);

  setTimeout(() => {
    $("#card").css("animation", "circleShrink 2s");
  }, 8000);

  setTimeout(() => {
    $("#card").css("animation", "circleScale 2s");
    reset_animation("outline");
    $("#outline").css("animation", "outlineScale 2s");
  }, 10000);

  setTimeout(() => {
    startAnim();
  }, 12000);
}

function reset_animation(cls) {
  var el = document.getElementById(cls);
  el.style.animation = "none";
  el.offsetHeight; /* trigger reflow */
  el.style.animation = null;
}
