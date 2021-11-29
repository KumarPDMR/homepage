var time = 5000;
var i = 1;
var stopChangeImg = false;


function changeImg() {

    if (stopChangeImg) {

        for (let j = 1; j <= 3; j++) {
            $(".image_slide" + j).css("z-index", '0');
            $(".image_slide" + j + ">div>img").css("display", "block");
        }
        $(".image_slide" + 1).css("z-index", '1');
        return;
    }

    $(".image_slide" + i).css("animation", 'none');
    $(".image_slide" + i + ">div>img").css("display", "none");

    for (let j = 1; j <= 3; j++) {
        $(".image_slide" + j).css("z-index", '0');
    }

    $(".image_slide" + i).css("z-index", '1');
    if (i === 3) {
        i = 1;
    } else {
        i = i + 1;
    }

    setTimeout(function() {
        $(".image_slide" + i + ">div>img").css("display", "block");
        $(".image_slide" + i).css("animation", 'slide 2s');
        $(".image_slide" + i).css("z-index", '2');
    }, 0);


    setTimeout("changeImg()", 7000);
}


function loading_logo_anim() {
    // $("#loading_logo_container").fadeOut();

    $("#loading_logo").css("animation", 'none');
    // $("#loading_logo").css("position" , 'absolute');
    $("#loading_logo").css("animation", 'fade 3s forwards');
    setTimeout(() => {
        $("#loading_logo_container").css('background', 'transparent');
        $("#loading_logo_container").removeClass('d-flex');
        $("#loading_logo_container").fadeOut();
        console.log("hide");
        console.log($("#loading_logo_container")[0]);
    }, 2000);

    setTimeout(function() {
        $("#bubble").css("animation", 'none');
        $("#bubble").css("animation", 'createBubble 2s cubic-bezier(0.16,0.87,0.48,0.99) forwards');
    }, 1000)
    setTimeout("animateDiv('.bubble');", 2000)

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

function showForm() {
    console.log("show form")
    stopChangeImg = true;

    setTimeout(function() {
        $(".overbox").css({
            "overflow": "hidden"
        })
        $(".overbox").addClass("back");
    }, 200)
    $(this).addClass('active').animate({
        "width": "700px",
        "height": "700px"
    });

    setTimeout(function() {
        $("#loginBtn").fadeIn(300);
    }, 700)


    // $("#loginBtn").removeClass("d-flex");
    // $("#loginBtn").fadeOut();
    $("#form").fadeIn();
}

function onBubbleClicked() {
    $("#bubble").css("animation", 'none');
    $("#bubble").css("animation", 'pop 2s cubic-bezier(0.16,0.87,0.48,0.99) forwards');

    setTimeout(function() {
        $("#bubble").css("animation", 'none');
        $("#bubble").css("animation", 'createBubble 2s cubic-bezier(0.16,0.87,0.48,0.99) forwards');
    }, 1000);
}

window.onload = function() {
    $("#loginBtn").click(showForm);
    $("#bubble").click(onBubbleClicked);

    setTimeout("loading_logo_anim()", 6150);
    for (let j = 1; j <= 3; j++) {
        $(".image_slide" + j).css("animation", 'none');
    }

    $(".material-button").click(function() {
        stopChangeImg = true;

        if ($(this).hasClass('material-button')) {
            setTimeout(function() {
                $(".overbox").css({
                    "overflow": "hidden"
                })
                $(".box").addClass("back");
            }, 200)
            $(this).addClass('active').animate({
                "width": "300px",
                "height": "500px"
            });

            setTimeout(function() {
                $(".shape").css({
                    "width": "50%",
                    "height": "50%",
                    "transform": "rotate(45deg)"
                })

                $(".overbox .title").fadeIn(300);
                $(".overbox .input").fadeIn(300);
                $(".overbox .button").fadeIn(300);
                $(".box").fadeIn(300);
                $(".material-button").fadeOut();
            }, 700)

            // $(this).removeClass('material-button');

        }

        if ($(".alt-2").hasClass('material-buton')) {
            $(".alt-2").removeClass('material-buton');
            $(".alt-2").addClass('material-button');
        }

    });


    const cursor = document.getElementById("cursor");
    document.addEventListener("mousemove", e => {
        cursor.setAttribute("style", `top: ${e.pageY -10 }px; left: ${e.pageX -10}px;`);

    });

    $(".material-button").mouseenter(function() {
        $("#cursor").addClass("login_cursor");
    })

    $(".material-button").mouseleave(function() {
        $("#cursor").removeClass("login_cursor");
    })
}