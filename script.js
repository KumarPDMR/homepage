var i = 1;
var stopChangeImg = false;


function changeImg() {
    if (stopChangeImg) {
        return;
    }

    for (let j = 1; j <= 3; j++) {
        $(".image_slide" + j).css("animation", 'none');
        if (j === i) {
            $(".image_slide" + j).css("z-index", '1');
            continue;
        }
        $(".image_slide" + j).css("z-index", '-3');
    }

    let currentIndex = i;

    setTimeout(function() {
        $(".image_slide" + currentIndex).css("animation", 'slideDown 2s');
    }, 200);

    if (i === 3) {
        i = 1;
    } else {
        i = i + 1;
    }

    setTimeout(function() {
        $(".image_slide" + i).css("animation", 'slide 2s');
        $(".image_slide" + i).css("z-index", '2');
    }, 0);

    setTimeout("changeImg()", 7000);
}


function loading_logo_anim() {
    $("#loading_logo").css("animation", 'none');
    $("#loading_logo").css("animation", 'fade 3s forwards');

    setTimeout(() => {
        $("#loading_logo_container").css('background', 'transparent');
        $("#loading_logo_container").removeClass('d-flex');
        $("#loading_logo_container").fadeOut();
    }, 2000);

    setTimeout(function() {
        $("#bubble").css("animation", 'none');
        $("#bubble").css("animation", 'createBubble 2s cubic-bezier(0.16,0.87,0.48,0.99) forwards');
    }, 1000);

    setTimeout("animateDiv('.bubble');", 2000);

    setTimeout(function() {
        $("#main_container").attr("style", "");
    }, 2000);

    setTimeout("changeImg()", 6000);
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
    var newq = makeNewPosition();
    $(myclass).animate({ top: newq[0], left: newq[1] }, 3000, function() {
        animateDiv(myclass);
    });
};

function onBubbleClicked() {
    $("#bubble").css("animation", 'none');
    $("#bubble").css("animation", 'pop 2s cubic-bezier(0.16,0.87,0.48,0.99) forwards');

    setTimeout(function() {
        $("#bubble").css("animation", 'none');
        $("#bubble").css("animation", 'createBubble 2s cubic-bezier(0.16,0.87,0.48,0.99) forwards');
    }, 1000);
}

function onLoginButtonClicked() {
    console.log("clicked");
    stopChangeImg = true;

    $(".image_slide" + 1).css("z-index", '2');
    for (let j = 2; j <= 3; j++) {
        $(".image_slide" + j).css("z-index", '');
    }

    if ($(this).hasClass('material-button')) {
        setTimeout(function() {
            $(".overbox").css({
                "overflow": "hidden"
            })
            $(".box").addClass("back");
        }, 200);

        $(this).addClass("active").animate({
            "width": "300px",
            "height": "500px"
        });

        setTimeout(function() {
            $(".box").fadeIn(300);
            $(".closeIcon").fadeIn(300);
            $(".material-button").fadeOut();
        }, 700);
    }
}

function onLoginCloseClicked() {
    console.log("close clicked");
    $(".material-button").fadeIn();
    $(".box").fadeOut();
    $(".closeIcon").fadeOut();
    $(".material-button").animate({
        "width": "140px",
        "height": "140px"
    });
    stopChangeImg = false;
    i = 1;
    setTimeout("changeImg()", 6000);
}


window.onload = function() {
    var cursor = $('#cursor');

    $(window).mousemove(function(e) {
        cursor.css({
           top: e.clientY - cursor.height() / 1,
           left: e.clientX - cursor.width() / 1
        });
    });

    $(".material-button").mouseenter(function(e) {
        cursor.addClass("login_cursor");
        cursor.html("<div class='cursor_text'>LOGIN</div>")  
    });

    $(".material-button").mouseout(function() {
            cursor.removeClass("login_cursor");
            cursor.html("")  
    });

    $("#bubble").click(onBubbleClicked);
    $(".material-button").click(onLoginButtonClicked);
    $(".closeIcon").click(onLoginCloseClicked);


    setTimeout("loading_logo_anim()", 6150);

    for (let j = 1; j <= 3; j++) {
        $(".image_slide" + j).css("animation", 'none');
    }

}