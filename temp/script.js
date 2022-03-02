var index = 1;
var imageList = ["one", "two", "three"];

$(document).ready(() => {
  changeImg();
});

function changeImg() {

    $(`#${imageList[index - 1]}`).prop("checked", true);

    if (index === 3) {
      index = 1;
    } else {
      index = index + 1;
    }

    setTimeout(() => {

      changeImg();
    }, 5000);
}
