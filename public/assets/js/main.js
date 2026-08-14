
  document.addEventListener("DOMContentLoaded", function () {
    const frame = document.querySelector(".showcase-frame");
    const image = document.querySelector(".showcase-image");

    if (!frame || !image) {
      return;
    }

    function finishLoading() {
      frame.classList.add("image-loaded");
    }

    if (image.complete && image.naturalWidth > 0) {
      finishLoading();
    } else {
      image.addEventListener("load", finishLoading, { once: true });
    }
  });
