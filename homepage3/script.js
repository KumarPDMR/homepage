$(document).ready(() => {
  initSlider();
  $(".material-button").click(onLoginButtonClicked);
  $(".closeIcon").click(onLoginCloseClicked);
});

function initSlider() {
  $(".my-slider").slick({
    arrows: false,
    focusOnSelect: true,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    Infinite: true,
    centerMode: true,
    rows: 1,
    adaptiveHeight: true,
    autoplay: false,
    draggable: true,
  });

  var scrollCount = null;
  var scroll = null;

  $(".my-slider").on("wheel", function (e) {
    e.preventDefault();

    clearTimeout(scroll);
    scroll = setTimeout(function () {
      scrollCount = 0;
    }, 200);
    if (scrollCount) return 0;

    scrollCount = 1;

    if (e.originalEvent.deltaY < 0) {
      $(this).slick("slickNext");
    } else {
      $(this).slick("slickPrev");
    }
  });

  $(".slick-slide").attr("tabindex", "-1");

  $(".my-slider").on(
    "afterChange",
    function (event, slick, currentSlide, nextSlide) {
      console.log(
        $(".slick-slide.slick-current.slick-active>div>div").attr("id")
      );
    }
  );
}

function onLoginButtonClicked() {
  if ($(this).hasClass("material-button")) {
    $(this).addClass("animate__animated animate__rotateOut");
  }

  setTimeout(function () {
    $(".box").css("display", "");
    $(".box").addClass("animate__animated animate__rotateIn");
  }, 500);
}

function onLoginCloseClicked() {
  $(".material-button").fadeIn();
  $(".box").fadeOut();
  $(".closeIcon").fadeOut();
  $(".hide-top").hide();

  $(".material-button").css({ transform: "scale(1)", "border-radius": "50%" });
  setTimeout(() => {
    $(".material-button>img").show();
    $(".material-button").css("box-shadow", "");
    $(".material-button").css("background-color", "transparent");
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
