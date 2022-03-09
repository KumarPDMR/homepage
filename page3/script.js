var index = 1;
var imageList = ["one", "two", "three"];
var stopChangeImg = false;
var changeImgTimeout = null;
var changeImgTimeout1 = null;
var slideDownTimeout = null;
var gifAnimTimeout = null;
var isLoginFormOpened = false;

$(document).ready(() => {
  $(document).click(function (e) {
    let loginBox = $("#login_show_form");
    let loginForm = $(".box");

    if (!isLoginFormOpened) return;

    // if the target of the click isn't the container nor a descendant of the container
    if (
      !loginBox.is(e.target) &&
      loginBox.has(e.target).length === 0 &&
      !loginForm.is(e.target) &&
      loginForm.has(e.target).length === 0
    ) {
      onLoginCloseClicked();
    }
  });

  $("#login_show_form").click(onLoginButtonClicked);

  initSlider();
  changeImg();
});

function changeImg() {
  if (stopChangeImg) return;

  $(`.img-1>div>img`).attr("src", "../assests/cops_logo_anim_new.gif");
  $(`.img-2>div>img`).attr("src", "../assests/pdmr_logo_animation.gif");
  $(`.img-3>div>img`).attr("src", "../assests/compuscript_logo_animation.gif");

  setTimeout(() => {
    if (index === 3) {
      index = 1;
    } else {
      index = index + 1;
    }

    for (let i = 0; i < imageList.length; i++) {
      const element = imageList[i];
      if (i !== index - 1) {
        $(`#${imageList[i]}`).prop("checked", false);
      }
    }

    $(`#${imageList[index - 1]}`).prop("checked", true);
  }, 6300);

  setTimeout(() => {
    if (stopChangeImg) return;
    changeImg();
  }, 6800);
}

function onLoginButtonClicked() {
  stopChangeImg = true;

  $(".img-2").hide();
  $(".img-3").hide();

  $(`.img-1>div>img`).css({ width: "", height: "", margin: "100px 23px" });
  $(`.img-1>div>img`).attr("src", "../assests/COPS_Static-logo_200pix.png");

  $("#login_show_form").removeClass("animate__animated animate__rotateIn");
  $("#login_show_form").addClass("animate__animated animate__rotateOut");

  $(".box").css("display", "");
  $(".box").removeClass("animate__animated animate__rotateOut");
  $(".box").addClass("animate__animated animate__rotateIn");

  isLoginFormOpened = true;
}

function onLoginCloseClicked() {
  $(".box").removeClass("animate__animated animate__rotateIn");
  $(".box").addClass("animate__animated animate__rotateOut");
  $("#login_show_form").removeClass("animate__animated animate__rotateOut");
  $("#login_show_form").addClass("animate__animated animate__rotateIn");
  isLoginFormOpened = false;

  stopChangeImg = false;
  $(`#${imageList[index - 1]}`).prop("checked", true);
  $(".img-2").show();
  $(".img-3").show();

  $(`.img-1>div>img`).css({
    width: "200px",
    height: "200px",
    margin: "100px 23px",
  });
  
  $(`.img-1>div>img`).attr("src", "../assests/cops_logo_anim_new.gif");
  index = 1;
  changeImg();
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
