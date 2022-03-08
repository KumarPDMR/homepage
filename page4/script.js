$(document).ready(() => {
  initModalAnim();
  initRadioBtn();
});

function initRadioBtn() {
  const st = {};

  st.flap = document.querySelector("#flap");
  st.toggle = document.querySelector(".toggle");

  st.choice1 = document.querySelector("#choice1");
  st.choice2 = document.querySelector("#choice2");

  st.flap.addEventListener("transitionend", () => {
    if (st.choice1.checked) {
      st.toggle.style.transform = "rotateY(-15deg)";
      setTimeout(() => (st.toggle.style.transform = ""), 400);
    } else {
      st.toggle.style.transform = "rotateY(15deg)";
      setTimeout(() => (st.toggle.style.transform = ""), 400);
    }
  });

  st.clickHandler = (e) => {
    if (e.target.tagName === "LABEL") {
      setTimeout(() => {
        st.flap.children[0].textContent = e.target.textContent;
      }, 250);
    }
  };

  document.addEventListener("DOMContentLoaded", () => {
    st.flap.children[0].textContent = st.choice2.nextElementSibling.textContent;
  });

  document.addEventListener("click", (e) => st.clickHandler(e));
}

function initModalAnim() {
  let modalEl = $(".modal");
  modalEl.addClass(modalEl.attr("data-animate-in"));

  modalEl.on("hide.bs.modal", function (event) {
    console.log("modal end");
    if (!modalEl.attr("data-end-hide") && modalEl.attr("data-animate-out")) {
      event.preventDefault();

      modalEl.addClass(modalEl.attr("data-animate-out"));
      if (modalEl.attr("data-animate-in")) {
        modalEl.removeClass(modalEl.attr("data-animate-in"));
      }
    }
    modalEl.removeAttr("data-end-hide");
  });

  modalEl.on("animationend", function () {
    if (
      modalEl.attr("data-animate-out") &&
      modalEl.hasClass(modalEl.attr("data-animate-out"))
    ) {
      modalEl.attr("data-end-hide", true);
      modalEl.modal("hide");
      modalEl.removeClass(modalEl.attr("data-animate-out"));
      if (modalEl.attr("data-animate-in")) {
        modalEl.addClass(modalEl.attr("data-animate-in"));
      }
    }
  });
}

function startAnim() {
  $("#card>img").attr("src", "../assests/COPS_Static-logo_200pix.png");

  setTimeout(() => {
    $("#card>img").attr("src", "../assests/cops_logo_anim_new.gif");
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
