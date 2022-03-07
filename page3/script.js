var index = 1;
var imageList = ["one", "two", "three"];
var stopChangeImg = false;
var changeImgTimeout = null;
var changeImgTimeout1 = null;
var slideDownTimeout = null;
var gifAnimTimeout = null;

$(document).ready(() => {
  $("#login_show_form").click(onLoginButtonClicked);
  $(".closeIcon").click(onLoginCloseClicked);

  initSlider();
  changeImg();
});

function changeImg() {
  if (stopChangeImg) return;

  // $(`.img-1>div>img`).attr({ height: "200px" });
  $(`.img-1>div>img`).attr("src", "../assests/cops_logo_anim_new.gif");
  $(`.img-2>div>img`).attr("src", "../assests/pdmr_logo_animation.gif");
  $(`.img-3>div>img`).attr("src", "../assests/compuscript_logo_animation.gif");

  // setTimeout(() => {
  //   $(`.img-1>div>img`).attr({ height: "140px" });
  //   $(`.img-1>div>img`).attr("src", "../assests/COPS_Static-logo_200pix.png");
  //   $(`.img-2>div>img`).attr("src", "../assests/pdmr_logo.png");
  //   $(`.img-3>div>img`).attr("src", "../assests/comp_logo.png");
  // }, 5500);

  setTimeout(() => {
    if (index === 3) {
      index = 1;
    } else {
      index = index + 1;
    }

    $(`#${imageList[index - 1]}`).prop("checked", true);
  }, 6300);

  setTimeout(() => {
    changeImg();
  }, 6800);
}

function onLoginButtonClicked() {
  stopChangeImg = true;
  $(`#${imageList[2]}`).prop("checked", true);
  // $(`.img-1>div>img`).attr("src", "../assests/COPS_Static-logo_200pix.png");

  $("#login_show_form").addClass("rotateUp");

  // setTimeout(function () {
  $(".box").css("display", "");
  $(".box").addClass("animate__animated animate__rotateIn");
  // }, 500);
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

  // $(".image_slide1>div>img").attr("src", "COPS-LOGO.png");
  $(".image_slide1>div>img").attr("src", "cops_logo_anim_new.gif");

  if (changeImgTimeout !== null) {
    clearTimeout(changeImgTimeout);
    changeImgTimeout = null;
  }
  changeImgTimeout = setTimeout("changeImg()", 5500);
}

function initSlider() {
  $("#slider_btn").click(function () {
    let curText = $("#slider_current_text").text();

    if (curText.trim() === "Books") {
      $("#slider_list>li").css("transform", "translateY(-52px)");
      $("#slider_current_text").attr("id", "");
      $("#slider_list").children().eq(1).attr("id", "slider_current_text");
    } else {
      $("#slider_list>li").css("transform", "translateY(-28px)");
      $("#slider_current_text").attr("id", "");
      $("#slider_list").children().eq(0).attr("id", "slider_current_text");
    }
  });
}
