var i = 1;
var stopChangeImg = false;
var stopBubble = false;
var changeImgTimeout = null;
var changeImgTimeout1 = null;
var slideDownTimeout = null;

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
    $(".image_slide2>img").attr("src", "PDMR-logo-animation.gif_");
    $(".image_slide2>img").attr("src", "PDMR-logo-animation.gif");

    $(".image_slide" + i).css("animation", 'slide 2s');
    $(".image_slide" + i).css("z-index", '2');

    changeImgTimeout1 = setTimeout("changeImg()", 6500);
}

function loading_logo_anim() {
    $("#loading_logo").css("animation", 'none');
    $("#loading_logo").attr("src", "COPS-LOG_Anim_1.gif");
    $("#logo_text").fadeIn();

    setTimeout(() => {
        $("#loading_logo").attr("src", "COPS-LOGO.png");
        $("#loading_logo").css("animation", 'fade 3s forwards');
        $("#logo_text").fadeOut();
    }, 6000);

    setTimeout(() => {
        $("#loading_logo_container").css('background', 'transparent');
        $("#loading_logo").fadeOut(0);
        $("#loading_logo_container").fadeOut();
    }, 8500);

    setTimeout(() => {
        $(".image_slide1>div>img").attr("src", "COPS-LOG_Anim_1.gif");
    }, 9000);

    // setTimeout(function () {
    //     $("#bubble").css("animation", 'none');
    //     $("#bubble").css("animation", 'createBubble 2s cubic-bezier(0.16,0.87,0.48,0.99) forwards');
    // }, 1000);

    // setTimeout("animateDiv('.bubble');", 2000);

    setTimeout(function () {
        $("#main_container").attr("style", "");
    }, 2000);

    $(".image_slide1>div>img").attr("src", "COPS-LOGO.png");
    setTimeout("changeImg()", 15000);
}

function makeNewPosition() { 
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh, nw];
}

function animateDiv(myclass) {
    if (stopBubble) {
        return;
    }
    var newq = makeNewPosition();
    $(myclass).animate({
        top: newq[0],
        left: newq[1]
    }, 3000, function () {
        animateDiv(myclass);
    });
};

function onBubbleClicked() {
    $(".bubble").css("animation", 'none');
    $(".bubble").css("animation", 'pop 2s cubic-bezier(0.16,0.87,0.48,0.99) forwards');

    setTimeout(() => {
        $(".bubble").css({top: 0, left: 0});
        setTimeout(function () {
            $(".bubble").css("animation", 'none');
            $(".bubble").css("animation", 'createBubble 2s cubic-bezier(0.16,0.87,0.48,0.99) forwards');
            stopBubble = false;
            animateDiv(".bubble");
        }, 4000);
    }, 3000);

    stopBubble = true;

}

function onLoginButtonClicked() {
    stopChangeImg = true;

    $(".image_slide" + 1).css("z-index", '2');
    for (let j = 2; j <= 3; j++) {
        $(".image_slide" + j).css("z-index", '');
    }

    $(".image_slide1>div>img").attr("src", "COPS-LOGO.png");

    if ($(this).hasClass('material-button')) {
        setTimeout(function () {
            $(".overbox").css({"overflow": "hidden"})
        }, 200);

        $(this).css("background-color","#0288d1");
        $(".material-button>img").hide();

        $(this).addClass("active").animate({"width": "300px", "height": "500px", "border-radius": "10px"});

        setTimeout(function () {
            $(".box").fadeIn(300);
            $(".closeIcon").fadeIn(300);
            $(".material-button").fadeOut();
        }, 700);
    }
}


function onLoginCloseClicked() {
    $(".material-button>img").show();
    $(".material-button").fadeIn();
    $(".box").fadeOut();
    $(".closeIcon").fadeOut();
    $(".material-button").css("background-color","transparent");
    $(".material-button").animate({"width": "64px", "height": "64px", "border-radius": "50%"});
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
   changeImgTimeout =  setTimeout("changeImg()", 6000);
}

window.onload = function () {
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
        cursor.css({
            top: e.clientY - cursor.height() / 1,
            left: e.clientX - cursor.width() / 1
        });
        cursor.addClass("login_cursor");
        cursor.html("<div class='cursor_text'>LOGIN</div>");
    })

    $("#bubble").click(onBubbleClicked);
    $(".material-button").click(onLoginButtonClicked);
    $(".closeIcon").click(onLoginCloseClicked);

    $("#loading_logo").attr("src", "COPS-LOGO.png");
    setTimeout("loading_logo_anim()", 2000);

    for (let j = 1; j <= 3; j++) {
        $(".image_slide" + j).css("animation", 'none');
    }
}
