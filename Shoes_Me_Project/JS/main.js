/*Slides function*/
var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("slides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 5000); //
}

/*Navbar hidden when scrolling down and shown when scrolling back up function*/
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}



/*Read More button function*/
for (const btn of document.querySelectorAll('.btn')) {
  btn.addEventListener('click', () => {
    const [ dots, moreText ] = Array.from(btn.parentElement.querySelectorAll('span'));
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btn.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btn.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  });
}

/*Login Button function*/
function myFunction() {
  var x= document.getElementById("email").value;
alert("Welcome to Shoes me Mr. "+x);
}