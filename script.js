var i = 1;
var stopChangeImg = false;
var stopBubble = false;

function changeImg() {
    let timeout, timeout1;

    if (stopChangeImg) {

        if (timeout) {
            clearTimeout(timeout);
        }

        if (timeout1) {
            clearTimeout(timeout1);
        }

        return;
    }
    $(".image_slide" + i).css("z-index", '1');

    for (let j = 1; j <= 3; j++) {
        // $(".image_slide" + j).css("animation", 'none');
        if (j === i) {
            continue;
        }
        $(".image_slide" + j).css("z-index", '-3');
    }

    let currentIndex = i;

    timeout1 = setTimeout(function () {
        $(".image_slide" + currentIndex).css("animation", 'slideDown 2s');
    }, 200);

    if (i === 3) {
        i = 1;
    } else {
        i = i + 1;
    }

    timeout1 = setTimeout(function () {
        $(".image_slide" + i).css("animation", 'slide 2s');
        $(".image_slide" + i).css("z-index", '2');
    }, 0);

    $(".image_slide1>div>img").attr("src", "COPS-LOGO.png");
    $(".image_slide1>div>img").attr("src", "COPS-LOG_Anim_1.gif");
    setTimeout("changeImg()", 7000);
}

function loading_logo_anim() {
    $("#loading_logo").css("animation", 'none');
    $("#loading_logo").attr("src", "COPS-LOG_Anim_1.gif");

    setTimeout(() => {
        $("#loading_logo").attr("src","COPS-LOGO.png");
        $("#loading_logo").css("animation", 'fade 3s forwards');
    }, 6000);

    setTimeout(() => {
        $("#loading_logo_container").css('background', 'transparent');
        $("#loading_logo_container").fadeOut();
        $(".image_slide1>div>img").attr("src", "COPS-LOG_Anim_1.gif");
    }, 7000);

    setTimeout(function () {
        $("#bubble").css("animation", 'none');
        $("#bubble").css("animation", 'createBubble 2s cubic-bezier(0.16,0.87,0.48,0.99) forwards');
    }, 1000);

    setTimeout("animateDiv('.bubble');", 2000);

    setTimeout(function () {
        $("#main_container").attr("style", "");
    }, 2000);

    $(".image_slide1>div>img").attr("src", "COPS-LOGO.png");
    setTimeout("changeImg()", 13000);
}

function makeNewPosition() { // Get viewport dimensions (remove the dimension of the div)
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
    console.log("clicked");
    stopChangeImg = true;

    $(".image_slide" + 1).css("z-index", '2');
    for (let j = 2; j <= 3; j++) {
        $(".image_slide" + j).css("z-index", '');
    }

    $(".image_slide1>div>img").attr("src", "COPS-LOGO.png");

    if ($(this).hasClass('material-button')) {
        setTimeout(function () {
            $(".overbox").css({"overflow": "hidden"})
            // $(".box").addClass("back");
        }, 200);


        $(this).addClass("active").animate({"width": "300px", "height": "500px", "border-radius": "10px"});

        setTimeout(function () {
            $(".box").fadeIn(300);
            $(".closeIcon").fadeIn(300);
            $(".material-button").fadeOut();
        }, 700);
    }
}

function onLoginCloseClicked() {
    $(".material-button").fadeIn();
    $(".box").fadeOut();
    $(".closeIcon").fadeOut();
    $(".material-button").animate({"width": "100px", "height": "100px", "border-radius": "50%"});
    stopChangeImg = false;
    i = 1;
    $(".image_slide1>div>img").attr("src", "COPS-LOGO.png");
    $(".image_slide1>div>img").attr("src", "COPS-LOG_Anim_1.gif");
    setTimeout("changeImg()", 7000);
}

window.onload = function () {
    var cursor = $('#cursor');

    $(window).mousemove(function (e) {
        cursor.css({
            top: e.clientY - cursor.height() / 1,
            left: e.clientX - cursor.width() / 1
        });
    });

    // $(".material-button").mouseenter(function (e) {
    //     cursor.addClass("login_cursor");
    //     cursor.html("<div class='cursor_text'>LOGIN</div>")
    // });

    $(".material-button").mouseout(function () {
        cursor.removeClass("login_cursor");
        cursor.html("")
    });

    $(".material-button").mousemove(function (e) {
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
