var i = 1;
var stopChangeImg = false;
var changeImgTimeout = null;
var changeImgTimeout1 = null;
var slideDownTimeout = null;
var gifAnimTimeout = null;

$(document).ready(() => {
  $("#login_show_form").click(onLoginButtonClicked);
  $(".closeIcon").click(onLoginCloseClicked);

  changeImg();
});

function changeImg() {
  if (stopChangeImg) {
    return;
  }

  $(".image_slide" + i).css("z-index", "1");

  for (let j = 1; j <= 3; j++) {
    if (j === i) {
      continue;
    }

    $(".image_slide" + j).css("z-index", "-3");
  }

  if (i === 3) {
    i = 1;
  } else {
    i = i + 1;
  }

  gifAnimTimeout = setTimeout(() => {
    $(".image_slide1>div>img").attr("src", "../assests/cops_logo_anim_b.gif");
    $(".image_slide2>div>img").attr(
      "src",
      "../assests/pdmr_logo_animation.gif"
    );
    $(".image_slide3>div>img").attr(
      "src",
      "../assests/compuscript_logo_animation.gif"
    );
  }, 3000);

  $(".image_slide1>div>img").attr("src", "../assests/cops_logo.png");
  $(".image_slide" + i).css("z-index", "2");
  $(".image_slide" + i).css("animation", "flipOutY 2s");

  changeImgTimeout1 = setTimeout(function () {
    changeImg();
  }, 8500);
}

function onLoginButtonClicked() {
  console.log("here");
  $("#login_show_form").addClass("rotateUp");

  setTimeout(function () {
    $(".box").css("display", "");
    $(".box").addClass("animate__animated animate__rotateIn");
  }, 500);
}

function onLoginCloseClicked() {
  $("#login_show_form").fadeIn();
  $(".box").fadeOut();
  $(".closeIcon").fadeOut();
  $(".hide-top").hide();

  $("#login_show_form").css({ transform: "scale(1)", "border-radius": "50%" });
  setTimeout(() => {
    $("#login_show_form>img").show();
    $("#login_show_form").css("box-shadow", "");
    $("#login_show_form").css("background-color", "transparent");
  }, 1000);

  stopChangeImg = false;
  i = 1;

  $(".image_slide1").css("z-index", "2");
  $(".image_slide2").css("z-index", "1");
  $(".image_slide3").css("z-index", "-3");

  $(".image_slide1>div>img").attr("src", "COPS-LOGO.png");
  $(".image_slide1>div>img").attr("src", "COPS-LOG_Anim_1.gif");

  if (changeImgTimeout !== null) {
    clearTimeout(changeImgTimeout);
    changeImgTimeout = null;
  }
  changeImgTimeout = setTimeout("changeImg()", 5500);
}
