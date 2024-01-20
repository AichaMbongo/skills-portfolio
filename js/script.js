function toggleText(cardId) {
    var dots = document.getElementById("dots-" + cardId);
    var moreText = document.getElementById("more-" + cardId);
    var btnText = document.getElementById("readMoreBtn-" + cardId);

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read More";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read Less";
      moreText.style.display = "inline";
    }
  }