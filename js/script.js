


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

// Get the navbar element
var navbar = document.getElementById("myNavbar");

// Listen for the scroll event
window.onscroll = function () {
  // If the scroll position is greater than a certain value, add the "scrolled" class
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navbar.classList.add("scrolled");
  } else {
    // Otherwise, remove the "scrolled" class
    navbar.classList.remove("scrolled");
  }
};


 // Smooth scroll behavior for anchor links
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });


  function openCV() {
    // Replace 'path/to/your/cv.pdf' with the actual path to your PDF file
    var pdfUrl = './doc/AichaCV.pdf';
    window.open(pdfUrl, '_blank');
  }

  // Attach the 'openCV' function to the click event of the CV button
  document.getElementById('cvButton').addEventListener('click', openCV);


