var i = 1;
var stopChangeImg = false;
var changeImgTimeout = null;
var changeImgTimeout1 = null;
var slideDownTimeout = null;


$(document).ready(() => {
    $(".closeIcon").hide();
    $(".hide-top").hide();

    initCursor();
    initSlider();

    $(".material-button").click(onLoginButtonClicked);
    $(".closeIcon").click(onLoginCloseClicked);

    $(".image_slide1>div>img").attr("src", "COPS-LOGO.png");
    $(".image_slide1>div>img").css({"width": "200px", "height": "200px"});

    $("#loading_logo").attr("src", "./COPS-LOGO.png");
    setTimeout("loadLogoAnim()", 2000);

});

function initSlider() {
    $('.my-slider').slick({
        arrows: false,
        focusOnSelect: true,
        vertical: true,
        verticalSwiping: true,
        swipeToSlide: true,
        Infinite: true,
        slidesToScroll: 1,
        focusOnSelect: true,
        centerMode: true,
        rows: 1,
        accessibility: true,
        adaptiveHeight: true,
        autoplay: false,
        draggable: true
    });

    var scrollCount = null;
    var scroll = null;

    $(".my-slider").on('wheel', function (e) {
        e.preventDefault();

        clearTimeout(scroll);
        scroll = setTimeout(function () {
            scrollCount = 0;
        }, 200);
        if (scrollCount) 
            return 0;
        
        scrollCount = 1;

        if (e.originalEvent.deltaY < 0) {
            $(this).slick('slickNext');
        } else {
            $(this).slick('slickPrev');
        }
    });


    $('.my-slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
        console.log($('.slick-slide.slick-current.slick-active>div>div').attr("id"))
    });
}

function initCursor() {
    var cursor = $('#cursor');
    var isCursorOnMaterial = false;

    $(window).mousemove(function (e) {
        if (isCursorOnMaterial) 
            return;

        cursor.css({
            top: e.clientY - cursor.height() / 2,
            left: e.clientX - cursor.width() / 2
        });
    });

    $(".material-button").mouseout(function () {
        isCursorOnMaterial = false;
        cursor.removeClass("login_cursor");
        cursor.html("")
    });

    $(".material-button").mousemove(function (e) {
        isCursorOnMaterial = true;
        cursor.addClass("login_cursor");
        cursor.css({
            top: e.clientY - cursor.height() / 1,
            left: e.clientX - cursor.width() / 1
        });
        cursor.html("<div class='cursor_text'>LOGIN</div>");
    });

    $(".closeIcon").mousemove(function (e) {
        isCursorOnMaterial = true;
        cursor.addClass("login_cursor");
        cursor.css({
            top: e.clientY - cursor.height() / 1,
            left: e.clientX - cursor.width() / 1
        });
        cursor.html("<div class='cursor_text'>CLOSE</div>");
    });

    $(".closeIcon").mouseout(function () {
        isCursorOnMaterial = false;
        cursor.removeClass("login_cursor");
        cursor.html("")
    });

}

function loadLogoAnim() {
    $(".box").hide();
    $("#loading_logo").css("animation", 'none');
    $("#loading_logo").attr("src", "COPS-LOG_Anim_1.gif");

    setTimeout(function () {
        $("#main_container").attr("style", "");
    }, 2000);

    // after gif logo finished
    setTimeout(() => {
        $("#loading_logo").attr("src", "COPS-LOGO.png");
        $("#loading_logo").css("z-index", '31');
        $("#loading_logo").css("animation", 'fade 3s forwards');
    }, 6000);

    setTimeout(() => {
        $(".bg-1").css("z-index", "109");
        $(".image_slide1").css("z-index", "112");
    }, 9000)

    setTimeout(() => {
        $(".bg-2").css("z-index", "108");
    }, 9500);

    setTimeout(() => {
        $(".bg-3").css("z-index", "107");
    }, 10000);

    setTimeout(() => {
        $(".bg-4").css("z-index", "106");
    }, 10500);

    setTimeout(() => {
        $(".bg-5").css("z-index", "105");
    }, 11000);

    setTimeout(() => {
        $("#loading_logo_container").css('background', 'transparent');
        $(".bg-1").css("z-index", "");
        $(".bg-2").css("z-index", "");
        $(".bg-3").css("z-index", "");
        $(".bg-4").css("z-index", "");
        $(".bg-5").css("z-index", "");
        $(".image_slide1").css("z-index", "2");
    }, 11500);

    setTimeout(() => {
        $("#loading_logo").fadeOut(200);
        $("#loading_logo_container").fadeOut();
        $("#loading_logo_container").addClass("hide-important");
        $(".image_slide1>div>img").attr("src", "COPS-LOGO.png");
    }, 11600);

    setTimeout(() => {
        $(".image_slide1>div>img").attr("src", "COPS-LOG_Anim_1.gif");
    }, 11700)


    setTimeout(() => {
        changeImg();
    }, 16000);
}

function changeImg() {
    if (stopChangeImg) {
        return;
    }

    let currentIndex = i;

    if (changeImgTimeout1 !== null) {
        clearTimeout(changeImgTimeout1);
    }

    $(".image_slide" + i).css("z-index", '1');

    for (let j = 1; j <= 3; j++) {
        if (j === i) {
            continue;
        }

        $(".image_slide" + j).css("z-index", '-3');
    }

    slideDownTimeout = setTimeout(function () {
        $(".image_slide" + currentIndex).css("animation", 'slideDown 2s');
    }, 200);

    if (i === 3) {
        i = 1;
    } else {
        i = i + 1;
    }

    $(".image_slide1>div>img").attr("src", "COPS-LOGO.png");
    $(".image_slide1>div>img").attr("src", "COPS-LOG_Anim_1.gif");
    $(".image_slide2>div>img").attr("src", "PDMR-logo-animation.gif_");
    $(".image_slide2>div>img").attr("src", "PDMR-logo-animation.gif");
    $(".image_slide3>div>img").attr("src", "Compuscript-logo-animation.gif_");
    $(".image_slide3>div>img").attr("src", "Compuscript-logo-animation.gif");

    $(".image_slide" + i).css("animation", 'slide 2s');
    $(".image_slide" + i).css("z-index", '2');

    changeImgTimeout1 = setTimeout("changeImg()", 6500);
}

function onLoginButtonClicked() {
    stopChangeImg = true;

    $(".image_slide" + 1).css("z-index", '2');
    for (let j = 2; j <= 3; j++) {
        $(".image_slide" + j).css("z-index", '');
    }

    $(".image_slide1>div>img").attr("src", "COPS-LOGO.png");

    if ($(this).hasClass('material-button')) {
        // setTimeout(function () {
        //     $(".overbox").css({"overflow": "hidden"})
        // }, 200);

        $(this).css("background-color", "#0288d1");
        $(".material-button>img").hide();

        $(this).addClass("active").css({"border-radius": "1px", "transform": "scale(7,12.5)"});
        // $(this).addClass("active").animate({"transform":"scale(9,12)"});
        // $(this).addClass("active").animate({"width": "300px", "height": "500px", "border-radius": "10px"});

        setTimeout(function () {
            $(".box").attr("style", "")
            // $(".box").fadeIn(300);
            $(".closeIcon").fadeIn(300);
            $(".hide-top").show();
            $(".material-button").fadeOut();
        }, 2000);
    }
}


function onLoginCloseClicked() {
    $(".material-button").fadeIn();
    $(".box").fadeOut();
    $(".closeIcon").fadeOut();
    $(".hide-top").hide();

    $(".material-button").css({"transform": "scale(1)", "border-radius": "50%"});
    setTimeout(() => {
        $(".material-button>img").show();
        $(".material-button").css("background-color", "transparent");
    }, 1000)
    stopChangeImg = false;
    i = 1;
    $(".image_slide1").css("z-index", '2');
    $(".image_slide2").css("z-index", '1');
    $(".image_slide3").css("z-index", '-3');

    $(".image_slide1>div>img").attr("src", "COPS-LOGO.png");
    $(".image_slide1>div>img").attr("src", "COPS-LOG_Anim_1.gif");
    if (changeImgTimeout !== null) {
        clearTimeout(changeImgTimeout);
        changeImgTimeout = null;
    }
    changeImgTimeout = setTimeout("changeImg()", 6000);
}


$("#scroll-content").scroll(function (event) {
    var newDiv = document.createElement("div");
    newDiv.innerHTML = "books";
    document.getElementById("scroll-content").appendChild(newDiv);
});
